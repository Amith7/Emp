//1 server creation

//  import express
const express = require("express");
const cors = require("cors");
const logic = require("./Services/Logic");

// express method calling or invoking server application
const server = express();

// front end resolve
server.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//data type finding  and converting js in to object
server.use(express.json());

//hosting
server.listen(8000, () => {
  console.log("Ems server started at port number 8000");
});

//request resolving get a contact api
server.get("/get-all-employees", (req, res) => {
  logic.allEmployees().then((result) => {
    res.status(result.statusCode).json(result);
  });
});

//add new employee
server.post("/add-employee", (req, res) => {
  logic
    .addEmployee(
      req.body.id,
      req.body.empName,
      req.body.empAge,
      req.body.empDesg,
      req.body.empSalary
    )
    .then((result) => {
      res.status(result.statusCode).json(result);
    });
});

//Delete employee
server.delete("/delete-employee/:id", (req, res) => {
  logic.removeEmp(req.params.id).then((result) => {
    res.status(result.statusCode).json(result);
  });
});

//get Employee details
server.get("/get-an-employee/:id", (req, res) => {
  logic.getAnEmp(req.params.id)
  .then((result) => {
    res.status(result.statusCode).json(result);
  });
});
// updated data
server.post("/update-employee", (req, res) => {
  logic
    .editEmp(
      req.body.id,
      req.body.empName,
      req.body.empAge,
      req.body.empDesg,
      req.body.empSalary
    )
    .then((result) => {
      res.status(result.statusCode).json(result);
    });
});
