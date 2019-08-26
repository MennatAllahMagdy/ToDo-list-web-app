var express = require('express');
var PORT= process.env.PORT||3000;
var mycontrollers= require('./controllers/todocontroller');
var app= express();
//css template
app.set('view engine','ejs');
//static files
app.use(express.static('./public'));
mycontrollers(app);
app.listen(PORT);
console.log('listen to 3000');