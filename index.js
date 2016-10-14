var express = require('express');
var app = express();
var proces = require('child_process');
var fs = require('fs');
var path = require('path');


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


app.post('/synchronize', (request, response) => {
    fs.existsSync(path.resolve(__dirname, 'gitbook-alex-moi-nitesh')) ? pull() : clone();
    
    function pull() { 
       response.send("Sincronizando 1");
      proces.exec('cd app/gitbook-alex-moi-nitesh');
      proces.exec('git pull git@github.com:ULL-ESIT-SYTW-1617/practica-despliegues-en-iaas-y-heroku-alex-moi.git',
      function (err,stdout,stderr) {
        if (err) {
            console.log("\n"+stderr);
        } else {
            console.log("Git Pull: " + stdout);
            response.send("Salida: " + stdout);
        }
      });
    }
    
    function clone() { 
      response.send("Sincronizando 2");
      proces.exec('cd app/gitbook-alex-moi-nitesh');
      proces.exec('git clone git@github.com:ULL-ESIT-SYTW-1617/practica-despliegues-en-iaas-y-heroku-alex-moi.git',
      function (err,stdout,stderr) {
        if (err) {
            console.log("\n"+stderr);
        } else {
            console.log("Git Pull: " + stdout);
            response.send("Salida: " + stdout);
        }
      });
    }

   
});


app.listen(app.get('port'), function() {
  console.log('Servidor corriendo... Acceda a 10.6.128.129:', app.get('port'));
});

