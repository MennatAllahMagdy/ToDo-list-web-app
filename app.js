var express = require('express');

var mycontrollers= require('./controllers/todocontroller');
var app= express();
//css template
app.set('view engine','ejs');
//static files
app.use(express.static('./public'));
mycontrollers(app);
app.listen(3000);
console.log('listen to 3000');