import React from 'react';
import Modal from 'react-bootstrap/Modal'
import { useDispatch } from "react-redux";
import { updateShowModal } from '../actions/carouselActions';

const TutorialModal = ({show, title}) => {
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(updateShowModal(false));
  }

  return (
    <Modal show={show} onHide={handleClose} title={title}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM" ></iframe>
        </div>
      </Modal.Body>
   </Modal>);
}

export default TutorialModal;
