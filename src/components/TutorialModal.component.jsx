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
        <video width="320" height="240" controls>
          <source src={tutorialVideo} type="video/mp4"></source>
        </video>
      </Modal.Body>
   </Modal>);
}

export default TutorialModal;
