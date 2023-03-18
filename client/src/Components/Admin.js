import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaEdit, FaRegTrashAlt, FaUserPlus } from "react-icons/fa";

function Admin() {
  const [allemployees, setAllEmployees] = useState([""]);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:8000/get-all-employees");
    console.log(result.data.employees);
    //Assign the values to setUseState
    setAllEmployees(result.data.employees);
  };
  console.log(allemployees);

  useEffect(() => {
    fetchData();
  }, []);
  //handle Delete
  const handleDelete = async (id) => {
    const result = axios.delete("http://localhost:8000/delete-employee/" + id);
    alert((await result).data.message);
    fetchData();
  };
  return (
    <div>
      <div className="conatiner-fluid mt-2">
        <h3 className="text-center  mb-5">Employee Managment System</h3>
        <p className="mb-2">
          An employee management system is technology designed to streamline
          core HR services and improve workforce productivity. It accomplishes
          these goals largely by automating labor-intensive, administrative
          tasks and using analytics to drive business decisions.An effective
          employee management system should include key features, such as time
          and attendance management (e.g., time tracking by way of employee
          timesheets), absence and leave management (e.g., time-off requests),
          an employee database, and an employee self-service portal.Employee
          management is a practice that helps a manager improve employee
          productivity and satisfaction to help an organisation reach its goals.
          Human resources (HR) professionals often use an employee management
          system (EMS), including recruitment, offboarding and performance
          management.At the most fundamental level, management is a discipline
          that consists of a set of five general functions: planning,
          organizing, staffing, leading and controlling. These five functions
          are part of a body of practices and theories on how to be a successful
          manager.
        </p>
        <Link to={"/add"}>
          <Button variant="success mb-3 mt-3" size="lg">
            Add <FaUserPlus />
          </Button>
        </Link>

        <h3 className="mb-4">Employee Details</h3>
        <Table className="mt-2">
          <thead>
            <tr>
              <th>Sl_No</th>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allemployees?.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.uname}</td>
                <td>{item.age}</td>
                <td>{item.deseg}</td>
                <td>{item.salary}</td>
                <td>
                  <Link to={"edit/"+item.id}>
                    <Button variant="primary m-2">
                      <FaEdit />
                    </Button>
                  </Link>
                  <Button
                    onClick={() => handleDelete(item.id)}
                    variant="danger"
                  >
                    <FaRegTrashAlt />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Admin;
