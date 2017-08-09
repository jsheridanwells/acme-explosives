module.exports = function(grunt) {
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		jshint: {
			files: ['../src/js/**/*.js']
		},
		uglify: {
			build: {
				src: 'src/js/*.js',
				dest: 'js/main.min.js'
			}
		},
		watch: {
			javascripts: {
				files: ['src/js/*.js', 'js/main.min.js'],
				tasks: ['uglify: dev', 'jshint']
			}
		}
	});
	grunt.registerTask('default', ['jshint', 'uglify', 'watch']);
}