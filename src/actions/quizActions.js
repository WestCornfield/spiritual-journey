import {
setScoreOne,
setScoreTwo,
setScoreThree,
setScoreFour,
setScoreFive
} from "../reducers/quizReducer";

export function updateScoreOne(value) {
  return (dispatch) => {
      return dispatch(setScoreOne(value));
  }
}

export function updateScoreTwo(value) {
  return (dispatch) => {
      return dispatch(setScoreTwo(value));
  }
}

export function updateScoreThree(value) {
  return (dispatch) => {
      return dispatch(setScoreThree(value));
 }
}

export function updateScoreFour(value) {
  return (dispatch) => {
      return dispatch(setScoreFour(value));
  }
}

export function updateScoreFive(value) {
  return (dispatch) => {
      return dispatch(setScoreFive(value));
  }
}
