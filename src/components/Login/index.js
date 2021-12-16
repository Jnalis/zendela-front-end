import { useForm } from "react-hook-form";
import { Button, Form, Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Card className="w-50">
          <Card.Body>
            <Card.Title className="text-center mb-3">Login</Card.Title>
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Container fluid="md">
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
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="password"
                        {...register("password", { required: true })}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Button className="mb-3" variant="primary" type="submit">
                    Login
                  </Button>
                </Row>
                <Row>
                    <p>Create a new account, <Link to="/register">Click here</Link></p>
                </Row>
              </Container>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
