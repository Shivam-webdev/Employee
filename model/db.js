//to connect the mongodb
const mongoose = require('mongoose');
//
mongoose.connect('mongodb://localhost:27017/EmployeeDB', { useNewUrlParser: true}, (err) =>{
   if(!err)
     console.log('Mongodb connection seuccessful');
else{
    console.log('ther is error in connecting');
}
});

//calling the employee schema from the employee.model.js
require('./employee.model');