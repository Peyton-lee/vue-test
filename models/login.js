'use strict';
const init = require('./init'),
    conf = require('../conf/conf')

class LOGIN {
    constructor() {
        this.mongo = init.mongoose
        this.Schema = this.mongo.Schema
        this.UserSchema = new this.Schema({
            username: {
                type: String
            },
            password: {
                type: String
            }
        })
        this.User = this.mongo.model('user', this.UserSchema)
    }

    Login(username, password) {
        let o = {
            username: username
        }
        return new Promise((resolve, reject) => {
            this.User.find(o, {
                password: 1
            }, (err, res) => {
                if (res.length == 1) {
                    password == res[0].password ? resolve(conf.STATUS_SUCCESS) : reject(conf.PASSWORD_ERROR)
                } else {
                    reject(conf.ACCOUNT_NOT_EXIST)
                }
            })
        })
    }
}

module.exports = new LOGIN()