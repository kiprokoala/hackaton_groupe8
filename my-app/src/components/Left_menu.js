// src/Left_menu.js
import './Left_menu.css';
import magnifier from '../images/magnifier.png';

import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Left_menu extends Component {
    state = {
        post: []
    }

    componentDidMount(){
        var temp = []
        fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=100'
        ).then(response =>{
            return response.json()
        }).then(result => {
            result.results?.map(actu => {
                actu.tags?.map(mot => {
                    if(!temp.includes(mot)){
                        temp.push(mot)
                    }
                })
            })
        })
        this.setState({post: temp})
    }

    render(){
        return (
        <div className="menu">
            <div>
                {this.state.post?.map(actu =>
                    <Link to={`/list/${actu}`} onClick={this.forceUpdate} ><ul id={actu}>{actu}</ul></Link>
                )}
            </div>
        </div>
      );
  }
}

export default Left_menu;
