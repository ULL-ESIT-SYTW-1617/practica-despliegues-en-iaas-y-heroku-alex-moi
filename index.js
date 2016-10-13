var express = require('express');
var app = express();
var process = require('child_process');



app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/gh-pages/'));

// views is directory for all template files
app.set('views', __dirname + '/gh-pages');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');



app.get('/', function(request, response) {
  response.render('index.html');
});

app.post('/synchronize', (request, response) => {
    process.exec('git pull',function (err,stdout,stderr) {
      if (err) {
          console.log("\n"+stderr);
      } else {
          console.log(stdout);
      }
    });
});


app.listen(app.get('port'), function() {
  console.log('Servidor corriendo... Acceda a 10.6.128.129:', app.get('port'));
});


