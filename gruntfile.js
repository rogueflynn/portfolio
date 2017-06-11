module.exports = function(grunt) {

	//Configure tasks
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			build: {
				files: {
					'javascript/build/port.min.js' : ['javascript/imgAnimator.js', 
										      'javascript/screenText.js',
										      'javascript/sidemenu.js']


				}
			},
			dev: {
				options: {
					beautify: true,
					mangle: false
				},	
			}	
		},
		cssmin: {
		  options: {
		    mergeIntoShorthands: false,
		    roundingPrecision: -1
		  },
		  target: {
		    files: {
			'css/build/port.min.css' : ['css/mainstyle.css', 'css/sidemenu.css']

		    }
		  }
		},
		watch: {
			js: {
				files: [''],
				tasks: ['uglify:build']
			}
		}
	});	

	//load plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//register tasks
	grunt.registerTask('dev', ['uglify:dev']);
	grunt.registerTask('build', ['uglify:build']);
	grunt.registerTask('cssBuild', ['cssmin:target']);

};
