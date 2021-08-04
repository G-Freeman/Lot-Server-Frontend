<template>
  <section class="main">
    <div class="debug-window">
      <div class="websocket">
		<VButton
		  :class="{active:ws_init_response.status}"
		  style="min-width: 140px"
		  @click="wsToggle"
		>
			{{ ws_init_response.status?'Disconnect':'Connect' }}
		</VButton>
        <div class="flex-vertical">
          <div class="text-info" v-text="'Connected: '+ws_init_response.status" />
          <div
            class="text-info"
            :class="{
              ws_init_success:ws_init_response.status,
              ws_init_error:!ws_init_response.status
            }"
            v-text="'Response: '+ws_init_response.msg||'-'"
          />
        </div>
      </div>
      <div class="separator-line" />
	  <TabContent :childs="[[Home,Green,Red,Blue],[VButton,Red],[VButton,Red]]"/>
	  <TabContent :childs="[[Home,Green,Red,Blue]]"/>
	  <TabContent :childs="[Home,Green,Red,Blue]"/>
    </div>
  </section>
</template>

<script lang="ts">
import Vue			from 'vue'
import VButton		from '~/components/input/button.vue'
import TabContent	from '~/components/containers/tab-content/v-tab-content.vue'
import Green		from '~/layouts/green.vue'
import Red			from '~/layouts/red.vue'
import Blue			from '~/layouts/blue.vue'
import Home			from '~/layouts/home.vue'

export default Vue.extend({
	components: { TabContent, VButton, Home, Green, Red, Blue },
	data () {
		return {
			ws: {} as WebSocket,
			ws_init_response: { status: false, msg: '' },
			ws_init_status: null,
			connected: false
		}
	},
	computed: {
		Green()		{ return Green;	},
		VButton()	{ return VButton;	},
		Red()		{ return Red;	},
		Blue()		{ return Blue;	},
		Home()		{ return Home;	}
	},
	mounted () {

	},
	methods: {
		wsToggle () {
			if (this.connected) {
				this.ws.close()
			} else {
				this.ws = new WebSocket('ws://localhost:9000')

				this.ws.onopen = () => {
					this.connected = true
					this.ws_init_response = { status: true, msg: 'Connected' }
				}
				// обработчик сообщений от сервера
				this.ws.onmessage = (message:any) => {
					this.ws_init_response = { status: true, msg: message.data }
					console.log(message)
					console.log('Message: %s', message.data)
				}
				this.ws.onclose = () => {
					this.connected = false
					this.ws_init_response = { status: false, msg: '[client]: Connect closed' }
				}
				this.ws.onerror = (e:any) => {
					switch (e.target.readyState) {
					case 3: {
						this.connected = false
						this.ws_init_response = { status: false, msg: 'Connect failed' }
						console.log('ERROR', e)
					}
					}
				}
			}
		},
		// функция для отправки echo-сообщений на сервер
		wsSendEcho (value: any) {
			this.ws.send(JSON.stringify({ action: 'ECHO', data: value.toString() }))
		},
		// функция для отправки команды ping на сервер
		wsSendPing () {
			this.ws.send(JSON.stringify({ action: 'PING' }))
		}
	}
})
</script>

<style scoped lang="scss">
	.main {
		background: black;
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		user-select: none;
		@include md-desktop {
			background: black;
		}
		.section {
			display: flex;
			justify-content: space-between;
			padding: 12px;
		}
		.debug-window {
			width: 600px;
			height: auto;
			background: #111111;
			padding: 0;
			.websocket {
				min-height: 100px;
				display: flex;
				padding: 12px;
				background: rgb(17,17,17);
				background: linear-gradient(120deg, rgba(17,17,17,1) 0%, rgba(27,27,29,1) 100%);
			}
			.separator-line {
				height: 6px;
				background: #ff8b02;
			}
			.text-info {
				color: #d4cfd5;
				&.ws_init_error     { color: #ae0000; }
				&.ws_init_success   { color: #007e00; }
			}
			.flex-vertical {
				width: 100%;
				display: flex;
				flex-direction: column;
				margin: 12px;
			}
			.small-btn {
				height: min-content;
				display: block;
				color: #d4cfd5;
				background: rgb(85,81,89);
				background: linear-gradient(180deg, rgb(85, 81, 89) 0%, rgba(44,49,59,1) 100%);
				text-align: center;
				padding: 4px;
				font-size: 12px;
				user-select: none;
				border: solid #876052 1px;
				border-radius: 4px;
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
		}
	}
</style>
