const SET_SCORE = "SET_SCORE";

export const initialState = {
  question: [1, 1, 1, 1, 1, 1, 1, 1,
     1, 1, 1, 1, 1, 1, 1, 1,
     1, 1, 1, 1, 1, 1, 1, 1,
     1, 1, 1, 1, 1, 1, 1, 1,
     1, 1, 1, 1, 1, 1, 1, 1,
     1, 1, 1, 1, 1, 1, 1, 1],
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCORE:
      var scoreArray = state.question;
      scoreArray[action.index] = action.score;
      return Object.assign({}, state, {
        question: scoreArray
      });
    default:
      return state
  }
};

export function setScore(score, index) {
  return {
    type: SET_SCORE,
    index: index,
    score: score,
  };
}

export default quizReducer;
