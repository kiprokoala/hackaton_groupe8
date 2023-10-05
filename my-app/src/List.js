import React, { Component } from "react";
import './List.css';
import './App.css';
import Header from './components/Header';
import Left_menu from './components/Left_menu';
import withRouter from './withRouter';

class List extends Component {
    state = {
        post: {}
    }

    componentDidMount(){
        fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=100&order_by=date_end&where=tags:\'' + this.props.params.id + '\'').then((response) =>{
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
                <div className="actus">
                    {this.state.post.results?.map(actu =>
                        <div className="actualite" id={actu.title}>
                            <div className="title">{`${actu.title}`}</div>
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

export default withRouter(List);
