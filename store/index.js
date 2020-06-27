import objectPath from 'object-path'

export const getters = {
	layoutConfig: (state) => (path, defaultValue) => {
		return objectPath.get(state.config, path, defaultValue)
	},
	breadcrumbs(state) {
		return state.breadcrumbs
	},
	pageTitle(state) {
		const last = state.breadcrumbs[state.breadcrumbs.length - 1]
		if (last && last.title) {
			return last.title
		}
	},
	getClasses: (state) => (position) => {
		if (typeof position !== 'undefined') {
			return state.classes[position]
		}
		return state.classes
	},
}
