var gulp = require('gulp');
var webpack = require('webpack');
var runSequence = require('run-sequence');
var gutil = require('gulp-util');

gulp.task('webpack', function(callback) {
    // run webpack
    webpack(require('./webpack.config.js'), function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task('watch', function () {
    gulp.watch('./src/*', ['webpack']);
});

gulp.task('default', function (cb) {
    runSequence('webpack', 'watch', cb);
});
