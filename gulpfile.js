const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

gulp.task('html', () => gulp.src('src/*.html').pipe(htmlmin({ collapseWhitespace: true })).pipe(gulp.dest('dist')));

gulp.task('css', () => gulp.src('src/*.css').pipe(cleanCSS()).pipe(gulp.dest('dist')));

gulp.task('js', () => gulp.src('src/*.js').pipe(uglify()).pipe(gulp.dest('dist')));

gulp.task('build', gulp.series('html', 'css', 'js'));
