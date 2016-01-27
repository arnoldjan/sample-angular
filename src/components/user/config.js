'use strict';

module.exports = {
    'app': {
        url: '',
        abstract: true
    },
    'app.user': {
        url: '/user',
        abstract: false,
        views: {
            'main@': {
                templateUrl: './views/user/user-list.html',
                controller: 'UserListController as userListVm'
            }
        }
    },
    'app.user.detail': {
        url: '/{userId:[0-9]{4-16}}'
    }
};