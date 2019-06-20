var gulp = require('gulp');

gulp.task('watch', function () {
    gulp.watch('gulp/sass/**/*.*', {usePolling: true}, gulp.series('style'));
});