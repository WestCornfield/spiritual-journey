import React from "react";
import { useSelector } from "react-redux";
import EndSection from "./EndSection.component";

const FinishPage = () => {
  const questions = useSelector((state) => state.quiz.question);

  const sumOfAllScores = () => {
    var sum = [0, 0, 0];
    for (var i = 0; i < questions.length; i++) {
      if (i % 3 == 0) {
        sum[0] += questions[i];
      } else if (i % 3 == 1) {
        sum[1] += questions[i];
      } else if (i % 3 == 2) {
        sum[2] += questions[i];
      }
      //sum += questions[i];
    }
    return sum;
  }

  const Ending = () => {
    const sum = sumOfAllScores()
    return (<>
      <EndSection type="Walk" score={sum[0]} />
      <EndSection type="Whistle" score={sum[1]} />
      <EndSection type="Win" score={sum[2]} />
    </>);

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
