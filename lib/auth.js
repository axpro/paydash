'use strict';

exports.register = function(server, options, next) {
    
    server.dependency(['hapi-context-credentials', 'hapi-auth-cookie', 'sequelize'], function(server, next) {

        server.auth.strategy('standard', 'cookie', {
            password: options.cookieSecret, // cookie secret
            cookie: options.cookieName, // Cookie name
            isSecure: false, // required for non-https applications
            clearInvalid: true,
            ttl: 24 * 60 * 60 * 1000, // Set session to 1 day
            redirectTo: '/login',
            // redirectOnTry: false, TODO : check out 
        });

        // Blacklist all routes.
        server.auth.default({
            strategy: 'standard'
        });

        return next();
    });

    return next();
};

exports.register.attributes = {
    name: 'auth'
};
