<template>
  <div class="loader">
    <div class="circle" />
    <div class="circle" />
    <div class="circle" />
  </div>
</template>

<script>
export default {
	name: 'PreloaderPulseCircle'
}
</script>

<style scoped lang="scss">
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
	.loader {
		position: absolute;
		height: 10rem;
		width: 10rem;
		> .circle {
			position: absolute;
			height: inherit;
			width: inherit;
			background: #FFA5AB;
			border-radius: 50%;
			animation: animate-circle 2s cubic-bezier(.9,.24,.62,.79) infinite;

			&:nth-of-type(1) {
				animation-delay: 0s;
			}
			&:nth-of-type(2) {
				animation-delay: calc(2s / -3);
			}
			&:nth-of-type(3) {
				animation-delay: calc(2s / -6);
			}
		}
	}
</style>
