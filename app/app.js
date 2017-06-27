'use strict';

angular.module('eventManagerApp.services', ['ngResource']);

angular.module('eventManagerApp.components', ['ui.router']);

angular.module('eventManagerApp', ['eventManagerApp.services', 'eventManagerApp.components', 'ui.router'])
    .constant('AppSettings', {
        apiUrl: 'https://api.picatic.com/v2/',
        header: 'Bearer sk_live_f1090aeab90d8ed651128084abf4684f'
    })
    .config(function ($locationProvider, $stateProvider, $urlRouterProvider) {

        $stateProvider
            .state({
                name: 'eventManager',
                url: '/events',
                component: 'eventManager'
            })
            .state({
                name: 'eventManager.events',
                url: '/{eventId}',
                component: 'emMainContent',
                resolve: {
                    selectedEvent: function($rootScope, $state, $stateParams, EventNames, PicaticApiService) {
                        return $stateParams.eventId && PicaticApiService.getEventById($stateParams.eventId)
                            .then(function (response) {

                                $rootScope.$emit(EventNames.EVENT_SELECTED, response.data);

                                return response.data;
                            }, function () {

                                $state.go('eventManager', {}, { reload: true });

                            });
                    }
                }
            });

        $urlRouterProvider.otherwise('/events');

    })
    .run(function ($http, AppSettings) {

        $http.defaults.headers.common['Authorization'] = AppSettings.header;

    });
