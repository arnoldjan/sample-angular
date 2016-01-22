'use strict';

module.exports = require('angular')
    .module('shared', [])
    .config(['ResourceBuilderProvider', function (ResourceBuilderProvider) {
        var resources = require('./resource/index');
        ResourceBuilderProvider.addResources(resources);
    }])
    // ===================================================================================================================
;