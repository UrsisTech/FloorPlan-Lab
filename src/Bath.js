import React from "react";

export default function Bath(props) {
  return (
    <div className="bath-element" id={``}>
      <h5 className="bath-size">{props.size} Bath</h5>
    </div>
  );
}
