import React from "react";

const EndSection = (props) => {
  var result = "Standing on the Shore";
  var suggestion = "101 Classes";

  if (props.score > 64) {
    result = "Diving In";
    suggestion = "Sunday School and Service Opportunities";
  } else if (props.score > 48) {
    result = "Splashing Around";
    suggestion = "Spiritual Discipline Classes";
  } else if (props.score > 32) {
    result = "Wading In";
    suggestion = "Disciple Classes and Covenant Classes";
  }

  return (<>
            <div className="grid-item">
              <div className="finish-title">{props.type}</div>
              <div className="finish-score">You are {result}.</div>
              <div className="finish-recommendation">Try to move forward with {suggestion}</div>
           </div>
         </>);
}

export default EndSection;
