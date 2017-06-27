'use strict';

angular.module('eventManagerApp.services')
    .factory('PicaticApi', function (AppSettings, resource) {

        return resource(AppSettings.apiUrl, {
            'getEventById': {
                method: 'GET',
                url: 'event/:eventId',
                params: { eventId: '@eventId' }
            },
            'getEventsByUserId': {
                method: 'GET',
                url: 'event?filter[user_id]=:userId&page[limit]=10&page[offset]=0',
                params: { userId: '@userId' }
            },
            'getTicketPriceByEventId': {
                method: 'GET',
                url: 'ticket_price?filter[event_id]=:eventId&page[limit]=10&page[offset]=0',
                params: { eventId: '@eventId' }
            },
            'updateTicketPrice': {
                method: 'PATCH',
                url: 'ticket_price/:ticketPriceId',
                params: { ticketPriceId: '@ticketPriceId' }
            }
        });

    });
