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

  const Ending = () => {
    const sum = sumOfAllScores()
    if (sum >= 18) {
      return (<>
               <div className="finish-score">You are Diving In.</div>
               <div className="finish-recommendation">Try to move forward with Disciple Classes and Covenant Classes</div>
             </>);
    } else if (sum >= 12) {
      return (<>
               <div className="finish-score">You are Splashing Around.</div>
               <div className="finish-recommendation">Try to move forward with Spiritual Discipline Classes</div>
             </>);
    } else if (sum >= 6) {
      return (<>
               <div className="finish-score">You are Wading In.</div>
               <div className="finish-recommendation">Try to move forward with Sunday School and Service Opportunities</div>
             </>);
    } else {
      return (<>
               <div className="finish-score">You are Standing on the Shore.</div>
               <div className="finish-recommendation">Try to move forward with 101 Classes</div>
             </>);
    }
  }

  return (
    <Ending />
  );
}

export default FinishPage;
