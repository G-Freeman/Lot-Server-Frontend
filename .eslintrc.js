module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	extends: [
		'@nuxtjs/eslint-config-typescript',
		'plugin:nuxt/recommended'
	],
	plugins: [
	],
	// add your custom rules here
	rules: {
		indent: [2, 'tab'],
		'no-tabs': 0,
		'max-len': ['error', { code: 120 }],
		'vue/max-len': ['error', {
			code: 120,
			template: 100
		}]
	}
}
