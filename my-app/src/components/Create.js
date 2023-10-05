// src/Create.js
import Header from './Header';

import React from 'react';
import { Link } from 'react-router-dom'

function Create() {

    function SessionDataStorage(){
        sessionStorage.setItem("login", document.getElementById("login").value);
        console.log(sessionStorage.getItem("login"))
    };

    return (
        <div>
            <Header />
            <div className="formulaire">
                <form onSubmit={SessionDataStorage}>
                    <h2>Connexion</h2>
                    <div className="champs">
                        <div className="champ">
                            <label className="label_field">Nom utilisateur</label>
                            <input
                              type="text"
                              id="login"
                            />
                        </div>
                        <div className="champ">
                            <label className="label_field">Mot de passe</label>
                            <input
                              type="password"
                              id="password"
                            />
                        </div>
                        <div className="ligne_champs">
                            <div className="champ champ_left">
                                <label className="label_field">Âge</label>
                                <select>
                                    <option>0</option>
                                    <option>1</option>
                                </select>
                            </div>
                            <div className="champ">
                                <label className="label_field">Genre</label>
                                <select>
                                    <option>Homme</option>
                                    <option>Femme</option>
                                    <option>Non-binaire</option>
                                    <option>Autre</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit">Connexion</button>
                    </div>
                </form>
                <div className="bottom_text">
                    <Link className="other_connect" to={`/login`}>
                        Vous avez déjà un compte ? Connectez-vous
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Create;