var gulp = require('gulp'),
		sass = require('gulp-sass'),
		concat = require('gulp-concat'),
		jshint = require('gulp-jshint');

gulp.task('styles', function() {
	return gulp.src('sass/*.scss')
		.pipe(sass({
			'sourcemap=none': true,
			errLogToConsole: true
		}))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('jshint', function() {
	return gulp.src('js/*.js')
		.pipe(jshint())
});

gulp.task('watch', function() {
	gulp.watch('sass/*.scss', ['styles']);
	gulp.watch('js/*.js', ['jshint']);
});