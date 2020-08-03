import { setCarousel, setText } from "../reducers/carouselReducer";

export function updateCarousel(carouselValue) {
  return (dispatch) => {
    return dispatch(setCarousel(carouselValue));
  }
}

export function updateText(text) {
  return (dispatch) => {
    return dispatch(setText(text));
  }
}
