/* ================================================================= *
 * All Http Api
 * ================================================================ */

export default Vue => {
    'use strict';

    // HttpApi {Class}
    class HttpApi {
        constructor() {
            this.$http = Vue.axios
            this.Addr = 'http://localhost:1234'
        }

        /** 
         * Login
         * @param: account {string}
         * @param: password {string}
         */
        login(account, password) {
            return new Promise((resolve, reject) => {
                this.$http.post(this.Addr + '/login', {
                        account, password
                    })
                    .then((response) => {
                        resolve(response)
                    })
                    .catch((response) => {
                        reject(response)
                    })
            })
        }
    }

    // New api object for Vue prototype
    Vue.prototype.$HTTP = new HttpApi()
}