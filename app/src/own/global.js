/* ================================================================= *
 * Vue global functions
 * ================================================================ */

'use strict'; // jshint


class Global {
    constructor() {}

    checkAccount() {

    }
}

export default Vue => {
    Vue.prototype.$global = new Global()
}