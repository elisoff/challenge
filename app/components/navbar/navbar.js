'use strict';

angular.module('eventManagerApp.components')
    .component('emNavbar', {
        templateUrl: '/components/navbar/navbar.html',
        controller: function ($window, $rootScope) {

            var ctrl = this;

            ctrl.$onInit = function () {

                var screenWidth = $window.innerWidth;

                ctrl.navbarShown = (screenWidth >= 768);

                $rootScope.$broadcast('navbar loaded');

            };

        }
    });
