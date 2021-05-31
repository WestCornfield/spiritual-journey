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
        <iframe title="tutorial video" width="100%" height="315" src="https://www.youtube.com/embed/SNzwRndQzjY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Modal.Body>
   </Modal>);
}

export default TutorialModal;
