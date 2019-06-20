var gulp = require('gulp'),
    plugin = require('gulp-load-plugins')();

gulp.task('style', function (cb) {
    gulp.src('./gulp/sass/system.scss')
        .pipe(plugin.plumber())
        //.pipe(plugin.sourcemaps.init({largeFile: true}))
        .pipe(plugin.sass().on('error', plugin.sass.logError))
        .pipe(plugin.sassUnicode())
        .pipe(plugin.autoprefixer({
            cascade: false
        }))
        .pipe(plugin.pxtorem())
        //.pipe(plugin.sourcemaps.write(''))
        .pipe(gulp.dest('public/'));
    cb();
});