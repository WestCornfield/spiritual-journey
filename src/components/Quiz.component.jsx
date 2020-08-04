import React from "react";
import { quizProperties } from "../properties/quizProperties";

const Quiz = () => {

  const questions = quizProperties.questions;

  const questionsList = questions.map((question, index) =>
    <p key={index}>{index}. {question}</p>
  );

  return (
  <div className="quiz-questions">
    {questionsList}
  </div>
);
}

export default Quiz;
