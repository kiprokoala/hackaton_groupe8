// src/Header.js
import './Header.css';
import profile from '../images/profile.png';

import React from 'react';

function Header() {
  return (
    <div className="bar">
        <h1>Parici</h1>
        <img src={profile} className="profile_picture" />
    </div>
  );
}

export default Header;
