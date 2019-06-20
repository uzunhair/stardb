var gulp = require('gulp');

gulp.task('build', function(cb) {
    gulp.series(
      'style',
      'javascript',
    )(cb)
});