import React from "react";
import Bed1 from "./Bed1";
import Bed2 from "./Bed2";
import Bed3 from "./Bed3";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import FullBath from "./FullBath";
import HalfBath from "./HalfBath";

export default function FloorPlan() {
  return (
    <div className="floor-plan">
      <Bed1 />
      <Kitchen />
      <FullBath />
      <Bed2 />
      <LivingRoom />
      <HalfBath />
      <Bed3 />
    </div>
  );
}
