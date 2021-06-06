import React from "react";
import { useSelector } from "react-redux";
import EndSection from "./EndSection.component";
import "./finish-page.styles.css"
import { calculateAllScores } from "../actions/scoreActions.js";

const FinishPage = () => {
  const questions = useSelector((state) => state.quiz.question);

  const allScores = () => {
    return calculateAllScores(questions);
  }

  const Ending = () => {
    const sum = allScores()
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
