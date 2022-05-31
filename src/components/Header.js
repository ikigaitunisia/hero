import React, { useState,useEffect } from 'react';

import axios from "axios";
import { withRouter } from 'react-router-dom';
import { useHistory } from "react-router-dom";


function Header(props)  {

const history = useHistory();


// Set up some variables to prepare a Avalanche USDC -> BSC USDT quote

        
// Use the following flow to handle
// 1) Receiving a bridge quote
// 2) Submitting an approval TX on the specific Token
// 3) Initiating a bridge transaction




return (
<>
{/*<div id="loader">
        <img src="assets/img/loading-icon.png" alt="icon" className="loading-icon" />
    </div>
*/}   
    <div className="appHeader bg-primary text-light">
        <div className="left">
            <a href="#" className="headerButton" data-bs-toggle="modal" data-bs-target="#sidebarPanel">
                <ion-icon name="menu-outline"></ion-icon>
            </a>
        </div>
        <div className="pageTitle">
            <img src="assets/img/logo.png" alt="logo" className="logo" />
        </div>
        <div className="right">
            <a href="app-notifications.html" className="headerButton">
                <ion-icon className="icon" name="notifications-outline"></ion-icon>
                <span className="badge badge-danger">4</span>
            </a>
            <a href="app-settings.html" className="headerButton">
                <img src="assets/img/sample/avatar/avatar1.jpg" alt="image" className="imaged w32" />
                <span className="badge badge-danger">6</span>
            </a>
        </div>
    </div>
</>    
)

}


export default withRouter(Header);