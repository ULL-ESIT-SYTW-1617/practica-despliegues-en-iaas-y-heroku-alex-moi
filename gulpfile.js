var gulp  = require('gulp');
var shell = require('gulp-shell');
var git = require('gulp-git');


gulp.task('buildeploy', ['build', 'deploy']);

gulp.task('build', function() {
  return gulp.src('').pipe(shell(['./scripts/generate-gitbook']));
});

gulp.task('deploy', function () {
  return gulp.src('').pipe(shell(["./scripts/deploy-gitbook"]));
});


gulp.task('deploy-heroku', function () {
  git.push('heroku', 'master', function (err) {
    if (err) throw err;
  });
});


gulp.task('deploy-iaas', function () {
  return gulp.src('').pipe(shell([""]));
});



gulp.task('wikibuild', function() {
   return gulp.src('').pipe(shell(['./scripts/generate-wiki'])); 
});

gulp.task('wikideploy', function() {
   return gulp.src('').pipe(shell(['./scripts/deploy-wiki'])); 
});