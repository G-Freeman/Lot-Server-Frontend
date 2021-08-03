<template>
	<div class="tab" @click="$emit('click')">
		<div style="width: 8px;" :style="{background}"/>
		<!-- Normal tab -->
		<div v-if="!active" class="additive" :style="{background}">
			<div class="tab_content" v-html="label"/>
		</div>
		<!-- Active tab -->
		<div v-if="active" class="subtractive">
			<div class="tab_content" v-html="label"/>
			<div class="tab_graphic">
				<div class="tab_graphic_center">
					<svg :width="12" height="28">
						<mask id="myMaskL">
							<rect x="00" y="00" :width="12" height="28" style="fill:white;" />
							<rect x="00" y="00" rx="6" :width="12" height="28" style="fill:black;" />
							<rect x="0" y="16" :width="12" height="12" style="fill:black;" />
							<rect :x="6" y="0" :width="6" height="28" style="fill:black;" />
						</mask>
						<rect x="00" y="00" :width="12" height="28" mask="url(#myMaskL)" :style="{fill:background}" />
					</svg>
					<svg :width="12" height="28">
						<mask id="myMaskR">
							<rect x="00" y="00" :width="12" height="28" style="fill:white;" />
							<rect x="00" y="00" rx="6" :width="12" height="28" style="fill:black;" />
							<rect x="0" y="16" :width="12" height="12" style="fill:black;" />
							<rect :x="0" y="0" :width="6" height="28" style="fill:black;" />
						</mask>
						<rect x="00" y="00" :width="12" height="28" mask="url(#myMaskR)" :style="{fill:background}" />
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "v-tab",
	props: {
		active:		{ default:false,	 type:Boolean },
		background:	{ default:'#09090b', type:String  },
		label:		{ default:'%NAME%',	 type:String  },
	},
}
</script>

<style scoped lang="scss">
.tab {
	max-width: 128px;
	display: flex;
	text-overflow: ellipsis;
	overflow: hidden;
	.additive {
		position: relative;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		cursor: pointer;
		pointer-events: all;
		.tab_content {
			background: #111111;
			text-overflow: ellipsis;
			overflow: hidden;
		}
	}
	.subtractive {
		position: relative;
		color: #d4cfd5;
		white-space: nowrap;
		cursor: pointer;
		svg {}
	}
	.tab_content {
		padding: 6px;
		position: relative;
		color: #d4cfd5;
		border: solid #070604 1px;
		border-bottom: 0;
		border-radius: 6px 6px 0 0;
	}
	.tab_graphic {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		&_center {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-between;
		}
	}
}
</style>
