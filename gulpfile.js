var gulp = require('gulp');
var plumber = require('gulp-plumber');
var typescript = require('gulp-tsc');

gulp.task('typescript', function(){
  gulp.src(['app/assets/typescripts/*.ts'])
    .pipe(plumber())
    .pipe(typescript())
    .pipe(gulp.dest('public/assets/'))
});

gulp.task('watch', ['typescript'], function() {
  gulp.watch('app/assets/typescripts/*.ts', ['typescript'])
});
