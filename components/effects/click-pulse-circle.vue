<template>
  <div class="effect-region" @mousedown="onclick">
    <div :id="id+'X'+obj.id" :key="obj.id" v-for="obj in objects" class="pulse-circle">
      <div class="pulse"/>
    </div>
  </div>
</template>

<script>
export default {
	name: 'PreloaderPulseCircle',
	props: {
		id:         { default: 'effect-pulse-circle', type: String },
		duration:   { default: 1000, type:Number },
		size:       { default: '1200px', type:String }
	},
	data () {
		return {
			objects: [],
		}
	},
	methods: {
		onclick (e) {
			const rnd = Math.random();
			const newObj = { id: 'effect-'+rnd };
			this.objects.push(newObj);
			this.$nextTick(()=>{
				const effectWrapper = document.getElementById(this.id+'X'+'effect-'+rnd)
				if(effectWrapper) {
					if(this.size!=='1200px') {
						effectWrapper.style.width  = this.size;
						effectWrapper.style.height = this.size;
					}
					effectWrapper.style.left = (e.layerX - effectWrapper.offsetWidth / 2) + 'px'
					effectWrapper.style.top  = (e.layerY - effectWrapper.offsetHeight / 2) + 'px'
					setTimeout(() => {
						const index = this.objects.indexOf(newObj)
						this.objects.splice(index, 1);
					}, this.duration)
				}
			})

		}
	}
}
</script>

<style scoped lang="scss">
.effect-region {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	overflow: hidden;
	.pulse-circle {
		width: 1200px;
		height: 1200px;
		position: absolute;
		pointer-events: none;
		> .pulse {
			pointer-events: none;
			position: absolute;
			height: inherit;
			width: inherit;
			background: rgba(0, 0, 0, 0.2);
			border-radius: 50%;
			opacity: 0;
			animation: animate-circle 1s cubic-bezier(1,.25,.6,.8) 1;
		}
	}
	@keyframes animate-circle {
		from {
			transform: scale(0);
			opacity: 1;
		}
		to {
			transform: scale(1);
			opacity: 0;
		}
	}
}
</style>
