import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quizProperties } from "../properties/quizProperties";
import { updateScore } from "../actions/quizActions";

const Question = (props) => {
  const dispatch = useDispatch();
  const questions = quizProperties.questions;

  const questionScores = useSelector((state) => state.quiz.question);

  const [questionScore, setQuestionScore] = useState(questionScores[props.index])

  const valueChanged = (valueString) => {
    var value = parseInt(valueString);
    dispatch(updateScore(value, props.index));
    setQuestionScore(value);
  }

  return (
  <div className="quiz-question">
    <label htmlFor={`question${props.index}`}>{questions[props.index]}</label>
    <input type="range" min="1" max="5" defaultValue={`${questionScores[props.index]}`}
      id={`question${props.index}`}
      onChange={(event) => valueChanged(event.target.value)} />
    <span>{questionScore}</span>
  </div>
);
}

export default Question;
