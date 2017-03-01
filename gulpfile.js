var gulp = require('gulp'),
	sass = require('gulp-sass'),
	minifycss = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
    handlebars = require('gulp-compile-handlebars'),
    rename = require('gulp-rename');

gulp.task('sass', function () {
    gulp.src('./styles/**/**/*.sass')
        .pipe(sourcemaps.init())
            .pipe(sass({
                indentedSyntax : true,
                indentType: "tab"
            }).on('error', sass.logError))
            .pipe(autoprefixer({
                browsers : ['last 2 versions'],
                cascade : false
            }))
            .pipe(minifycss())
        .pipe(sourcemaps.write('./maps'))    
        .pipe(gulp.dest('./'))
    });

gulp.task('handlebars', fucntion() {
    gulp.src('./templates/*.handlebars')
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./'))
})


gulp.task('watch', function(){
	gulp.watch('./styles/**/**/*.sass', ['sass'])	
    gulp.watch('')
});