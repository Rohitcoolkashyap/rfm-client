import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
export default function Header() {
  const [menu, setMenu] = useState(false);
  const show = !menu ? "header__left__nav" : "header__left__nav show";

  return (
    <div className="header">
      {/* header left*/}

      <div className="header__left">
        <Link to="/">
          <div className="header__logo">logo</div>
        </Link>

        <ul className={show}>
          <li className="header__left__nav__list">
            <div className="dropdown">
              <button className="dropbtn">Services</button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li className="header__left__nav__list">
            <div className="dropdown">
              <button className="dropbtn">About</button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>

          <li className="header__left__nav__list">Community</li>

          <li className="header__left__nav__list">
            <div className="dropdown">
              <button className="dropbtn">Docs</button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li className="header__left__nav__list">Contact</li>
        </ul>
      </div>

      {/* header right*/}

      <div className="header__right">
        <ul className="header__right__nav">
          <Link to="/signin" className="header__right__nav__list">
            <li className="header__right__nav__list">Log in or</li>
          </Link>

          <li className="header__right__nav__list">
            <Link to="/signup" className="header__right__nav__list">
              <Button className="signup__but" size="small" variant="contained">
                Sign up
              </Button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="menuBar">
        {!menu ? (
          <MenuIcon onClick={() => setMenu(!menu)} className="menuBar" />
        ) : (
          <CloseIcon onClick={() => setMenu(!menu)} className="menuBar" />
        )}
      </div>
    </div>
  );
}
