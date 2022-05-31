import React, { useState,useEffect } from 'react';

import axios from "axios";
import { withRouter } from 'react-router-dom';
import { useHistory } from "react-router-dom";


function BottomMenu(props)  {

const history = useHistory();


// Set up some variables to prepare a Avalanche USDC -> BSC USDT quote

        
// Use the following flow to handle
// 1) Receiving a bridge quote
// 2) Submitting an approval TX on the specific Token
// 3) Initiating a bridge transaction




return (
<>
<div className="appBottomMenu">
        <a href="index.html" className="item active">
            <div className="col">
                <ion-icon name="pie-chart-outline"></ion-icon>
                <strong>Overview</strong>
            </div>
        </a>
        <a href="app-pages.html" className="item">
            <div className="col">
                <ion-icon name="document-text-outline"></ion-icon>
                <strong>Pages</strong>
            </div>
        </a>
        <a href="app-components.html" className="item">
            <div className="col">
                <ion-icon name="apps-outline"></ion-icon>
                <strong>Components</strong>
            </div>
        </a>
        <a href="app-cards.html" className="item">
            <div className="col">
                <ion-icon name="card-outline"></ion-icon>
                <strong>My Cards</strong>
            </div>
        </a>
        <a href="app-settings.html" className="item">
            <div className="col">
                <ion-icon name="settings-outline"></ion-icon>
                <strong>Settings</strong>
            </div>
        </a>
    </div>
    
</>    
)

}


export default withRouter(BottomMenu);