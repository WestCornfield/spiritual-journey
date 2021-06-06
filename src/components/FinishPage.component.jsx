import React from "react";
import { useSelector } from "react-redux";
import EndSection from "./EndSection.component";
import "./finish-page.styles.css"

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
      <div className="grid-container">
        <EndSection type="Worship" score={sum[1]} />
        <EndSection type="Walk" score={sum[2]} />
        <EndSection type="Work" score={sum[0]} />
      </div>
    </>);
  }

  return (
    <Ending />
  );
}

export default FinishPage;
