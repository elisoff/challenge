'use strict';

angular.module('eventManagerApp.components')
    .component('emMainContent', {
        bindings: {
            user: '<',
            selectedEvent: '<'
        },
        templateUrl: '/components/main-content/main-content.html',
        controller: function ($scope, $state) {

            $scope.$on('$destroy', function () {

                if (!$state.params.eventId) {
                    $state.reload();
                }

            });

        }
    });
