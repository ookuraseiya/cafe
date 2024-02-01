import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburgerMenu">
      <button
        className={isOpen ? 'hamburgerMenu__close' : 'hamburgerMenu__open'}
        onClick={toggleMenu}
        aria-label="メニューを開く"
      >
        <GiHamburgerMenu size={43} />
      </button>
      <ul
        className={
          isOpen
            ? 'hamburgerMenu__content--open'
            : 'hamburgerMenu__content--close'
        }
      >
        <li className="hamburgerMenu__content--link--close">
          <MdClose onClick={toggleMenu} size={43} />
        </li>
        <li className="hamburgerMenu__content--link">
          <Link onClick={toggleMenu} to="/">
            TOP
          </Link>
        </li>
        <li className="hamburgerMenu__content--link">
          <Link onClick={toggleMenu} to="/concept">
            CONCEPT
          </Link>
        </li>
        <li className="hamburgerMenu__content--link">
          <Link onClick={toggleMenu} to="/menu">
            MENU
          </Link>
        </li>
        <li className="hamburgerMenu__content--link">
          <Link onClick={toggleMenu} to="/event">
            EVENT
          </Link>
        </li>
        <li className="hamburgerMenu__content--link">
          <Link onClick={toggleMenu} to="/newsList/1">
            NEWS
          </Link>
        </li>
        <li className="hamburgerMenu__content--link">
          <Link onClick={toggleMenu} to="/access">
            ACCESE
          </Link>
        </li>
        <li className="hamburgerMenu__content--link">
          <Link onClick={toggleMenu} to="/contact">
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
};
