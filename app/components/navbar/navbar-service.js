'use strict';

angular.module('eventManagerApp.services')
    .service('NavbarService', function (PicaticApiService) {

        var self = this;

        self.generateEventsMap = function (userId) {

            return PicaticApiService.getEventsByUserId(userId)
                .then(function (response) {

                    var events = response.data;

                    var eventsMap = {
                        active: {},
                        draft: {},
                        closed: {}
                    };
                    events.forEach(function (event) {
                        eventsMap[event.attributes.status] = eventsMap[event.attributes.status] || {};
                        eventsMap[event.attributes.status][event.id] = event.attributes;
                    });

                    return eventsMap;

                });

        };

    });
