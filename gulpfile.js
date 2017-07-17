'use strict';

var gulp = require( 'gulp' );
var autoprefixer = require( 'gulp-autoprefixer' );
var sass = require( 'gulp-sass' );
var sourcemaps = require( 'gulp-sourcemaps' );

gulp.task('sass', function () {
  gulp.src('./src/scss/**/*.scss' )
	.pipe( autoprefixer({
	  browsers: ['> 5%'],
	}) )
	.pipe( sass().on( 'error', sass.logError ) )
	.pipe( gulp.dest( './src/css' ) );
});

gulp.task( 'default', ['sass'] );

gulp.task( 'watch', ['default'], function() {
  gulp.watch( './src/scss/**/*.scss', ['sass'] );
});
