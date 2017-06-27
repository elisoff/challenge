'use strict';

angular.module('eventManagerApp.services')
    .factory('MDCSnackbar', function ($window) {

        var MDCSnackbar = $window.mdc.snackbar.MDCSnackbar;

        return function (elementClass) {
            return new MDCSnackbar($window.document.querySelector(elementClass));
        };
    });
