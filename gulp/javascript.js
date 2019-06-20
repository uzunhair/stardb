var gulp = require('gulp'),
	plugin = require('gulp-load-plugins')();

gulp.task('javascript', function (cb) {
	gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
		.pipe(plugin.plumber())
		.pipe(gulp.dest('public/'));
	cb();
});