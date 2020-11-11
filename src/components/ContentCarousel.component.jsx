import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCarousel } from "../actions/carouselActions";
import { pageProperties } from "../properties/pageProperties";
import Quiz from "./Quiz.component";
import FinishPage from "./FinishPage.component";
import styles from "./content-carousel-styles.css";

const ContentCarousel = () => {
  const dispatch = useDispatch();

  const carousel = useSelector((state) => state.carousel.index);

  const incrementIndex = (index) => {
    if (carousel == activeContent.length - 1) {
      dispatch(updateCarousel(0));
    } else {
      dispatch(updateCarousel(index + 1));
    }
  }

  const decrementIndex = (index) => {
    dispatch(updateCarousel(index - 1));
  }

  const activeContent = [<h2 className="slow-fade-in">Press Any Button To Begin...</h2>,<div>{pageProperties.pageOne}</div>, <div>{pageProperties.pageTwo}</div>, <div>{pageProperties.pageThree}</div>, <div>{pageProperties.pageFour}</div>,<div>{pageProperties.pageFive}</div>,<div>{pageProperties.pageSix}</div>, <Quiz />, <FinishPage />]

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
