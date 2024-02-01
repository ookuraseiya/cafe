import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <div className="footer__nav">
            <ul className="footer__nav--list">
              <li className="footer__nav--item font__hover">
                <Link to="/">TOP</Link>
              </li>
              <li className="footer__nav--item font__hover">
                <Link to="/concept">CONCEPT</Link>
              </li>
              <li className="footer__nav--item font__hover">
                <Link to="/menu">MENU</Link>
              </li>
              <li className="footer__nav--item font__hover">
                <Link to="/event">EVENT</Link>
              </li>
              <li className="footer__nav--item font__hover">
                <Link to="/newsList/1">NEWS</Link>
              </li>
              <li className="footer__nav--item font__hover">
                <Link to="/access">ACCESE</Link>
              </li>
              <li className="footer__nav--item font__hover">
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
          <p className="footer__info">
            〒000-0000 大阪府〇〇市〇〇町00-00 tel./fax. 000-0000-0000
            JR大阪駅より徒歩0分
          </p>
          <p className="footer__copyright">
            Copyright 2021 Cafe MON. All rights reserved
          </p>
        </div>
        <div className="footer__right">
          <a href="tel:000-0000-0000" className="footer__tell">
            TELL:000-0000-0000
          </a>
        </div>
      </div>
    </footer>
  );
};
