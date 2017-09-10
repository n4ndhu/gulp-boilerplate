module.exports = {
    dist: function(gulp, $, paths) {
        return function() {
            gulp.src(paths.css.app)
                .pipe(gulp.dest(paths.scss.dist))
                .pipe($.browserSync.stream());
        }
    },
    build: function(gulp, $, paths) {
        return function() {
            gulp.src(paths.css.app)
                .pipe(gulp.dest(paths.scss.build))
        }
    }
};