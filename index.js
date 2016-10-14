var express = require('express');
var app = express();
var proces = require('child_process');


app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/gh-pages/'));

/*// views is directory for all template files
app.set('views', __dirname + '/gh-pages');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');*/



app.get('/', (request, response) => {
  response.send('index.html');
});

app.get('/synchronize', (request, response) => {
    proces.exec('git pull git@github.com:ULL-ESIT-SYTW-1617/practica-despliegues-en-iaas-y-heroku-alex-moi.git',
    function (err,stdout,stderr) {
      if (err) {
          console.log("\n"+stderr);
      } else {
          console.log("Git Pull: " + stdout);
      }
    });
    console.log("probando");
    response.redirect('/');
});

app.post('/synchronize', (request, response) => {
   proces.exec('cd ~/practica-despliegues-en-iaas-y-heroku-alex-moi',
    function (err,stdout,stderr) {
      if (err) {
          console.log("\n"+stderr);
      } else {
          console.log("cd: " + stdout);
      }
    });
  proces.exec('git pull git@github.com:ULL-ESIT-SYTW-1617/practica-despliegues-en-iaas-y-heroku-alex-moi.git',
    function (err,stdout,stderr) {
      if (err) {
          console.log("\n"+stderr);
      } else {
          console.log("Git Pull: " + stdout);
      }
    });
    response.send("Sincronizando");
});


app.listen(app.get('port'), function() {
  console.log('Servidor corriendo... Acceda a 10.6.128.129:', app.get('port'));
});

