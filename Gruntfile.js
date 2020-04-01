module.exports = function (grunt){
    require('load-grunt-tasks')(grunt);

    var config = {};

    grunt.initConfig({
        concat: {
            options: {
                separator: ';',
                sourceMap: true
            },
            js: {
                files: {
                    '_ui/js/main.js': [
                        // JS FILES HERE
                        '_ui-src/js/index.js'
                    ],
                    '_ui/js/vendor.js' : [
                        // JQUERY AND BOOTSTRAP HERE
                        'node_modules/jquery/dist/jquery.min.js',
                        'node_modules/popper.js/dist/umd/popper.min.js',
                        'node_modules/bootstrap/dist/js/bootstrap.min.js'
                        
                    ]
                }
            }
        },

        sass : {
            options : {
                sourceMap: true
            },
            dist : {
                files : {
                    '_ui/css/main.css' : '_ui-src/sass/main.scss',
                    '_ui/css/vendor.css' : '_ui-src/sass/vendor.scss'
                }
            }
        },

        watch : {
            js : {
                files : [
                    '_ui-src/js/*.js',
                    '_ui-src/js/**/*.js'
                ],
                tasks : ['concat'],
                options : {
                    interrupt : true,
                }
            },
            sass : {
                files : [
                    '_ui-src/sass/*.scss',
                    '_ui-src/sass/**/*.scss',
                    '_ui-src/sass/**/**/*.scss'
                ],
                tasks : ['sass'],
                options : {
                    interrupt : true,
                }
            }
        }
    });

    grunt.registerTask('default', ['sass', 'concat']);
    grunt.registerTask('build-dist', ['sass', 'concat']);
}