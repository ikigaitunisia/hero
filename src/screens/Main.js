import React, { useState,useEffect } from 'react';
import Header from '../components/Header'
import Capsule from '../components/Capsule'
import BottomMenu from '../components/BottomMenu'

import axios from "axios";
import { withRouter } from 'react-router-dom';
import { useHistory } from "react-router-dom";


function Main(props)  {

const history = useHistory();


// Set up some variables to prepare a Avalanche USDC -> BSC USDT quote

        
// Use the following flow to handle
// 1) Receiving a bridge quote
// 2) Submitting an approval TX on the specific Token
// 3) Initiating a bridge transaction




return (
<>
	<Header />
    <Capsule />
    <BottomMenu />

</>    
)

}


export default withRouter(Main);