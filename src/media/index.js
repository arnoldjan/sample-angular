'use strict';

module.exports = require('angular')
    .module('media', [
            require('./user').name
        ]
    )
;