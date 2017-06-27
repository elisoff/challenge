module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-sass');

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
        karma: {
            unit: {
                options: {
                    configFile: 'karma.conf.js',
                    singleRun: true
                }
            }
        }
    });

    grunt.registerTask('test', [
        'karma:unit'
    ]);
};
