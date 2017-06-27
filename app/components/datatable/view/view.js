'use strict';

angular.module('eventManagerApp.components')
    .component('emDataView', {
        bindings: {
            rowData: '<'
        },
        transclude: true,
        templateUrl: '/components/datatable/view/view.html',
        controller: function ($scope, EventNames) {

            var ctrl = this;

            ctrl.$onInit = function () {

                $scope.$on(EventNames.TICKET_UPDATE_OK, function () {
                    ctrl.editShown = false;
                });

                $scope.$on(EventNames.TICKET_UPDATE_FAILED, function () {
                    ctrl.editShown = false;
                });

            };


            ctrl.edit = function () {

               ctrl.editShown = true;

            };
        }

    });
