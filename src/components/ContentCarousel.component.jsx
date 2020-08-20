import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCarousel } from "../actions/carouselActions";
import { pageProperties } from "../properties/pageProperties";
import Quiz from "./Quiz.component";
import FinishPage from "./FinishPage.component";

const ContentCarousel = () => {
  const dispatch = useDispatch();

  const carousel = useSelector((state) => state.carousel.index);

  const incrementIndex = (index) => {
    console.log(carousel);

    if (carousel == activeContent.length - 1) {
      dispatch(updateCarousel(0));
    } else {
      dispatch(updateCarousel(index + 1));
    }
  }

  const decrementIndex = (index) => {
    console.log(carousel);

    dispatch(updateCarousel(index - 1));
  }

  const activeContent = [<p>{pageProperties.pageOne}</p>, <p>{pageProperties.pageTwo}</p>, <p>{pageProperties.pageThree}</p>, <p>{pageProperties.pageFour}</p>, <Quiz />, <FinishPage />]

  const rightButtonText = () => {
    if (carousel == activeContent.length - 1) {
      return "Home";
    }
    return "Next";
  }

  return (
  <div className="content-carousel">
    {activeContent[carousel]}
    <button disabled={carousel == 0} onClick={() => decrementIndex(carousel)}>Previous</button>
    <button onClick={() => incrementIndex(carousel)}>{rightButtonText()}</button>
  </div>
);
}

export default ContentCarousel;
