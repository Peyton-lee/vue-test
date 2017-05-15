'use strict';

const loginModel = require('../models/login')

class LOGIN {
    constructor() {}
    
    Login(req, res) {
        console.log(req.body)
        loginModel.Login()        
        res.json({
            "code": 0
        })
    }
}
module.exports = new LOGIN()