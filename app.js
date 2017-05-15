const express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    log = require('log-util'),

    routers = require('./routers/router'),
    conf = require('./conf/conf')

const app = express()

app.set('port', process.env.PORT || 1234)

app.use(bodyParser())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cookieParser())

routers(app)

app.use(express.static('views'))

app.listen(app.get('port'), () => {
    console.log('server listening on port:', app.get('port'))
})