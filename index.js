var express = require('express'),
app = express();

var messages = [];

app.set('port', (process.env.PORT || 1616));

app.use(express.static(__dirname + '/dist/'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/dist/index.html');
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});