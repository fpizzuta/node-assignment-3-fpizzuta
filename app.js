var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', express.static('./public'));
app.use('/static', express.static('./public'));

app.use((req, res, next)=>{
  res.status(404);
  res.send("Sorry, this file cannot be found");
  // or, res.redirect('/static/friendly404Page.html')
});
module.exports = app;