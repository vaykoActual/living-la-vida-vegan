import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { destroyRecipe } from '../../../services/recipes';
import { Link } from 'react-router-dom';

export default function DeleteRecipes(props) {
  // const handleClick = async (id) => {
  //   if (props.currentUser.id) {
  //     await destroyRecipe(id);
  //     props.setRecipes(
  //       props.recipeDelete.filter((recipe) => {
  //         return recipe.id !== props.match.params.id;
  //       })
  //     );
  //   }
  // };

  return (
    <>
      {props.currentUser && (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <h4> Are you sure you want to delete this recipe?</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
              Cancel
            </Button>
            <Link to="/">
              <Button variant="danger" onClick={props.handleClick}>
                Delete
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
