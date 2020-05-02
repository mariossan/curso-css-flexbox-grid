const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')


function css(){
    return gulp
        .src('scss/app.scss')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cacade: false
        }))
        .pipe(sass({
            ouputStyle: 'expanded', //nested, compact, compressed
        }))
        .pipe(gulp.dest('css'));
}

function watchFiles() {
    gulp.watch('scss/*.scss', css)
    gulp.watch('index.html')
}

// registrar funciones como tarea
gulp.task( 'css', css )
gulp.task( 'watch', gulp.parallel(watchFiles) )
