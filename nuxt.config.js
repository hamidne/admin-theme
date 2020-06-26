import css from '~/configs/css'
import head from '~/configs/head'
import modules from '~/configs/modules'
import plugins from '~/configs/plugins'
import buildModules from '~/configs/buildModules'

export default {
	mode: 'spa',
	target: 'server',

	css,
	head,
	modules,
	plugins,
	buildModules,
	axios: {},
	build: {},
}
