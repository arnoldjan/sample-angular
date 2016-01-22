'use strict';

module.exports = angular.module('user', [])
    .controller('UserListController', require('./controller/ListController'))
    //.controller('UserDetailController', require('./controller/DetailController'))
;