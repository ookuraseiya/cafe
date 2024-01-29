import React from 'react';
import { Link } from 'react-router-dom';

export const SideBar = () => {
  return (
    <section className="sideBar">
      <h1 className="sideBar__header">CATEGORY</h1>
      <div className="sideBar__nav">
        <ul className="sideBar__nav--list">
          <Link to="/">
            <span className="sideBar__nav--item font__hover">TOP</span>
          </Link>
          <Link to="/concept">
            <span className="sideBar__nav--item font__hover">CONCEPT</span>
          </Link>
          <Link to="/menu">
            <span className="sideBar__nav--item font__hover">MENU</span>
          </Link>
          <Link to="/event">
            <span className="sideBar__nav--item font__hover">EVENT</span>
          </Link>
          <Link to="/access">
            <span className="sideBar__nav--item font__hover">ACCESE</span>
          </Link>
          <Link to="/contact">
            <span className="sideBar__nav--item font__hover">CONTACT</span>
          </Link>
        </ul>
      </div>
    </section>
  );
};
