'use strict';

angular.module('eventManagerApp.components')
    .component('emNavbar', {
        bindings: {
            user: '<'
        },
        templateUrl: '/components/navbar/navbar.html',
        controller: function ($scope, $rootScope, $window, EventNames, NavbarService) {

            var ctrl = this;

            ctrl.$onInit = function () {

                var screenWidth = $window.innerWidth;

                ctrl.navbarShown = (screenWidth >= 768);

                $rootScope.$broadcast(EventNames.NAVBAR_LOADED);

                NavbarService.generateEventsMap(ctrl.user.id)
                    .then(function (eventsMap) {

                        ctrl.eventsMap = eventsMap;

                    }, function () {

                        // handle error

                    });

                $scope.$on(EventNames.EVENT_SELECTED, function (e, event) {

                    ctrl.selectedEvent = event;

                });

            };

        }
    });
