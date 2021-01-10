import React from "react";
import Question from "./Question.component";

const QuestionList = ({startIndex, endIndex}) => {

  var questions = [];

  for (var i = startIndex; i <= endIndex; i++) {
    questions.push(<Question key={i} index={i} />);
  }

  return (
  <div className="questions-list">
    {questions}
  </div>
);
}

export default QuestionList;
