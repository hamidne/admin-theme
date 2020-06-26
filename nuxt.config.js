import head from '~/configs/head'

export default {
	mode: 'spa',
	target: 'server',

	head,
	css: [],
	plugins: [],
	components: true,
	buildModules: ['@nuxtjs/eslint-module'],
	modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios'],
	axios: {},
	build: {},
}
