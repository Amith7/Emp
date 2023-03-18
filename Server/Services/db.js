// conecting with Data base using library called mongoose
// import mongoose
const mongoose = require('mongoose')
//connecting with database called ems

mongoose.connect('mongodb://localhost:27017/ems')
  .then(() => {
    console.log('mongoBb connected Successfully');
  })
  .catch((err) => {
    console.error('Error connecting to database:', err);
  });

// model creations
// collection name first lettter should be capital and plural
const Employee = mongoose.model('Employee',{
    //schema creation and object type
    id:String,
    uname:String,
    age:String,
    deseg:String,
    salary:String
})
//exports

module.exports={
    Employee
}