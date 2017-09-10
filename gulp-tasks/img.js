module.exports = {
    dist: function(gulp, $, paths, imgMin) {
        return function() {
            gulp.src(paths.img.app)
                .pipe($.plumber())
                .pipe($.imagemin(imgMin))
                .pipe(gulp.dest(paths.img.dist))
        }
    },
    build: function(gulp, $, paths, imgMin) {
        return function() {
            gulp.src(paths.img.app)
                .pipe($.plumber())
                .pipe($.imagemin(imgMin))
                .pipe(gulp.dest(paths.img.build))
        }
    }
};