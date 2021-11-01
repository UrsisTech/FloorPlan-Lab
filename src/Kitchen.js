import React from "react";
import Oven from "./Oven";
import Sink from "./Sink";

export default function Kitchen() {
  return (
    <div className="kitchen-div" id="kitchen">
      <Oven />
      <Sink />
      <span className="kitchen-text">Kitchen</span>
    </div>
  );
}
