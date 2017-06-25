'use strict';

angular.module('eventManagerApp.components')
    .component('emTopbar', {
        templateUrl: '/components/topbar/topbar.html',
        controller: function ($rootScope, $window, MDCPersistentDrawer) {

            var ctrl = this;

            ctrl.$onInit = function () {

                $rootScope.$on('navbar loaded', function () {

                    var drawerEl = $window.document.querySelector('.mdc-persistent-drawer');
                    ctrl.drawer = new MDCPersistentDrawer(drawerEl);

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
