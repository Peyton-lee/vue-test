/* ================================================================= *
 * Vue filters
 * ================================================================ */

'use strict'; // jshint

const obj = {
    topic(v) {
        v = v.toString()
        return v && `#${v}#`
    }
}

const _filter = Object.assign({}, obj)

export default Vue => {
    Object.keys(_filter).forEach(key => {
        Vue.filter(key, _filter[key])
    })
}