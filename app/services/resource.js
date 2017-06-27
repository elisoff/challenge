'use strict';

angular.module('eventManagerApp.services')
    .factory('resource', function ($http, $resource) {

        return function (apiUrl, actions) {

            angular.forEach(actions || {}, function (action, name) {
                actions[name].url = apiUrl + action.url;
                actions[name].transformRequest = $http.defaults.transformRequest.concat(function (data) {
                    return data;
                });
            });

            return $resource(apiUrl, {}, actions);

        };

    });
