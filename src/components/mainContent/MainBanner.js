import React from "react";
import { Link } from "react-router-dom";

export default function MainBanner() {
  return (
    <div className="mainBanner__content">
      <div className="mainBanner__img">
        <img src="head.png" alt="" />
      </div>
      <div className="mainBanner__title">
        <h2>Welcome Back</h2>
        <p>this is a platform which helps you to grow you business</p>
        <Link className="header__right__nav__list" to="/signup">
          <button className="mainBanner__button">SIGNUP FOR FREE</button>
        </Link>
      </div>
    </div>
  );
}
