// database import
const db = require("./db");

// get data all emp
const allEmployees = () => {
  return db.Employee.find().then((result) => {
    if (result) {
      return {
        statusCode: 200,
        //details are stored on employees
        employees: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "No Data is Awailable",
      };
    }
  });
};

//Add Employee
const addEmployee = (id, uname, age, deseg, salary) => {
  return db.Employee.findOne({ uname, age, deseg, salary }).then((result) => {
    if (result) {
      return {
        statusCode: 401,
        message: "Employee Id Already Exits",
      };
    } else {
      const newEmp = new db.Employee({
        id,
        uname,
        age,
        deseg,
        salary,
      });
      newEmp.save();
      return {
        statusCode: 200,
        message: "New Data is added successfully",
      };
    }
  });
};

//Delete employee
const removeEmp = (id) => {
  return db.Employee.deleteOne({
    id,
  }).then((result) => {
    if (result) {
      return {
        statusCode: 200,
        message: "Data removed successfully",
      };
    } else {
      return {
        statusCode: 404,
        message: "Not Data  Exits",
      };
    }
  });
};
// get a particular employee details

const getAnEmp = (id) => {
  return db.Employee.findOne({
    id,
  }).then((result) => {
    if (result) {
      return {
        statusCode: 200,
        employee: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "No Data  Available",
      };
    }
  });
};
//update Emp
const editEmp =(id, uname, age, deseg, salary)=>{
  return db.Employee.findOne({
    id
  }).then((result)=>{
    if(result){
      result.id= id
      result.uname= uname
      result.age= age
      result.deseg= deseg
      result.salary = salary
      result.save()
      return {
        statusCode: 200,
        message: " Data Updated Successfully ",

      }
    }else{
      return{
        statusCode: 404,
        message: " No Data is Available ",

      }
    }
  })
}
module.exports = {
  allEmployees,
  addEmployee,
  removeEmp,
  getAnEmp,
  editEmp
};
