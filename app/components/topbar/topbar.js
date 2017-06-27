'use strict';

angular.module('eventManagerApp.components')
    .component('emTopbar', {
        bindings: {
            selectedEvent: '<'
        },
        templateUrl: '/components/topbar/topbar.html',
        controller: function ($scope, $window, EventNames, MDCPersistentDrawer) {

            var ctrl = this;

            ctrl.$onInit = function () {

                ctrl.eventName = '';

                $scope.$on(EventNames.NAVBAR_LOADED, function () {

                    var drawerEl = $window.document.querySelector('.mdc-persistent-drawer');
                    ctrl.drawer = new MDCPersistentDrawer(drawerEl);

                });

                $scope.$on(EventNames.EVENT_SELECTED, function (e, event) {

                    ctrl.eventName = event.attributes.summary;

                });

                ctrl.toggleNavbarBtnShown = false;
                var screenWidth = $window.innerWidth;
                ctrl.toggleNavbarBtnShown = (screenWidth < 768);

            };

            ctrl.toggleNavbar = function (drawer) {

                drawer.open = !drawer.open;

            };
        }
    });
