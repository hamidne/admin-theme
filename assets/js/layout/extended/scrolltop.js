'use strict'
import KTUtil from '../../components/util'
import KTScrolltop from '../../components/scrolltop'

var KTLayoutScrolltop = (function () {
	// Private properties
	var _element
	var _object

	// Private functions
	var _init = function () {
		_object = new KTScrolltop(_element, {
			offset: 300,
			speed: 600,
		})
	}

	// Public methods
	return {
		init: function (id) {
			_element = KTUtil.getById(id)

			if (!_element) {
				return
			}

			// Initialize
			_init()
		},

		getElement: function () {
			return _element
		},
	}
})()

export default KTLayoutScrolltop
