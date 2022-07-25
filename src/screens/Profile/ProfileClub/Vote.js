import React from 'react'
import speaker from "../ProfileAssets/Speaker.svg"
import ReturnIcon from "../ProfileAssets/Return.svg"
import "./ProfileClub.css"
import { withRouter } from 'react-router-dom'
const Vote = () => {
  return (
    <div className='VoteContainer'>
    <nav className='d-flex justify-content-around navP'>
        <img className='returnIconClub' src={ReturnIcon} />
        <h6 className='ActiviestName'>Anuna’s Club</h6>
        <button className='navClubBtn'>Changer</button>
    </nav>
    
        <img src={speaker}/>
    
    </div>
  )
}

export default withRouter(Vote);