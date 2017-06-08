"use strict";

const Conf = {
    CrossDomain: true,
    DB_URL: 'mongodb://localhost:27017/test',
    
    STATUS_SUCCESS: 0,
    STATUS_ERROR: 1,
    ACCOUNT_NOT_EXIST: 2,
    PASSWORD_ERROR: 3
}

module.exports = Conf