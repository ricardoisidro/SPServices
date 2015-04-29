/**
 * Created by Marc on 4/26/2015.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                banner: // '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                "/*\n" +
                "* <%= pkg.name %> - <%= pkg.description_short %>\n" +
                "* Version <%= pkg.version %>\n" +
                "* @requires <%= pkg.requires %>\n" +
                "*\n" +
                "* Copyright (c) <%= pkg.copyright %>\n" +
                "* Examples and docs at:\n" +
                "* <%= pkg.homepage %>\n" +
                "* Licensed under the MIT license:\n" +
                "* http://www.opensource.org/licenses/mit-license.php\n" +
                "*/\n" +
                "/*\n" +
                "* @description <%= pkg.description_long %>\n" +
                "* @type jQuery\n" +
                "* @name <%= pkg.name %>\n" +
                "* @category Plugins/<%= pkg.name %>\n" +
                "* @author <%= pkg.authors %>\n" +
                "! @build <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today('yyyy-mm-dd hh:MM:ss') %>\n" +
                "*/\n"
            },
            build: {
                src: "../src/<%= pkg.filename %>.js",
                dest: "../build/<%= pkg.filename %>.min.js"
            }
        },

        zip: {
            package: {
                src: "<%= pkg.package_zipfiles %>",
                dest: '../build/<%= pkg.filename %>.zip'
            }
        }

    });

    // Load the plugin that provides the "uglify" and "zip" tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-zip');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'zip']);

};