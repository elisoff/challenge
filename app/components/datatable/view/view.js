'use strict';

angular.module('eventManagerApp.components')
    .component('emDataView', {
        bindings: {
            data: '<'
        },
        templateUrl: '/components/datatable/view/view.html',
        controller: function () {

            var ctrl = this;

            ctrl.edit = function (data) {



            }
        }

    });
