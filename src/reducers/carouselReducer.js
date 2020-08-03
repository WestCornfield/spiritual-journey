const SET_CAROUSEL = "SET_CAROUSEL";
const SET_TEXT = "SET_TEXT";

export const initialState = {
  index: 0,
  text: ''
};

const carouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAROUSEL:
      return Object.assign({}, state, {
        index: action.carouselValue
      });
    case SET_TEXT:
      return Object.assign({}, state, {
        text: action.text
      });
    default:
      return state
  }
};

export function setCarousel(carouselValue) {
  return {
    type: SET_CAROUSEL,
    carouselValue
  };
}

export function setText(text) {
  return {
    type: SET_TEXT,
    text
  }
}

export default carouselReducer;
