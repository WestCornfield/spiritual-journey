const SET_CAROUSEL = "SET_CAROUSEL";
const SET_TEXT = "SET_TEXT";
const SET_SHOW_MODAL = "SET_SHOW_MODAL";

export const initialState = {
  index: 0,
  text: '',
  showModal: false
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
    case SET_SHOW_MODAL:
      return Object.assign({}, state, {
        showModal: action.showModal
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

export function setShowModal(showModal) {
  return {
    type: SET_SHOW_MODAL,
    showModal
  }
}

export default carouselReducer;
