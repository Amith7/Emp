import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Badge from "react-bootstrap/Badge";
import uuid from "react-uuid";
import axios from "axios";
function Add() {
  const [id, SetId] = useState("");
  const [empName, SetEmpName] = useState("");
  const [empAge, SetEmpAge] = useState("");
  const [empDesg, SetEmpDesg] = useState("");
  const [empSalary, SetEmpSalary] = useState("");
  let location = useNavigate();
  useEffect(() => {
    //Generating Unique Numbers
    SetId(uuid().slice(0, 3));
  }, []);

  const handleAddEmployee = async (e) => {
    console.log(empName);
      //Prevent from Refresh
      e.preventDefault();
      SetId(uuid().slice(0, 3));
      //Creating body
      const body = {
        id,
        empName,
        empAge,
        empDesg,
        empSalary,
      };
      console.log(body);
      //Api Calling
      const result = await axios.post(
        "http://localhost:8000/add-employee",
        body
      );
      console.log(result);
      alert(result.data.message);
      //redirect to Admin
      location("/");
    }
  ;
  return (
    <>
      <Container>
        <Row>
          <Col>
            <img src="https://i.pinimg.com/originals/44/91/1d/44911d955df77a82e556b723de24d690.png"></img>
          </Col>
          <Col>
            <h3 className="text-center m-5">
              Add New <Badge bg="secondary">Employee</Badge>
            </h3>
            <Form>
              <Form.Group className="mb-3" controlId="EmpName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Employee Name"
                  onChange={(e) => SetEmpName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="EmpAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Employee Age"
                  onChange={(e) => SetEmpAge(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="EmpDesc">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Employee Designation"
                  onChange={(e) => SetEmpDesg(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="EmpSalary">
                <Form.Label>Salary</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Employee Salary"
                  onChange={(e) => SetEmpSalary(e.target.value)}
                />
              </Form.Group>

              <Button
                variant="success"
                type="submit"
                onClick={(e) => handleAddEmployee(e)}
              >
                Submit
              </Button>

              <Link to={"/"}>
                <Button variant="danger m-5" type="submit">
                  Close
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Add;
