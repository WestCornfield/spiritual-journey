import React from 'react';
import Modal from 'react-bootstrap/Modal'
import { useDispatch } from "react-redux";
import { updateShowModal } from '../actions/carouselActions';

import tutorialVideo from '../resources/videos/Spiritual_Journey_Tutorial_Video.mp4';


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
        <iframe width="360" height="315" src="https://www.youtube.com/embed/SNzwRndQzjY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Modal.Body>
   </Modal>);
}

export default TutorialModal;
