'use strict';

const loginModel = require('../models/login'),
    conf = require('../conf/conf')

class LOGIN {
    constructor() {
        this.NewResponse = (code, msg = '') => {
            return {
                code: code,
                errMsg: msg
            }
        }
    }

    async Login(req, res) {
        let code
        try {
            code = await loginModel.Login(req.body.account, req.body.password)
        } catch (err) {
            code = err
        }
        res.json(this.NewResponse(code))
    }
}

module.exports = new LOGIN()