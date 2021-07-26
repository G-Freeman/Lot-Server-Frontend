<template>
	<div class="button" @mousedown="$emit('click')">
		<effectPulseCircle/>
		<slot/>
	</div>
</template>

<script>
import effectPulseCircle from '@/components/effects/click-pulse-circle'
export default {
	name: 'PreloaderPulseCircle',
	components: { effectPulseCircle },
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
