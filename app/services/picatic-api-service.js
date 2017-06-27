'use strict';

angular.module('eventManagerApp.services')
    .service('PicaticApiService', function (PicaticApi) {

        var self = this;

        self.getEventById = function (eventId) {

            return PicaticApi.getEventById({ eventId: eventId}).$promise;

        };


        self.getEventsByUserId = function (userId) {

            return PicaticApi.getEventsByUserId({ userId: userId}).$promise;

        };

        self.getTicketPriceByEventId = function (eventId) {

          return PicaticApi.getTicketPriceByEventId({ eventId: eventId}).$promise;

        };

        self.updateTicketPrice = function (ticketPriceId, updatedTicketPrice) {

            return PicaticApi.updateTicketPrice({ ticketPriceId: ticketPriceId, data: updatedTicketPrice }).$promise;

        };

    });
