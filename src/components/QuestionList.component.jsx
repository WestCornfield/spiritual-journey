import React from "react";
import Question from "./Question.component";

const QuestionList = () => {

  return (
  <div className="questions-list">
    <Question index="0" />
    <Question index="1" />
    <Question index="2" />
    <Question index="3" />
    <Question index="4" />
  </div>
);
}

export default QuestionList;
