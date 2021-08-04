<template>
	<div class="tab-content">
		<div :style="{background, height:header_height}"></div>
		<div class="tab-content_header">
			<div class="header-wrapper">
				<template v-for="(group,gi) in normalizedChilds">
					<div class="tab-group" :key="'group-'+gi">
						<Tab v-for="(tab,ti) in group" :key="'tab-'+ti"
							@click="onTabClick(gi,ti)"
							:class="tab.align"
							:label="tab.name"
							:active="gi===activeTab.group&&ti===activeTab.index"
							:background="background"
						/>
					</div>
					<div class="tab-group-space" v-if=""></div>
				</template>
			</div>
		</div>
		<div class="tab-content_body" @click="()=>{}">
			<effectPulseCircle/>
			<component :is="component"/>

		</div>

	</div>
</template>

<script>
import effectPulseCircle from '@/components/effects/click-pulse-circle'
import Tab			 	 from '@/components/containers/tab-content/v-tab'

export default {
	name: 'TabContent',
	components: { effectPulseCircle, Tab },
	data: function () {
		return {
			activeTab: {group:0,index:0},
			curComponent: null,
		}
	},
	props: {
		id:        		{ default:'', type:String },
		background:		{ default:'#09090b', type:String },
		header_height:	{ default:'12px', type:String },
		childs:			{ default:[], type:[] },
	},
	computed: {
		console()	{ return console; },
		component() { return this.curComponent; },
		normalizedChilds() {
			return this.childs[0]?.name ? [this.childs] : this.childs;
		}
	},
	methods: {
		onTabClick(group,index) {
			this.curComponent=this.normalizedChilds[group][index];
			this.activeTab={group,index};
		}
	},
	mounted() {
		this.onTabClick(0,0);
	},
}
</script>

<style scoped lang="scss">
.tab-content {
	width: 100%;
	min-height: 120px;
	position: relative;
	background: rgb(24,24,24);
	background: linear-gradient(120deg, rgba(24,24,24,1) 0%, #1c1b21 100%);
	&_header {
		width: 100%;
		position: absolute;
		z-index: 1;
		display: flex;
		pointer-events: none;
		.header-wrapper {
			width: 100%;
			display: flex;
			justify-content: space-between;
			background: rgba(0, 0, 0, .05);
			.tab-group {
				display: flex;
			}
			.tab-group-space {
				width: 100%;
				background-color: #09090b;
				&:not(&:nth-child(2)):last-child {
					min-width: 8px;
					width: 8px;
				}
			}
			.left {
				align-self: start;
			}
			.right {
				align-self: end;
			}
   		}
	}
	&_body {
		position: relative;
		overflow: auto;
		min-height: 120px;
		padding: 44px 12px 12px 12px;
		height: 0;
		background: #181818;
		background: linear-gradient(120deg, #181818 0%, #1c1b21 100%);
	}
}
</style>
