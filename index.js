var express = require('express');
var app = express();
var proces = require('child_process');
var fs = require('fs');
var path = require('path');
var directorio = path.resolve(__dirname, 'gitbook-alex-moi-nitesh');


app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/gh-pages/'));


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


app.post('/sync', (request, response) => {
    

  /*fs.mkdir(directorio);*/


  console.log(`Directorio actual: ${process.cwd()}`);
  console.log(`Directorio ruta: ` + directorio);
  proces.exec('git clone https://github.com/ULL-ESIT-SYTW-1617/practica-despliegues-en-iaas-y-heroku-alex-moi.git', {cwd: '/app'}, 
    function(err,stdout,stderr){
      if (err) {
          console.log("\n"+stderr);
      } else {
          console.log("Git Clone: " + stdout);
          response.send("Salida: " + stdout);
      }
  });
  proces.exec("git pull git@github.com:ULL-ESIT-SYTW-1617/practica-despliegues-en-iaas-y-heroku-alex-moi.git", {cwd: '/app/practica-despliegues-en-iaas-y-heroku-alex-moi'}, 
    function(err,stdout,stderr){
      if (err) {
          console.log("\n"+stderr);
      } else {
          console.log("Git Pull: " + stdout);
          response.send("Salida: " + stdout);
      }
  });
    
   
});


app.listen(app.get('port'), function() {
  console.log('Servidor corriendo... Acceda a 10.6.128.129:', app.get('port'));
});

