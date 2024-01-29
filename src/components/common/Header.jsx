import React from 'react';
import { Link } from 'react-router-dom';
import { HamburgerMenu } from '../utility/navigation/HamburgerMenu';
import { ScrollToTop } from '../utility/navigation/ScrollToTop';

export const Header = () => {
  return (
    <>
      <ScrollToTop />
      <div className="container">
        <div className="header__nav">
          <img
            className="header__nav--logo"
            src="/images/icon/cafe_logo.webp"
            alt=""
            height=""
            width=""
          />
          <ul className="header__nav--list">
            <li>
              <Link to="/" className="header__nav--item font__hover">
                TOP
              </Link>
            </li>
            <li>
              <Link to="/concept" className="header__nav--item font__hover">
                CONCEPT
              </Link>
            </li>
            <li>
              <Link to="/menu" className="header__nav--item font__hover">
                MENU
              </Link>
            </li>
            <li>
              <Link to="/event" className="header__nav--item font__hover">
                EVENT
              </Link>
            </li>
            <li>
              <Link to="/access" className="header__nav--item font__hover">
                ACCESE
              </Link>
            </li>
            <li>
              <Link to="/contact" className="header__nav--item font__hover">
                CONTACT
              </Link>
            </li>
          </ul>
          <HamburgerMenu />
        </div>
      </div>
    </>
  );
};
