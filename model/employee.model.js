//first it will connect to databse
const mongoose = require('mongoose');
//then in this file we will decribe the schema of the databse.


var employeeSchema = new mongoose.Schema({
  fullName: {
      type: String,
      required: 'This field is required.'
  },
  email: {
      type: String 
  },
  Mobile: {
      type: String
  },
  city: {
   type: String
  }
});

//now we have to register this employeeSchema inside mongoose
//So fo that , we will use model in which first parameter is name of schema and second is schema object

employeeSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');
mongoose.model('Employee',employeeSchema);