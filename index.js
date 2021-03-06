var express = require('express');
var app = express();
var fs = require('fs');
var proces = require('child_process');
var path = require('path');
var directorio = path.resolve(__dirname, 'gitbook-alex-moi-nitesh');


app.set('port', (process.env.PORT || 8080));
app.use(express.static(path.join(__dirname,'gh-pages')));


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
    
  fs.existsSync(path.resolve(__dirname, 'practica-despliegues-en-iaas-y-heroku-alex-moi')) ? pull(): clone();

  function clone(){
    proces.exec('git clone https://github.com/ULL-ESIT-SYTW-1617/practica-despliegues-en-iaas-y-heroku-alex-moi.git', 
      function(err,stdout,stderr){
        if (err) {
            console.log("error"+ err);
            console.log("\n"+stderr);
        } else {
            console.log("Git Clone: " + stdout);
        }
    });
  }
  
  function pull(){
    proces.exec("git pull https://github.com/ULL-ESIT-SYTW-1617/practica-despliegues-en-iaas-y-heroku-alex-moi.git master",{cwd:'/app/practica-despliegues-en-iaas-y-heroku-alex-moi'},
      function(err,stdout,stderr){
        if (err) {
          console.log("error"+ err);
            console.log("\n"+stderr);
        } else {
            console.log("Git Pull: " + stdout);
        }
    });
    response.send("Sincronizando");
  }
});


app.listen(app.get('port'), function() {
  console.log('Servidor corriendo... Acceda a 10.6.128.129:', app.get('port'));
});

