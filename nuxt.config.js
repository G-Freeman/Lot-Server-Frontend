export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: process.env.npm_package_name || '',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'@/theme/index.scss',
		'reset-css/reset.css'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/style-resources'
	],
	styleResources: {
		sass: [],
		scss: [
			'@/theme/_mixins/*.scss',
			'@/theme/_vars/*.scss'
		],
		less: [],
		stylus: []
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}
