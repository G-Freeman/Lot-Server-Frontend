<template>
	<div class="tab-content">
    <div :style="{background, height:header_height}"></div>
	  <div class="tab-content_header">
      <div class="header-wrapper">

        <div class="header-wrapper_tab" v-for="(tabName,i) in this.tabs" :key="i" @click="onTabClick(i)">
          <div style="width: 8px;" :style="{background}"/>
		  <!-- Normal tab -->
          <div v-if="activeTab!==i" class="additive" :style="{background}">
            <div class="tab_content" v-html="tabName"/>
          </div>
		  <!-- Active tab -->
          <div v-if="activeTab===i" class="subtractive">
            <div class="tab_content" v-html="tabName"/>
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
      </div>

      <div style="width: 100%;" :style="{background}">

      </div>

	  </div>
	  <div class="tab-content_body" @click="()=>{}">
		<component :is="component"></component>
<!--		<slot id="tab-content_body" v-slot:default="slotProps"></slot>-->
	  	<effectPulseCircle/>
	  </div>

	</div>
</template>

<script>

import effectPulseCircle from '@/components/effects/click-pulse-circle'
import VButton			 from '@/layouts/red.vue'
// import VButton			 from '@/components/input/button.vue'

export default {
	name: 'TabContent',
	components: { effectPulseCircle },
	data: function () {
		return {
			tabs: [],
			additionTabs: [],
			activeTab: 0,
			active_tab_width: 64,
			curComponent: null,
		}
	},
	props: {
		id:        		{ default:'', type:String },
		background:		{ default:'#09090b', type:String },
		header_height:	{ default:'12px', type:String },
		childs:			{ default:[], type:[] },
		additionChilds:		{ default:[], type:[] },
	},
	computed: {
		VButton()	{ return VButton; },
		console()	{ return console; },
		component() { return this.curComponent; }
	},
	methods: {
		updated() {
			console.log('WWWWWWWWWWWWWWW')
		},

		onTabClick(index) {
			this.curComponent=this.childs[index];
			this.activeTab=index;
		}
	},
	mounted() {
		for(const child of this.childs) {
			this.tabs.push(child.name);
		}
		for(const child of this.additionChilds) {
			this.additionTabs.push(child.name);
		}
		this.onTabClick(this.activeTab);
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
			display: flex;
			&_tab {
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
					svg {

					}
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
   		}
	}
	&_body {
		position: relative;
		min-height: 320px;
		padding: 44px 12px 12px 12px;
		height: 0;
		background: #181818;
		background: linear-gradient(120deg, #181818 0%, #1c1b21 100%);
	}
}
</style>
