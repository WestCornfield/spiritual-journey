const SET_SCORE_ONE = "SET_SCORE_ONE";
const SET_SCORE_TWO = "SET_SCORE_TWO";
const SET_SCORE_THREE = "SET_SCORE_THREE";
const SET_SCORE_FOUR = "SET_SCORE_FOUR";
const SET_SCORE_FIVE = "SET_SCORE_FIVE";

export const initialState = {
  questionOne: 1,
  questionTwo: 1,
  questionThree: 1,
  questionFour: 1,
  questionFive: 1
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCORE_ONE:
      return Object.assign({}, state, {
        questionOne: action.questionOne
      });
    case SET_SCORE_TWO:
      return Object.assign({}, state, {
        questionTwo: action.questionTwo
      });
    case SET_SCORE_THREE:
      return Object.assign({}, state, {
        questionThree: action.questionThree
      });
    case SET_SCORE_FOUR:
      return Object.assign({}, state, {
        questionFour: action.questionFour
      });
    case SET_SCORE_FIVE:
      return Object.assign({}, state, {
        questionFive: action.questionFive
      });
    default:
      return state
  }
};

export function setScoreOne(questionOne) {
  return {
    type: SET_SCORE_ONE,
    questionOne
  };
}

export function setScoreTwo(questionTwo) {
  return {
    type: SET_SCORE_TWO,
    questionTwo
  };
}

export function setScoreThree(questionThree) {
  return {
    type: SET_SCORE_THREE,
    questionThree
  };
}

export function setScoreFour(questionFour) {
  return {
    type: SET_SCORE_FOUR,
    questionFour
  };
}

export function setScoreFive(questionFive) {
  return {
    type: SET_SCORE_FIVE,
    questionFive
  };
}

export default quizReducer;
