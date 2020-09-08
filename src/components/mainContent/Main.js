import React from "react";
import MainBanner from "./MainBanner";
import MainServices from "./MainServices";

export default function Main() {
  return (
    <div className="main">
      <div className="mainBanner">
        <MainBanner />
      </div>
      <MainServices />
    </div>
  );
}
