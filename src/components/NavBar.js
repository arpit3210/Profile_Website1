import React from 'react';
import './NavBar.css'; // Import the CSS file for the component
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/resorts">Resorts</a>
        </li>
        <li>
          <a href="/bookings">Bookings</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
