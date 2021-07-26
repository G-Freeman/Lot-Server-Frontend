<template>
	<div class="button" @mousedown="onclick">
		<slot/>
		<effectPulseCircle/>
	</div>
</template>

<script>
import effectPulseCircle from '@/components/effects/click-pulse-circle'
export default {
	name: 'PreloaderPulseCircle',
	components: { effectPulseCircle },
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
					effectWrapper.style.width  = this.size;
					effectWrapper.style.height = this.size;
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
.button {
	position: relative;
	height: min-content;
	display: block;
	color: #d4cfd5;
	background: rgb(85,81,89);
	background: linear-gradient(180deg, rgb(85, 81, 89) 0%, rgba(44,49,59,1) 100%);
	text-align: center;
	padding: 12px;
	font-size: 24px;
	user-select: none;
	border: solid #876052 1px;
	border-radius: 4px;
	overflow: hidden;
	cursor: pointer;
	margin: 12px;
	&.active {
		background: linear-gradient(180deg, rgb(54, 64, 48) 0%, rgb(43, 47, 28) 100%);
	}
	&:hover {
		filter: brightness(1.1);
	}
	&:active {
		filter: brightness(.9);
	}
}
</style>
