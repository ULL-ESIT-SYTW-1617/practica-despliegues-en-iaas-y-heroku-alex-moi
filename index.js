var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/gh-pages/'));

// views is directory for all template files
app.set('views', __dirname + '/gh-pages');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');



app.get('/', function(request, response) {
  response.render('index.html');
});




app.listen(app.get('port'), function() {
  console.log('Node app is running on port:', app.get('port'));
});


