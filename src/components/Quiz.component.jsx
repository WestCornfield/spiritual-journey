import React from "react";
import QuestionList from "./QuestionList.component";

const Quiz = () => {
  return (
  <div className="quiz-questions">
    <QuestionList startIndex={0} endIndex={4} />
  </div>
);
}

export default Quiz;
