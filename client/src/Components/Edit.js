import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useParams,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Badge from "react-bootstrap/Badge";
import axios from "axios";

function Edit() {
  const [id, SetId] = useState("");
  const [empName, SetEmpName] = useState("");
  const [empAge, SetEmpAge] = useState("");
  const [empDesg, SetEmpDesg] = useState("");
  const [empSalary, SetEmpSalary] = useState("");
  let location = useNavigate();

  //get path parameters from url
  const params = useParams();
  // console.log(params.id);

  //api call to get details of a particular employee from server
  const fetchEmployee = async () => {
    const result = await axios.get(
      "http://localhost:8000/get-an-employee/" + params.id
    );
    SetId(result.data.employee.id);
    // console.log(result.data.employee);
    SetEmpName(result.data.employee.uname);
    SetEmpAge(result.data.employee.age);
    SetEmpDesg(result.data.employee.deseg);
    SetEmpSalary(result.data.employee.salary);
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const body = {
      id,
      empName,
      empAge,
      empDesg,
      empSalary,
    };
    // api call -post
          //Api Calling
          const result = await axios.post(
            "http://localhost:8000/update-employee", body
          );
          console.log(result);
          alert(result.data.message);
          //redirect to Admin
          location("/");
    
  };
  useEffect(() => {
    fetchEmployee();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h3 className="text-center m-5">
              Update the <Badge bg="secondary">Employee</Badge>
            </h3>
            <Form>
              <Form.Group className="mb-3" controlId="EmpName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Employee Name"
                  value={empName}
                  onChange={(e) => SetEmpName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="EmpAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Employee Age"
                  value={empAge}
                  onChange={(e) => SetEmpAge(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="EmpDesc">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Employee Designation"
                  value={empDesg}
                  onChange={(e) => SetEmpDesg(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="EmpSalary">
                <Form.Label>Salary</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Employee Salary"
                  value={empSalary}
                  onChange={(e) => SetEmpSalary(e.target.value)}
                />
              </Form.Group>

              <Button
                onClick={(e) => handleUpdate(e)}
                variant="success"
                type="submit"
              >
                Update
              </Button>

              <Link to={"/"}>
                <Button variant="danger m-5" type="submit">
                  Close
                </Button>
              </Link>
            </Form>
          </Col>
          <Col>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/User-edit.svg" className="imageEdit"></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Edit;
