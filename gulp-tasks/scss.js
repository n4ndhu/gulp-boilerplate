module.exports = {
    dist: function(gulp, $, paths, prefixer) {
        return function() {
            gulp.src(paths.scss.app)
                .pipe($.wait(500))
                .pipe($.plumber())
                .pipe($.sourcemaps.init())
                .pipe($.sass({ outputStyle: 'expanded' }))
                .on('error', $.errorlog)
                .pipe($.autoprefixer(prefixer))
                .pipe($.sourcemaps.write(paths.scss.map))
                .pipe(gulp.dest(paths.scss.dist))
                .pipe($.browserSync.stream());
        }
    },
    build: function(gulp, $, paths, prefixer) {
        return function() {
            gulp.src(paths.scss.app)
                .pipe($.wait(500))
                .pipe($.plumber())
                .pipe($.sass({ outputStyle: 'compressed' }))
                .on('error', $.errorlog)
                .pipe($.autoprefixer(prefixer))
                .pipe(gulp.dest(paths.scss.build))
        }
    }
};