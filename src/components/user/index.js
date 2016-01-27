'use strict';

var ModuleName = 'user',
    RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])
    .controller('UserListController', require('./controller/list-controller'))

    .config(function ($stateProvider) {
        angular.forEach(RoutingConfig, function (config, name) {
            $stateProvider.state(name, config);
        });
    })
;