'use strict';

angular.module('eventManagerApp.components')
    .component('emDataEdit', {
        bindings: {
            rowData: '<'
        },
        templateUrl: '/components/datatable/edit/edit.html',
        controller: function ($scope, EventNames, PicaticApiService, SnackbarMessage) {

            var ctrl = this;

            ctrl.save = function (ticketPrice) {

                PicaticApiService.updateTicketPrice(ticketPrice.id, ticketPrice)
                    .then(function (response) {

                        $scope.$emit(EventNames.TICKET_UPDATE_OK, response.data);

                        SnackbarMessage.show('Success! Your changes were saved.');

                    }, function (response) {

                        var message = 'Oh no! We couldn\'t save your changes.';

                        switch (response.status) {
                        case 403:
                            message = 'Looks like you don\'t have permission to update.';
                        }

                        $scope.$emit(EventNames.TICKET_UPDATE_FAILED);

                        SnackbarMessage.show(message);


                    });

            };

        }
    });
