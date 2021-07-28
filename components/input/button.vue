<template>
	<div class="button" @mousedown="$emit('click')">
		<effectPulseCircle/>
		<slot/>
	</div>
</template>

<script>
import effectPulseCircle from '@/components/effects/click-pulse-circle'
export default {
	name: 'Button',
	components: { effectPulseCircle },
}
</script>

<style scoped lang="scss">
.button {
	position: relative;
	height: -webkit-min-content;
	color: #d4cfd5;
	background: #555159;
	background: linear-gradient(180deg, #555159 0%, #2c313b 100%);
	text-align: center;
	padding: 12px;
	font-size: 24px;
	border: solid #111111 2px;
	border-radius: 4px;
	overflow: hidden;
	cursor: pointer;
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
