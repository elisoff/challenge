'use strict';

angular.module('eventManagerApp.components')
    .component('emDatatable', {
        bindings: {
            selectedEvent: '<'
        },
        templateUrl: '/components/datatable/datatable.html',
        controller: function ($rootScope, EventNames, PicaticApiService) {

            var ctrl = this;

            ctrl.$onInit = function () {

                $rootScope.$broadcast(EventNames.EVENT_SELECTED, ctrl.selectedEvent);

            };

            ctrl.$onChanges = function (changesObj) {

                if (changesObj.selectedEvent.currentValue) {
                    PicaticApiService.getTicketPriceByEventId(changesObj.selectedEvent.currentValue.id)
                        .then(function (response) {

                            ctrl.ticketPrices = response.data;

                        }, function (response) {

                            // handle error

                        });
                }

            };

        }
    });
