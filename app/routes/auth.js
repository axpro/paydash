'use strict';

exports.register = function(plugin, options, next) {
    // Load plugin dependencies
    plugin.dependency(['auth', 'crumb'], function(plugin, next) {

        var Controllers = {
            auth: {
                login: require('../controllers/auth/login'),
                logout: require('../controllers/auth/logout')
            }
        };

        plugin.route([

            // auth Routes
            {
                method: 'GET',
                path: '/login',
                config: Controllers.auth.login.showForm
            }, {
                method: 'POST',
                path: '/login',
                config: Controllers.auth.login.postForm
            }, {
                method: '*',
                path: '/logout',
                config: Controllers.auth.logout
            }
        ]);

        next();
    });

    next();
};

exports.register.attributes = {
    name: 'auth_routes',
    version: require('../../package.json').version
};
