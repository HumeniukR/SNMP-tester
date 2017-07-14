const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const api = require('./server/routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', api);

app.get('/', function (req, res) {
  res.send('it work');
});

app.listen(3000, function () {
  console.log('listening port 3000!');
});


