
module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'dist/form5-checkbox.css': 'src/form5-checkbox.scss'
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'dist/form5-checkbox.min.css': 'dist/form5-checkbox.css'
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/form5-checkbox.min.js': 'src/form5-checkbox.js'
        }
      }
    },
    jshint: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['*.js'],
            dest: 'dist/'
          }
        ],
        options: {
          jshintrc: '.jshintrc' // Read hinting options from .jshintrc
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  return grunt.registerTask('build', ['sass', 'cssmin', 'jshint', 'uglify']);
};
