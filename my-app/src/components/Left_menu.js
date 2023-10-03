// src/Header.js
import './Left_menu.css';
import magnifier from '../images/magnifier.png';

import React from 'react';

function Header() {
  return (
    <div className="menu">
        <div className="search_box">
            <input type="text" className="search_input" />
            <img src={magnifier} className="magnifier" />
        </div>
    </div>
  );
}

export default Header;
