import head from '~/configs/head'
import modules from '~/configs/modules'
import buildModules from '~/configs/buildModules'

export default {
	mode: 'spa',
	target: 'server',

	head,
	modules,
	buildModules,
	css: [],
	plugins: [],
	axios: {},
	build: {},
}
