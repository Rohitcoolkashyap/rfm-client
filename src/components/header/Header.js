import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      {/* header left*/}

      <div className="header__left">
        <Link to="/">
          <div className="header__logo">logo</div>
        </Link>

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
          <li className="header__right__nav__list">
            <Link to="/signup">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
