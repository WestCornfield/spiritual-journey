import React from "react";
import { walkProperties } from "../properties/walkProperties"
import { workProperties } from "../properties/workProperties"
import { worshipProperties } from "../properties/worshipProperties"

const EndSection = (props) => {
  var properties = (props.type == "Worship") ? worshipProperties : (props.type == "Walk") ? walkProperties : workProperties;
  var ending = "";
  var suggestion = "";

  if (props.score > 64) {
    ending = properties.endings[3];
    suggestion = properties.suggestions[3];
  } else if (props.score > 48) {
    ending = properties.endings[2];
    suggestion = properties.suggestions[2];
  } else if (props.score > 32) {
    ending = properties.endings[1];
    suggestion = properties.suggestions[1];
  } else {
    ending = properties.endings[0];
    suggestion = properties.suggestions[0];
  }

  return (<>
            <div className="grid-item">
              <div className="finish-title">{props.type}</div>
              <div className="finish-score">You are {ending}.</div>
              <div className="finish-recommendation">Try to move forward with {suggestion}</div>
           </div>
         </>);
}

export default EndSection;
