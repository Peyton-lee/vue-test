/* ================================================================= *
 * Vue directives
 * ================================================================ */

'use strict'; // jshint

const _directives = {}

_directives.focus = {
    bind(el, t) {
            if (!!t.value)
                el.focus()
            el.childNodes > 0 && el.firstElementChild.focus()
                //            console.log(el.firstElementChild)
        },

        update(el, t) {
            if (!!t.value) {
                el.focus()
                    //                console.log("聚焦", el.children, t.value)
            }
        },

        unbind() {}
}

export default Vue => {
    Object.keys(_directives).forEach(key => {
        Vue.directive(key, _directives[key])
    })
}