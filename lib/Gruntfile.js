module.exports = function (grunt) {
	grunt.initConfig({
		browserify: {
			'../dist/app.js' : ['../src/js/main.js']
		},
		jshint: {
			options: {
				predef: ['document', 'console'],
				esnext: true,
				strict: 'global',
				globals: {'Acme': true},
				browserify: true,
				reporter: require('jshint-stylish')
			},
			files: ['../src/js/*.js']
		},
		watch: {
			javascripts: {
				files: ['../src/js/*.js'],
				tasks: ['jshint']
			},
			browserify: {
				files: ['../src/js/*.js'],
				tasks: ['browserify']
			}
		}
	});
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.registerTask('default', ['jshint', 'browserify', 'watch']);
};