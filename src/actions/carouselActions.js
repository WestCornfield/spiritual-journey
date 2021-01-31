import { setCarousel, setText, setShowModal } from "../reducers/carouselReducer";

export function updateShowModal(showTutorial) {
  return (dispatch) => {
    return dispatch(setShowModal(showTutorial));
  }
}

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
