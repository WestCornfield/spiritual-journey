import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCarousel } from "../actions/carouselActions.js";

const ContentCarousel = () => {
  const dispatch = useDispatch();

  const carousel = useSelector((state) => state.carousel.index);

  const incrementIndex = (index) => {
    console.log(carousel);
    dispatch(updateCarousel(index + 1));
  }

  const decrementIndex = (index) => {
    console.log(carousel);
    dispatch(updateCarousel(index - 1));
  }

  const activeContent = ["Test 1", "Test 2", "Test 3"]

  return (
  <div className="Content-Carousel">
    <p>{activeContent[carousel]}</p>
    <button onClick={() => decrementIndex(carousel)}>Previous</button>
    <button onClick={() => incrementIndex(carousel)}>Next</button>
  </div>
);
}

export default ContentCarousel;
