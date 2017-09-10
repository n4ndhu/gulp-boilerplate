module.exports = {
    dist: function(gulp, $, paths) {
        return function() {
            var fonts = gulp.src(paths.copy.font.app)
                .pipe(gulp.dest(paths.copy.font.dist));
            var js = gulp.src(paths.copy.js.app)
                .pipe(gulp.dest(paths.copy.js.dist));
            $.merge(fonts, js);
        }
    },
    build: function(gulp, $, paths) {
        return function() {
            var fonts = gulp.src(paths.copy.font.app)
                .pipe(gulp.dest(paths.copy.font.build));
            var js = gulp.src(paths.copy.js.app)
                .pipe(gulp.dest(paths.copy.js.build));
            $.merge(fonts, js);
        }
    }
};