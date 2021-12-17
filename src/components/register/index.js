import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Button, Form, Container, Card, Row, Col, ToastContainer, Toast } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [hasResponse, setHasResponse] = useState(false);
  const [apiMsg, setApiMsg] =useState();
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://simple-form-4887.herokuapp.com/auth/register", data)
      .then((res) => {
          setHasResponse(true);
          setApiMsg(res.data.msg);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const toast = () => {
      return (
        <ToastContainer
          className="p-3"
          position="top-end"
          delay={3000}
          bg="Success"
        >
          <Toast>
            <Toast.Header closeButton={false}>
              <strong className="mr-auto">API Response</strong>
            </Toast.Header>
            <Toast.Body>{apiMsg}</Toast.Body>
          </Toast>
        </ToastContainer>
      );
  }

  return (
    <div>
        {hasResponse && toast()}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Card>
          <Card.Body>
            <Card.Title className="text-center mb-3">Register</Card.Title>
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Container fluid="md">
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="First name"
                        {...register("fname", { required: true })}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Middle Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="middle name"
                        {...register("mname", { required: true })}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="last name"
                        {...register("lname", { required: true })}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="mobile number"
                        {...register("number", { required: true })}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="address"
                        {...register("address", { required: true })}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="email"
                        {...register("email", { required: true })}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Button className="mb-3" variant="primary" type="submit">
                    Signup
                  </Button>
                </Row>
                <Row>
                  <p>
                    Already have an account, <Link to="/">Click here</Link>
                  </p>
                </Row>
              </Container>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
