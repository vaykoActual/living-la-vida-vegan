import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { destroyRecipe } from '../../../services/recipes';

export default function DeleteRecipes(props) {
  const handleClick = async (id) => {
    await destroyRecipe(id);
    props.setRecipes(
      props.recipeDelete.filter((recipe) => {
        return recipe.id !== id;
      })
    );
  };

  return (
    <>
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h4> Are you sure you want to delete this recipe?</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant='danger' onClick={props.onHide}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
