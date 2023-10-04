// src/Left_menu.js
import './Left_menu.css';
import magnifier from '../images/magnifier.png';

import React from 'react';

function Left_menu() {
  return (
    <div className="menu">
        <div className="search_box">
            <input type="text" className="search_input" />
            <img src={magnifier} className="magnifier" />
        </div>
        <div>
            <ul><a href="https://google.com">Catégorie 1</a>
            <a href="https://wikipedia.fr"><li>sous catégorie 1</li></a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><li>sous catégorie 2</li></a>
            </ul>
        </div>
    </div>
  );
}

export default Left_menu;
