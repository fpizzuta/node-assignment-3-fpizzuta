var express = require('express');

var app = express();
var users = require('./routes/users');

app.set('views', './views');    // tells express where to find the views
app.set('view engine', 'pug');  // tells express to use pug as the template engine

app.use('/users', users);
app.use('/login', users);

// app.use(express.static(path.join(__dirname, 'public')));
app.use('/', express.static('./public'));
app.use('/static', express.static('./public'));

app.use((req, res, next)=>{
  res.status(404);
  res.send("Sorry, this file cannot be found");
  // or, res.redirect('/static/friendly404Page.html')
});
module.exports = app;