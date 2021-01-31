import React from "react";
import { useSelector } from "react-redux";

const FinishPage = () => {
  const questions = useSelector((state) => state.quiz.question);

  const sumOfAllScores = () => {
    var sum = 0;
    for (var i = 0; i < questions.length; i++) {
      sum += questions[i];
    }
    return sum;
  }

  const Ending = () => {
    const sum = sumOfAllScores()
    if (sum >= 192) {
      return (<>
               <div className="finish-score">You are Diving In.</div>
               <div className="finish-recommendation">Try to move forward with Disciple Classes and Covenant Classes</div>
             </>);
    } else if (sum >= 144) {
      return (<>
               <div className="finish-score">You are Splashing Around.</div>
               <div className="finish-recommendation">Try to move forward with Spiritual Discipline Classes</div>
             </>);
    } else if (sum >= 96) {
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
