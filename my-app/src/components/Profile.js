//Profile.js

import React, { Component } from "react";
import '../App.css';
import './Profile.css';
import Header from './Header';
import App from '../App';
import Left_menu from './Left_menu';
import Login from './Login';

class Profile extends Component {
    componentDidMount(){
        console.log(sessionStorage.getItem("login"));
        console.log(sessionStorage.getItem("login") == "null")
    }

    render(){
        if(sessionStorage.getItem("login") == "null"){
            return(
                <Login />
            );
        }else{
            return(
                <div>
                    <Header />
                    <div className="total">
                        <Left_menu />
                        <div className="content">
                            Profile loaded
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default Profile;
