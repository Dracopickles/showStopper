import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';


// export class LoginModal extends Component {
//   constructor(props) {
//     super(props);
//   }

//   //we want the modal to render on the login click
//   render() {
//     return (
//       <Modal show={show} onHide={handleClose} animation={false}>
//         <Modal.Header closeButton>
//           <Modal.Title>
//             Add Login Form
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="container">

//           </div>
//           </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   }
// }
class LoginModal extends Component {


  render() {

    return (
      <div>

        <Modal show={this.props.show}>
          <Modal.Header >
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
  </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
        </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
