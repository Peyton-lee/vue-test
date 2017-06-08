"use strict"
const mongoose = require('mongoose'),
    conf = require('../conf/conf')

mongoose.connect(conf.DB_URL)

// 连接成功 此处执行完毕可将mongoose对象暴露出去生成Schema模型
mongoose.connection.on('connected', () => {
        console.log('Mongoose connection open to ' + conf.DB_URL)
    })
    .on('error', (err) => { // 连接异常
        console.log('Mongoose connection error: ' + err)
    })
    .on('disconnected', () => { // 连接断开
        console.log('Mongoose connection disconnected')
    })

module.exports.mongoose = mongoose