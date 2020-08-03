import setCarousel from '../reducers/carouselReducer';

export function updateCarousel(carouselValue) {
  return (dispatch) => {
    return dispatch(setCarousel(carouselValue));
  }
}
