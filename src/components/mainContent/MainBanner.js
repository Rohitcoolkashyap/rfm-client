import React from "react";

export default function MainBanner() {
  return (
    <div className="mainBanner__content">
      <div className="mainBanner__img">
        <img src="head.png" alt="" />
      </div>
      <div className="mainBanner__title">
        <h2>Welcome Back</h2>
        <p>this is a platform which helps you to grow you business</p>
        <button>SIGNUP FOR FREE</button>
      </div>
    </div>
  );
}
