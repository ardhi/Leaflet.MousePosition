module.exports = function(grunt) {
    var banner = '/*! Version: <%= pkg.version %>\nDate: <%= grunt.template.today("yyyy-mm-dd") %> */\n';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: banner,
                preserveComments: 'some',
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/L.Control.MousePosition.min.js': 'src/L.Control.MousePosition.js'
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'dist/L.Control.MousePosition.min.css': 'src/L.Control.MousePosition.css'
                }
            }
        },
        bump: {
            options: {
                files: ['bower.json', 'package.json'],
                commitFiles: ['bower.json', 'commit.json'],
                push: false
            }
        }
    });

    grunt.registerTask('default', ['uglify', 'cssmin']);
};
