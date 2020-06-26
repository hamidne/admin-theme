import css from '~/configs/css'
import head from '~/configs/head'
import axios from '~/configs/axios'
import build from '~/configs/build'
import modules from '~/configs/modules'
import plugins from '~/configs/plugins'
import buildModules from '~/configs/buildModules'

export default {
	mode: 'spa',
	target: 'server',

	css,
	head,
	build,
	axios,
	modules,
	plugins,
	buildModules,
}
