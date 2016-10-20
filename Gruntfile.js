module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          sizes: [
            {
              width: 1600,
              quality: 30
            },
            {
            width: 800,
            quality: 30
          },
          {
            width: 500,
            quality: 30
          },
          {
            width: 1000,
            quality: 30
          }
          ]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'Images/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
