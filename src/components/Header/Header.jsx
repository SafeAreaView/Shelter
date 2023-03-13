import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      {
        <div className="header">
          <div className="header__logo">
            <h1 className="logo__title">Cozy House</h1>
            <p className="logo__subtitle">Shelter for pets in Boston</p>
          </div>
          <nav className="header__navigation">
            <ul className="navigation__list">
              <li>
                <a className="list__item list__item--active" href="">
                  About the shelter
                </a>
              </li>
              <li>
                <a className="list__item" href="">
                  Our pets
                </a>
              </li>
              <li>
                <a className="list__item" href="">
                  Help the shelter
                </a>
              </li>
              <li>
                <a className="list__item" href="">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        </div>
      }
    </header>
  );
}

export default Header;
