// src/Poll.js
import './Poll.css';

import React from 'react';
import Question from './Question';

function Poll() {
  return (
    <div className="bloc">
        <h2>Répondre au sondage</h2>
        <Question />
    </div>
  );
}

export default Poll;
