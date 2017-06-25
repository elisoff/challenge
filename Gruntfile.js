module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'app/styles/main.css': 'app/styles/main.scss'
                }
            }
        },
        watch: {
            sass: {
                files: [
                    'app/**/*.scss'
                ],
                tasks: ['sass:dist']
            }
        },
        jshint: {
            files: ['*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        karma: {
            unit: {
                options: {
                    frameworks: ['jasmine'],
                    singleRun: true,
                    browsers: ['PhantomJS'],
                    files: [
                        'app/*.js',
                        'test/**/*.js'
                    ]
                }
            }
        }
    });

    grunt.registerTask('test', [
        'jshint',
        'karma'
    ]);
};
