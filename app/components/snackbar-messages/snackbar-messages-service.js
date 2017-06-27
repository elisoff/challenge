'use strict';

angular.module('eventManagerApp.services')
    .service('SnackbarMessage', function (MDCSnackbar) {

        var self = this;

        self.show = function (message) {

            var snackbar = MDCSnackbar('.mdc-snackbar');

            snackbar.show({ message: message });

        };

    });
