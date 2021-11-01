import React from "react";
import Oven from "./Oven";
import Sink from "./Sink";

export default function Kitchen() {
  return (
    <div className="kitchen-div" id="kitchen">
      <h4 className="kitchen-text">Kitchen</h4>
      <Oven />
      <Sink />
    </div>
  );
}
