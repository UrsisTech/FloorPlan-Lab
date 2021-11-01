import React from "react";

export default function Bath(props) {
  return (
    <div className="bath-element" id={`${props.size}-bath`}>
      <h5 className="bath-size">{props.size} Bath</h5>
    </div>
  );
}
