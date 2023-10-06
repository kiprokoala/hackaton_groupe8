import React, { Component } from "react";
import './App.css';
import Header from './components/Header';
import Left_menu from './components/Left_menu';
import Poll from './components/Poll';

class App extends Component {
    toggleDetail(id) {
        var temp = this.state.showDetail
        this.setState({
            showDetail: !this.state.showDetail
        });
        if(temp == false){
            fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?where=id:' + id).then((response) =>{
                return response.json()
            }).then((result) => {
                this.setState({post: result, showDetail: true})
            })
        }else{
            fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=4&order_by=updated_at').then((response) =>{
                return response.json()
            }).then((result) => {
                this.setState({post: result, showDetail: false})
            })
        }
    }

    state = {
        post: {}
    }

    add_com(e){
        e.preventDefault()
        var login = sessionStorage.getItem("login")
        var text = document.getElementById("input_com").value
        if(login == "null" || login == null || login == ""){
            console.log("ano added a com " + text);
        }else{
            console.log(login + " added a com " + text);
        }
    }

    data = [
        {user: "Marcel Dupond", com: "Je pense que cette exposition est un très bon choix ! Ma femme et moi ne sommes pas fan de la culture, mais nous avons appris beaucoup de choses durant ce voyage. Nous ne connaissions pas la ville de Paris, mais le lieu a été très facile à trouver."},
        {user: "Antoine Garcia", com: "Cette expérience enrichissante m'a permis de découvrir de nouveaux horizons. Mon voyage à Paris m'a fait découvrir de nombreuses choses, et je remercie ce site d'avoir regroupé les possibilités."},
        {user: "Ginette", com: "Cette exposition est honteuse ! À ne pas faire !!!"},
        {user: "Jacques Nolti", com: "A refaire sans aucun doute."}
    ]

    componentDidMount(){
        document.title = "Parici"
        fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=4&order_by=updated_at').then((response) =>{
            return response.json()
        }).then((result) => {
            this.setState({post: result, showDetail: false})
        })
    }

    render() {
        return(
            <div>
                <Header />
                <div className="total">
                    <Left_menu />
                    {this.state.showDetail ?
                        <div className="content">
                            {this.state.post.results?.map(actu =>
                                <div className="detail" id={actu.title}>
                                    <div className="close_detail" onClick={this.toggleDetail.bind(this, 0)}>X</div>
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
                                        {this.data.map(com =>
                                            <div className="comment">
                                                {`${com.user}`}
                                                <div className="comment_text">
                                                    {`${com.com}`}
                                                </div>
                                            </div>
                                        )}
                                        <div className="comment_form">
                                            <textarea className="comment_input" id="input_com" />
                                            <div className="comment_add" onClick={this.add_com.bind(this)}>
                                                Ajouter commentaire
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        :
                        <div className="content">
                            <Poll />
                            <h2>Nos dernières actualités</h2>
                            <div className="actualites">
                                {this.state.post.results?.map(actu =>
                                    <div className="actualite" onClick={this.toggleDetail.bind(this, actu.id)} id={actu.title}>
                                        <div className="title">{`${actu.title}`}</div>
                                        <img className="actu_image" src={actu.cover_url}/>
                                    </div>
                                )}
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default App;
