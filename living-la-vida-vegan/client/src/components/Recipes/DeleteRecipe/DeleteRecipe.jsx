import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DeleteRecipe.css';

export default function DeleteRecipes(props) {
  return (
    <>
      {props.currentUser && (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="popup"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="popup-body">
            <h4 className="delete-text">
              {' '}
              Are you sure you want to delete this recipe?
            </h4>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
              Cancel
            </Button>
            <Link to="/">
              <Button
                variant="danger"
                onClick={() => {
                  props.handleClick(props.recipeId);
                }}
              >
                Delete
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
