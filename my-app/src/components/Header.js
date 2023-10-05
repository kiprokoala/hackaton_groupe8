// src/Header.js
import './Header.css';
import profile from '../images/profile.png';

import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="bar">
        <Link to={`/`}><h1>Parici</h1></Link>
        <Link to={`/profile`}><img src={profile} className="profile_picture" /></Link>
    </div>
  );
}

export default Header;
