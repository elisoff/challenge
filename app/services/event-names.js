'use strict';

angular.module('eventManagerApp.services')
    .factory('EventNames', function () {

        return {

            EVENT_SELECTED: 'event selected',
            NAVBAR_LOADED: 'navbar loaded',
            TICKET_UPDATE_OK: 'ticket update ok',
            TICKET_UPDATE_FAILED: 'ticket update failed'

        };

    });
