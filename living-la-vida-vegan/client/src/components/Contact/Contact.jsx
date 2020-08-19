import React from 'react';
import { Modal, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import './Contact.css';

export default function Contact(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="popup-body">
          <h4> Are you sure you want to delete this recipe?</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
