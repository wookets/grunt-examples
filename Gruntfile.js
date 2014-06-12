
module.exports = function(grunt) {

  grunt.registerTask('default', ['coffee', 'less', 'concat']);

  grunt.initConfig({

    coffee: {
      compile: {
        options: {join: true},
        files: {
          'build/dogcat.js': [
            'assets/**/*.coffee'
          ]
        }
      }
    },
    concat: {
      javascript: {
        src: [
          'assets/js/leaf.js',
          'assets/js/bark.js'
        ],
        dest: 'build/dogtree.js'
      }
    },
    less: {
      compile: {
        files: {
          "build/moocow.css": "assets/less/cow.less"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');

};