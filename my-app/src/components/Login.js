// src/Login.js
import React from 'react';
import { Link } from 'react-router-dom'

function Login() {

    function SessionDataStorage(){
        sessionStorage.setItem("login", document.getElementById("login").value);
        console.log(sessionStorage.getItem("login"))
    };

    return (
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
                    <button type="submit">Connexion</button>
                </div>
            </form>
            <div className="bottom_text">
                <Link className="other_connect" to={`/create`}>
                    Vous n'avez pas encore de compte ? Créer votre compte
                </Link>
            </div>
        </div>
    );
}
export default Login;