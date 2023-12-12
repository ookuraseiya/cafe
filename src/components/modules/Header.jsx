import React from 'react';
import { Link } from 'react-router-dom';
import { HamburgerMenu } from '../items/HamburgerMenu';

export const Header = () => {
  return (
    <div className="container">
      <div className="header__nav">
        <img
          className="header__nav--logo"
          src="/images/icon/cafe_logo.webp"
          alt=""
        />
        <ul className="header__nav--list">
          <li>
            <Link to="/" className="header__nav--item font__hover">
              TOP
            </Link>
          </li>
          <li>
            <Link to="/items/concept" className="header__nav--item font__hover">
              CONCEPT
            </Link>
          </li>
          <li>
            <Link to="/items/menu" className="header__nav--item font__hover">
              MENU
            </Link>
          </li>
          <li>
            <Link to="/items/event" className="header__nav--item font__hover">
              EVENT
            </Link>
          </li>
          <li>
            <Link to="/items/access" className="header__nav--item font__hover">
              ACCESE
            </Link>
          </li>
          <li>
            <Link to="/items/contact" className="header__nav--item font__hover">
              CONTACT
            </Link>
          </li>
        </ul>
        <HamburgerMenu />
      </div>
    </div>
  );
};
