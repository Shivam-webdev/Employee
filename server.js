require('./model/db');

//now calling the express server
const express = require('express');
//to call the routing from employeeController file
const path = require('path');
const exphbs = require('express-handlebars');
//now lets configure express middlebar for the viws

//add body-parser for getting data 
const bodyparser = require('body-parser');  //now use body parser

const employeeController = require('./controllers/employeeController');
var app = express();

app.use(bodyparser.urlencoded({
    extended: true
})); //now convert the received data into json file

app.use(bodyparser.json());

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');




app.listen(3000, () => {
    console.log('express server started at port: 3000');
});
//now use the employeeController
app.use('/employee', employeeController);

