import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


// import "./App.css";

// By extending the React.Component class, Counter inherits functionality from it
class Login extends React.Component {
  // Setting the initial state of the Counter component
  // The render method returns the JSX that should be rendered
  render() {
    return (
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    );
  }
}

export default Login;
