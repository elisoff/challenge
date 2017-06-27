// Karma configuration

module.exports = function (config) {
    'use strict';

    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '',

        // list of files / patterns to load in the browser
        files: [
            'node_modules/angular/angular.min.js',
            'node_modules/angular-resource/angular-resource.js',
            'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/angular-scenario/angular-scenario.js',
            'app/app.js',
            'app/components/**/*.js',
            'app/services/*.js'
        ],

        frameworks: ['jasmine'],

        // web server port
        port: 8080,

        // cli runner port
        runnerPort: 9100,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 5000

    });
};
