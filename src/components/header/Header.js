import React from "react";

export default function Header() {
  return (
    <div className="header">
      {/* header left*/}

      <div className="header__left">
        <div className="header__logo">logo</div>

        <ul className="header__left__nav">
          <li className="header__left__nav__list">Services</li>
          <li className="header__left__nav__list">About</li>

          <li className="header__left__nav__list">Community</li>

          <li className="header__left__nav__list">Docs</li>
        </ul>
      </div>

      {/* header right*/}

      <div className="header__right">
        <ul className="header__right__nav">
          <li className="header__right__nav__list">Contact</li>
          <li className="header__right__nav__list">Sign In</li>
          <li className="header__right__nav__list">Register</li>
        </ul>
      </div>
    </div>
  );
}
