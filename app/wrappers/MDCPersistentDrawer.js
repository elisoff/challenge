'use strict';

angular.module('eventManagerApp.services')
    .factory('MDCPersistentDrawer', function ($window) {
        return $window.mdc.drawer.MDCPersistentDrawer;
    });
