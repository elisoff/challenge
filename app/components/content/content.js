'use strict';

angular.module('eventManagerApp.components')
    .component('emContent', {
        templateUrl: '/components/content/content.html',
        controller: function ($rootScope, $state) {

            var ctrl = this;

            ctrl.$onInit = function () {

                ctrl.user = {
                    id: $state.params.userId || 4472
                };

            };

        }
    });
