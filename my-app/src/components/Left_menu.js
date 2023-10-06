// src/Left_menu.js
import './Left_menu.css';

import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

function LeftMenu() {
    const [post, setPost] = useState([]);
    const location = useLocation();

    async function fetchData() {
        try {
            const response = await fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=100');
            const result = await response.json();

            const temp = [];
            result.results?.forEach(actu => {
                actu.tags?.forEach(mot => {
                    if (!temp.includes(mot)) {
                        temp.push(mot);
                    }
                });
            });

            setPost(temp);
        } catch (error) {
            console.error("Une erreur s'est produite lors de la récupération des données :", error);
        }
    }

    useEffect(() => {
        // Mettre à jour les données lorsque l'URL change
        fetchData();
    }, [location.pathname]);

    return (
        <div className="menu">
            <div>
                {post?.map(actu =>
                    <Link to={`/list/${actu}`} key={actu}><ul id={actu}>{actu}</ul></Link>
                )}
            </div>
        </div>
    );
}

export default LeftMenu;