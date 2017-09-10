module.exports = {
    dist: function(gulp, $, paths) {
        return function() {
            gulp.src(paths.html.app)
                .pipe($.pug({
                    pretty: '\t'
                })).on('error', $.errorlog)
                .pipe($.htmlbeautify({
                    indentSize: 4
                }))
                .pipe(gulp.dest(paths.html.dist))
                .pipe($.browserSync.reload({ stream: true }));
        }
    },
    build: function(gulp, $, paths) {
        return function() {
            gulp.src(paths.html.app)
                .pipe($.pug({
                    pretty: '\t'
                })).on('error', $.errorlog)
                .pipe($.htmlbeautify({
                    indentSize: 4
                }))
                .pipe(gulp.dest(paths.html.build));
        }
    }
};