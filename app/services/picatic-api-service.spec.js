'use strict';

/* globals inject */
describe('Services - PicaticApiService', function () {

    beforeEach(module('eventManagerApp.services'));

    var PicaticApi;
    beforeEach(module(function ($provide) {

        PicaticApi = jasmine.createSpyObj('PicaticApi', ['getEventById', 'getEventsByUserId', 'getTicketPriceByEventId',
            'updateTicketPrice']);
        $provide.value('PicaticApi', PicaticApi);

    }));

    var $rootScope;
    var $q;
    var PicaticApiService;
    beforeEach(inject(function (_$rootScope_, _$q_,
                                _PicaticApiService_) {
        $q = _$q_;
        $rootScope = _$rootScope_;
        PicaticApiService = _PicaticApiService_;
    }));

    describe('getEventById', function () {

        it('should retrieve and return an event by its id', function () {

            var response = {
                data: {
                    attributes: {
                        summary: 'One of the attributes - event summary'
                    },
                    id: '67074',
                    type: 'event'
                },
                meta: {
                    'license-url': 'https://www.picatic.com/p/terms',
                    version: '0.0.101.20160519.002947'
                }
            };

            PicaticApi.getEventById.and.returnValue({ $promise: $q.resolve(response) });

            var eventResponse;
            PicaticApiService.getEventById(response.data.id)
                .then(function (response) {

                    eventResponse = response;

                });

            $rootScope.$apply();

            expect(eventResponse).toEqual(response);
            expect(PicaticApi.getEventById).toHaveBeenCalledWith({ eventId: response.data.id });

        });

    });

    describe('getEventsByUserId', function () {

        it('should retrieve and return a list of events by user id', function () {

            var userId = 123;

            var response = {
                data: [{
                    attributes: {
                        summary: 'One of the attributes - event summary'
                    },
                    id: '67074',
                    type: 'event'
                }],
                meta: {
                    'license-url': 'https://www.picatic.com/p/terms',
                    version: '0.0.101.20160519.002947'
                }
            };

            PicaticApi.getEventsByUserId.and.returnValue({ $promise: $q.resolve(response) });

            var eventsResponse;
            PicaticApiService.getEventsByUserId(userId)
                .then(function (response) {

                    eventsResponse = response;

                });

            $rootScope.$apply();

            expect(eventsResponse.data.length).toBe(1);
            expect(eventsResponse).toEqual(response);
            expect(PicaticApi.getEventsByUserId).toHaveBeenCalledWith({ userId: userId });

        });

    });

    describe('getTicketPriceByEventId', function () {

        it('should retrieve and return a `ticket_price` model filtering by event id', function () {

            var eventId = 123;

            var response = {
                data: {
                    attributes: {
                        name: 'Ticket Price Name - this is one of the attributes'
                    },
                    id: 49076,
                    type: 'ticket_price'
                },
                meta: {
                    'license-url': 'https://www.picatic.com/p/terms',
                    version: '0.0.101.20160519.002947'
                }
            };

            PicaticApi.getTicketPriceByEventId.and.returnValue({ $promise: $q.resolve(response) });

            var ticketPrices;
            PicaticApiService.getTicketPriceByEventId(eventId)
                .then(function (response) {

                    ticketPrices = response;

                });

            $rootScope.$apply();

            expect(ticketPrices).toEqual(response);
            expect(PicaticApi.getTicketPriceByEventId).toHaveBeenCalledWith({ eventId: eventId });

        });

    });

    describe('updateTicketPrice', function () {

        it('should successfully update a ticket price when authorized', function () {

            var updatedTicketPrice = {
                data: {
                    attributes: {
                        name: 'Updated Ticket Price Name'
                    }
                },
                id: 123

            };

            PicaticApi.updateTicketPrice.and.returnValue({ $promise: $q.resolve({}) });

            var response;
            PicaticApiService.updateTicketPrice(updatedTicketPrice.data.id, updatedTicketPrice)
                .then(function (r) {
                    response = r;
                });

            $rootScope.$apply();

            expect(response).toBeDefined();
            expect(PicaticApi.updateTicketPrice)
                .toHaveBeenCalledWith({ ticketPriceId: updatedTicketPrice.data.id, data: updatedTicketPrice });

        });

        it('should fail to update a ticket price when unauthorized', function () {

            var updatedTicketPrice = {
                data: {
                    attributes: {
                        name: 'Updated Ticket Price Name'
                    }
                },
                id: 123

            };

            var rejectResponse = { status: 403 };
            PicaticApi.updateTicketPrice.and.returnValue({ $promise: $q.reject(rejectResponse) });

            var response;
            PicaticApiService.updateTicketPrice(updatedTicketPrice.data.id, updatedTicketPrice)
                .catch(function (r) {
                    response = r;
                });

            $rootScope.$apply();

            expect(response.status).toBe(403);
            expect(PicaticApi.updateTicketPrice)
                .toHaveBeenCalledWith({ ticketPriceId: updatedTicketPrice.data.id, data: updatedTicketPrice });

        });

    });

});
