import React, { useState } from "react";
import { useSelector } from "react-redux";
import { walkProperties } from "../properties/walkProperties";
import { workProperties } from "../properties/workProperties";
import { worshipProperties } from "../properties/worshipProperties";
import { calculateAllScores } from "../actions/scoreActions.js";

const EmailResults = () => {
  const [email, setEmail] = useState("")

  const questions = useSelector((state) => state.quiz.question);

  const allScores = () => {
    return calculateAllScores(questions);
  }

  function generateResult(properties, score) {
    var ending = "";
    var suggestion = "";

    if (score > 64) {
      ending = properties.endings[3];
      suggestion = properties.suggestions[3];
    } else if (score > 48) {
      ending = properties.endings[2];
      suggestion = properties.suggestions[2];
    } else if (score > 32) {
      ending = properties.endings[1];
      suggestion = properties.suggestions[1];
    } else {
      ending = properties.endings[0];
      suggestion = properties.suggestions[0];
    }

    var result = {
      ending: ending,
      suggestion: suggestion
    };

    return result;
  }

  function createHtmlBody() {
    var scores = allScores();
    var worshipScore = scores[1];
    var walkScore = scores[2];
    var workScore = scores[0];

    var worshipResult = generateResult(worshipProperties, worshipScore);
    var walkResult = generateResult(walkProperties, walkScore);
    var workResult = generateResult(workProperties, workScore);

    var worship = "Your Worship Result is " + worshipResult.ending + ". Move Forward with " + worshipResult.suggestion;
    var walk = "Your Walk Result is " + walkResult.ending + ". Move Forward with " + walkResult.suggestion;
    var work = "Your Work Result is " + workResult.ending + ". Move Forward with " + workResult.suggestion;

    return encodeURIComponent(worship + "\n " + walk + "\n" + work)
  }

  function mailTo() {
    var body = createHtmlBody();
    var mailTo = "mailto:"+email+"?subject=Spiritual%20Journey%20Results&body="+body
    window.location.href = mailTo;
  }

  return (
    <form onSubmit={mailTo}>
      <label>Email: <input type="text" onChange={e => setEmail(e.target.value)}></input></label>
      <input type="submit" value="Email My Results"></input>
    </form>
  );
}

export default EmailResults;
