/* ================================================================= *
 * Vue filters
 * ================================================================ */

'use strict'; // jshint

const obj = {
	topic(v) {
		v = v.toString()
		return v && `#${v}#`
	},
	
	_number(v) {
		if(!v || isNaN(v))
			return 0
		v >= 10 * 1000 && (v = parseInt(v / (10 * 1000)) + '万')
		return v
	},
	
	notice(v, layout) {
		if(!v)
			return ''
		v = v.toString()
		return '《' + v + '》'

	},
	
	joins(v, layout) {
		if(!v)
			return
		layout = layout || ','
		return v.join(layout)
	}
}

const _filter = Object.assign({}, obj)

export default Vue => {
	Object.keys(_filter).forEach(key => {
		Vue.filter(key, _filter[key])
	})
}