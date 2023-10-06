// src/Question.js
import './Question.css';

import React from 'react';

function Question() {
    const data = [
        {title: "Aimez-vous le théâtre ?", options: ["Oui", "Non", "Ne sais pas", "Sans opinion"]},
        {title:"Et si nos coeurs débordent vous intéresse ?", options: ["Oui", "Non", "Ne peut pas le voir", "Oui, mais trop cher"]},
        {title:"Le recommanderiez-vous ?", options: ["Oui, au cercle proche", "Oui, à tous", "Pas encore vu", "Non"]},
        {title:"Où l'avez-vous vu ?", options: ["Réseaux sociaux", "Affiches physiques", "Recommandation", "Par hasard"]}
    ]

    const save=(e) =>{
        e.preventDefault()
        console.log("answer saved")
    }

    return (
        <div className="questions">
            {data.map(question =>
                <div className="question" id={question.title}>
                    {`${question.title}`}
                    <fieldset>
                        {question.options.map((option) =>
                            <div className="option">
                                <input type="radio" id={option} name={question.title} value={option} />
                                <label htmlFor="option">{option}</label>
                            </div>
                        )}
                    </fieldset>
                </div>
            )}
            <div className="button_save" onClick={save.bind(this)}>
                Envoyer réponse
            </div>
        </div>
    );
}

export default Question;
