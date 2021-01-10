import {
  setScore,
} from "../reducers/quizReducer";

export function updateScore(value, index) {
  return (dispatch) => {
      return dispatch(setScore(value, index));
  }
}
