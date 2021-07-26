<template>
	<div class="tab-content">
    <div style="height: 12px;" :style="{background}"></div>
		<div class="tab-content_header">
      <div class="header-wrapper">
        <div class="header-wrapper_tab" v-for="(el,i) in this.tabs" :key="i" @click="onTabClick(el)">
          <div style="width: 8px;" :style="{background}"/>
		  <!-- Normal tab -->
          <div v-if="el.id!==activeTab" class="additive" :style="{background}">
            <div class="tab_content" v-html="el.data"/>
          </div>
		  <!-- Active tab -->
          <div v-if="el.id===activeTab" class="subtractive">
            <div class="tab_content" v-html="el.data"/>
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
		<div class="tab-content_body">
			<effectPulseCircle />
		</div>

	</div>
</template>

<script>

import effectPulseCircle from '@/components/effects/click-pulse-circle'

export default {
	name: 'TabContent',
	components: { effectPulseCircle },
	data: function () {
		return {
			tabs: [
				{id:4,data:'Home'},
				{id:1,data:'Devices'},
				{id:2,data:'Commands'},
				{id:3,data:'Options'},
				{id:5,data:'Stats'}
			],
			activeTab: 3,
			active_tab_width: 64
		}
	},
	props: {
		id:         { default:'', type:String },
		background: { default:'#09090b', type:String }
	},
	computed: {

	},
	methods: {
		updated() {
			console.log('WWWWWWWWWWWWWWW')
		},
		mounted() {
      		console.log('UPDATED!!!!')
		},
		onTabClick(tab) {
			this.activeTab=tab.id;
		}
	}
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
				display: flex;
				.additive {
					position: relative;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					cursor: pointer;
					pointer-events: all;
					.tab_content {
						background: #111111;
					}
				}
				.subtractive {
					position: relative;
					color: #d4cfd5;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
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
		min-height: 120px;
		height: 0;
		background: #181818;
		background: linear-gradient(120deg, #181818 0%, #1c1b21 100%);
	}
}
</style>
