import React, { Component } from "react";
import './App.css';
import Header from './components/Header';
import Left_menu from './components/Left_menu';
import Poll from './components/Poll';

class App extends Component {

    state = {
        post: {}
    }

    componentDidMount(){
        fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=4&order_by=updated_at').then((response) =>{
            return response.json()
        }).then((result) => {
            this.setState({post: result})
        })
    }

  render() {
  return(
    <div>
        <Header />
        <div className="total">
            <Left_menu />
            <div className="content">
                <Poll />
                <h2>Nos dernières actualités</h2>
                <div className="actualites">
                        {this.state.post.results?.map(actu =>
                            <div className="actualite" id={actu.title}>
                                {`${actu.title}`}
                                <img className="actu_image" src={actu.cover_url}/>
                            </div>
                        )}
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
