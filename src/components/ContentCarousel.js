import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { updateCarousel } from '../actions/carouselActions'

const ContentCarousel = () => {
  const dispatch = useDispatch();

  var carousel = useSelector((state) => state.carousel)

  const incrementIndex = () => {
    dispatch(updateCarousel(carousel + 1));
  }

  const decrementIndex = () => {
    dispatch(updateCarousel(carousel - 1));
  }

  const activeContent = ["Test 1", "Test 2", "Test 3"]

  return (
  <div className="Content-Carousel">
    <p>{activeContent[carousel]}</p>
    <button onClick={() => decrementIndex()}>Previous</button>
    <button onClick={() => incrementIndex()}>Next</button>
  </div>
);
}

export default ContentCarousel;
