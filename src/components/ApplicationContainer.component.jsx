import React from 'react';
import { useSelector } from "react-redux";
import ContentCarousel from "./ContentCarousel.component";
import TutorialModal from "./TutorialModal.component";

const ApplicationContainer = () => {
  const showModal = useSelector((state) => state.carousel.showModal);

  return (<>
            <h1>Mapping Your Spiritual Journey</h1>
            <TutorialModal fade={false} show={showModal} title={"Tutorial"} />
            <ContentCarousel />
          </>);
}

export default ApplicationContainer;
