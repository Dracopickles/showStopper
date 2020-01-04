import React from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { withFirebase } from '../Firebase';
const SignOutButton = ({ firebase }) => (
  <Button variant="dark" onClick={firebase.doSignOut}>
    Sign Out
  </Button>
);
export default withFirebase(SignOutButton);