import head from '~/configs/head'
import modules from '~/configs/modules'

export default {
	mode: 'spa',
	target: 'server',

	head,
	modules,
	css: [],
	plugins: [],
	components: true,
	buildModules: ['@nuxtjs/eslint-module'],
	axios: {},
	build: {},
}
