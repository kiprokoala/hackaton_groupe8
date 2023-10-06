import React, { useState, useEffect } from "react";
import './List.css';
import './App.css';
import { useLocation } from 'react-router-dom';

function List() {
const [post, setPost] = useState({});
    const [showDetail, setShowDetail] = useState(false);
    const [selectedId, setSelectedId] = useState(null); // Ajout de selectedId
    const location = useLocation();


    const data = [
        {user: "Marcel Dupond", com: "Je pense que cette exposition est un très bon choix ! Ma femme et moi ne sommes pas fan de la culture, mais nous avons appris beaucoup de choses durant ce voyage. Nous ne connaissions pas la ville de Paris, mais le lieu a été très facile à trouver."},
        {user: "Antoine Garcia", com: "Cette expérience enrichissante m'a permis de découvrir de nouveaux horizons. Mon voyage à Paris m'a fait découvrir de nombreuses choses, et je remercie ce site d'avoir regroupé les possibilités."},
        {user: "ano", com: "Cette exposition est honteuse ! À ne pas faire !!!"},
        {user: "Jacques Nolti", com: "A refaire sans aucun doute."}
    ];

    const add_com = (e) => {
        e.preventDefault();
        var login = sessionStorage.getItem("login");
        var text = document.getElementById("input_com").value;
        if (login == "null" || login == null || login == "") {
            console.log("ano added a com " + text);
        } else {
            console.log(login + " added a com " + text);
        }
    }

    const toggleDetail = (id) => {

        if (selectedId === id) {
            setShowDetail(!showDetail);
        } else {
            // Si l'id sélectionné est différent, alors affichez les détails
            setSelectedId(id);
            setShowDetail(true);
        }

        var temp = showDetail;
        setShowDetail(!showDetail);

        if (temp === false) {
            fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?where=id:' + id)
                .then((response) => response.json())
                .then((result) => {
                    setPost(result);
                    setShowDetail(true);
                });
        } else {
            fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=100&order_by=date_end&where=tags:\'' + location.pathname.split("/").pop() + '\'')
                .then((response) => response.json())
                .then((result) => {
                    setPost(result);
                    setShowDetail(false);
                });
        }
    }


    useEffect(() => {
        document.title = "Parici";
        fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=100&order_by=date_end&where=tags:\'' + location.pathname.split("/").pop() + '\'')
            .then((response) => response.json())
            .then((result) => {
                setPost(result);
                setShowDetail(false);
            })
            .catch((error) => {
                console.error("Une erreur s'est produite lors de la récupération des données :", error);
            });
    }, [location.pathname]);

    return (
        <div className="content">
            {showDetail ?
                post.results?.map(actu => (
                    <div className="detail" key={actu.id} id={actu.title}>
                        <div className="close_detail" onClick={() => toggleDetail(null)}>X</div>
                        <h2>{`${actu.title}`}</h2>
                        <div className="infos_detail">
                            <img className="detail_image" src={actu.cover_url}/>
                            <div>
                                <h3>Date : {`${actu.date_start}`} au {`${actu.date_end}`}</h3>
                                <h3>Lieu : {`${actu.address_street}`} {`${actu.address_zipcode}`}</h3>
                                <h3>{`${actu.description}`}</h3>
                                <a target="_blank" className="detail_link" href={`${actu.url}`}>Lien de l'évènement</a>
                            </div>
                        </div>
                        <div className="comments">
                            {data.map(com =>
                                <div className="comment">
                                    {`${com.user}`}
                                    <div className="comment_text">
                                        {`${com.com}`}
                                    </div>
                                </div>
                            )}
                            <div className="comment_form">
                                <textarea className="comment_input" id="input_com" />
                                <div className="comment_add" onClick={add_com}>
                                    Ajouter commentaire
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            :
                <div className="actus">
                    {post.results?.map((actu, index) => (
                    <div className="actualite" onClick={() => toggleDetail(actu.id)} key={`${actu.title}_${index}`} id={actu.title}>
                            <div className="title">{`${actu.title}`}</div>
                            <img className="actu_image" src={actu.cover_url} alt={`Image pour ${actu.title}`} />
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}

export default List;
