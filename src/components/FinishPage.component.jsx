import React from "react";
import { useSelector } from "react-redux";

const FinishPage = () => {
  const questionOne = useSelector((state) => state.quiz.questionOne);
  const questionTwo = useSelector((state) => state.quiz.questionTwo);
  const questionThree = useSelector((state) => state.quiz.questionThree);
  const questionFour = useSelector((state) => state.quiz.questionFour);
  const questionFive = useSelector((state) => state.quiz.questionFive);

  const sumOfAllScores = () => {
    return questionOne + questionTwo + questionThree + questionFour + questionFive
  }

  return (
  <div className="finish-page">
    You Finished with a score of {sumOfAllScores()}
  </div>
);
}

export default FinishPage;
