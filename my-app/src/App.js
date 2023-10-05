import React, { Component } from "react";
import './App.css';
import Header from './components/Header';
import Left_menu from './components/Left_menu';
import Poll from './components/Poll';

class App extends Component {
    togglePopup(id) {
        var temp = this.state.showPopup
        this.setState({
            showPopup: !this.state.showPopup
        });
        if(temp == false){
            fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?where=id:' + id).then((response) =>{
                return response.json()
            }).then((result) => {
                this.setState({post: result, showPopup: true})
            })
        }else{
            fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=4&order_by=updated_at').then((response) =>{
                return response.json()
            }).then((result) => {
                this.setState({post: result, showPopup: false})
            })
        }
    }

    state = {
        post: {}
    }

    componentDidMount(){
        fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=4&order_by=updated_at').then((response) =>{
            return response.json()
        }).then((result) => {
            this.setState({post: result, showPopup: false})
        })
    }

    render() {
        return(
            <div>
                <Header />
                <div className="total">
                    <Left_menu />
                    {this.state.showPopup ?
                        <div className="content">
                            {this.state.post.results?.map(actu =>
                                <div className="detail" id={actu.title}>
                                <div className="close_popup" onClick={this.togglePopup.bind(this, 0)}>X</div>
                                    <h2>{`${actu.title}`}</h2>
                                    <img className="detail_image" src={actu.cover_url}/>
                                </div>
                            )}
                        </div>
                        :
                        <div className="content">
                            <Poll />
                            <h2>Nos dernières actualités</h2>
                            <div className="actualites">
                                {this.state.post.results?.map(actu =>
                                    <div className="actualite" onClick={this.togglePopup.bind(this, actu.id)} id={actu.title}>
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
