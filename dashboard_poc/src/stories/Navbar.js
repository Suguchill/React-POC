import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import './Navbar.css';

export const Navbar = ({value1, value2, value3, value4, color}) => (
  <nav className="navbar">
    <ul className="navbar-nav">
        <li className="nav-item">
            <Button className="nav-link active" aria-current="page" color={color} href="#" value={value1}></Button>
        </li>
        <li className="nav-item">
            <Button className="nav-link" color={color} value={value2} href="#"></Button>
        </li>
        <li className="nav-item">
            <Button className="nav-link" color={color} href="#" value={value3}></Button>
        </li>
        <li className="nav-item">
            <Button className="nav-link" href="#" color={color} value={value4} ></Button>
        </li>
    </ul>
  </nav>
);

Navbar.propTypes = {
  value1:PropTypes.string,
  value2:PropTypes.string,
  value3:PropTypes.string,
  value4:PropTypes.string,
  color: PropTypes.string
};

Navbar.defaultProps = {
  value1:"All",
  value2:"article",
  value3:"video",
  value4:"podcast",
  color: "white"
};
