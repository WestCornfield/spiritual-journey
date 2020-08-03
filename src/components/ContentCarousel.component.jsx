import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCarousel } from "../actions/carouselActions";
import { pageProperties } from "../properties/pageProperties";

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

  const activeContent = [<p>{pageProperties.pageOne}</p>, <p>{pageProperties.pageTwo}</p>, <p>{pageProperties.pageThree}</p>, <p>{pageProperties.pageFour}</p>]

  return (
  <div className="Content-Carousel">
    {activeContent[carousel]}
    <button onClick={() => decrementIndex(carousel)}>Previous</button>
    <button onClick={() => incrementIndex(carousel)}>Next</button>
  </div>
);
}

export default ContentCarousel;
