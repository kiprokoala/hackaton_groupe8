//Profile.js

import React, { Component } from "react";
import '../App.css';
import './Profile.css';
import App from '../App';
import Login from './Login';

class Profile extends Component {
    componentDidMount(){
        console.log(sessionStorage.getItem("login"));
        console.log(sessionStorage.getItem("login") == "null")
    }

    login = sessionStorage.getItem("login")

    render(){
        if(this.login == "null" ||this.login == null || this.login == ""){
            return(
                <Login />
            );
        }else{
            return(
                <div className="content">
                    Profile loaded
                </div>
            );
        }
    }
}
export default Profile;
