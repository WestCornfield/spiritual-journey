import React from "react";
import { useDispatch } from "react-redux";
import { quizProperties } from "../properties/quizProperties";
import { updateScoreOne, updateScoreTwo, updateScoreThree, updateScoreFour, updateScoreFive } from "../actions/quizActions";

const Question = (props) => {
  const dispatch = useDispatch();

  const questions = quizProperties.questions;

  const valueChanged = (valueString) => {
    console.log("inside valueChanged");
    var value = parseInt(valueString);
    if (props.index == 0) {
      dispatch(updateScoreOne(value));
    } else if (props.index == 1) {
      dispatch(updateScoreTwo(value));
    } else if (props.index == 2) {
      dispatch(updateScoreThree(value));
    } else if (props.index == 3) {
      dispatch(updateScoreFour(value));
    } else if (props.index == 4) {
      dispatch(updateScoreFive(value));
    }
  }

  return (
  <div className="quiz-question">
    <label htmlFor={`question${props.index}`}>{questions[props.index]}</label>
    <input type="range" min="1" max="5" defaultValue="1"
      id={`question${props.index}`}
      onChange={(event) => valueChanged(event.target.value)} />
  </div>
);
}

export default Question;
