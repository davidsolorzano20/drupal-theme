/**
 * Created by dev on 08-17-17.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var concat  = require('gulp-concat');

gulp.task('sass', function () {
	return gulp.src('./assets/sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./css'))
		.pipe(notify("El sass se ha compilado correctamente!"));
});

gulp.task('watch', function () {
	gulp.watch('./assets/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);
