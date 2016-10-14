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


gulp.task('wikibuild', function() {
   return gulp.src('').pipe(shell(['./scripts/generate-wiki'])); 
});

gulp.task('wikideploy', function() {
   return gulp.src('').pipe(shell(['./scripts/deploy-wiki'])); 
});




//deploy de iaas


var fs = require('fs');
var gulp = require('gulp')
var GulpSSH = require('gulp-ssh')
 
var config = {
  host: '10.6.128.129',
  port: 22,
  username: 'usuario',
  privateKey: fs.readFileSync(`${process.env.HOME}/.ssh/id_rsa`)
}
 
var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: config
})


gulp.task('deploy-iaas', function () {
  return gulpSSH
    .shell(['cd /home/usuario/src/sytw/iaas', 'git pull']);
})
