'use strict';

angular.module('eventManagerApp.components')
    .component('emNavbarList', {
        bindings: {
            eventsMap: '<',
            selectedEvent: '<'
        },
        templateUrl: '/components/navbar/navbar-list.html',
        controller: function () {

            var ctrl = this;

            ctrl.$onChanges = function (changesObj) {

                if (changesObj.eventsMap) {
                    ctrl.loadingEvents = true;

                    if (!changesObj.eventsMap.previousValue && changesObj.eventsMap.currentValue) {
                        ctrl.loadingEvents = false;
                    }
                }



            };

            ctrl.isEventsMapEmpty = function (eventsMap) {

                return eventsMap && Object.keys(eventsMap).length === 0;

            };

        }
    });
