// src/Question.js
import './Question.css';

import React from 'react';

function Question() {
  const data = [
        {title: "Aimez-vous les pâtes ?", options: ["Oui", "Non", "Ne sais pas", "Sans opinion"]},
        {title:"Par ici", options: []},
        {title:"Mais non", options: []},
        {title:"ouh", options: []}
  ]
  return (
    <div className="questions">
        {data.map(question =>
            <div className="question" id={question.title}>
                {`${question.title}`}
                <fieldset>
                    {question.options.map((option) =>
                        <div className="option">
                            <input type="radio" id={option} name="answer" value={option} />
                            <label htmlFor="option">{option}</label>
                        </div>
                    )}
                </fieldset>
            </div>
        )}
    </div>
  );
}

export default Question;
