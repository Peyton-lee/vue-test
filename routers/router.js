const conf = require('../conf/conf'),
      loginController = require('../controllers/login')

module.exports = app => {
    // Cross Domain
    if (conf.CrossDomain) {
        app.all('*', (req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*")
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept")
            res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
            res.header("X-Powered-By", ' 3.2.1')
            res.header("Content-Type", "application/json;charset=utf-8")
            next()
        })
    }

    app.post('/login', (req, res) => {
        loginController.Login(req, res)
    })
}