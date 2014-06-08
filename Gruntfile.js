module.exports = function(grunt) {

    grunt.initConfig({
        inline: {
            dist: {
                options:{
                    cssmin: true,
                    uglify: true,
                },
                src: 'dev.html',
                dest: 'index.html',
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'index.html': 'index.html'
                }
            }
        },
        watch: {
            files: ['dev.html', 'css/*.css', 'js/*.js'],
            tasks: ['inline', 'htmlmin']
        }
    });

    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch', 'inline', 'htmlmin']);

};
