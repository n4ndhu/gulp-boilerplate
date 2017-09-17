module.exports = {
    dist: function(gulp, $, paths, imgMin) {
        return function() {
            gulp.src(paths.img.app)
                .pipe($.wait(2000))
                .pipe($.plumber())
                .pipe($.changed(paths.img.dist))
                .pipe($.imagemin(imgMin))
                .pipe(gulp.dest(paths.img.dist))
                .pipe($.browserSync.reload({ stream: true }));
        }
    },
    build: function(gulp, $, paths, imgMin) {
        return function() {
            gulp.src(paths.img.app)
                .pipe($.wait(2000))
                .pipe($.plumber())
                .pipe($.imagemin(imgMin))
                .pipe(gulp.dest(paths.img.build))
        }
    }
};