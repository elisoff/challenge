'use strict';

angular.module('eventManagerApp.components')
    .component('eventManager', {
        bindings: {
            selectedEvent: '<'
        },
        templateUrl: '/components/event-manager/event-manager.html'
    });
