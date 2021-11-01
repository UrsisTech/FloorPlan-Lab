import React from "react";

export default function Bedroom(props) {
  return (
    <div className="bedroom" id={`bed-{props.bedNum}`}>
      <h5 className="bedroom-num">Bedroom {props.bedNum}</h5>
    </div>
  );
}
