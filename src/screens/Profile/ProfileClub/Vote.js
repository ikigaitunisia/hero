import React from 'react'
import speaker from "../ProfileAssets/Speaker.svg"
import ReturnIcon from "../ProfileAssets/Return.svg"
import "./ProfileClub.css"
import { withRouter } from 'react-router-dom'
const Vote = () => {
  return (
    <div className='VoteContainer h-100 d-flex flex-column justify-content-between'>
    <nav className='d-flex justify-content-around navP'>
    <button className='border-0 bg-transparent' onClick={() => {window.location.replace("/profileclub" + window.localStorage.getItem("profileId"))} }><img className='returnIconClub' src={ReturnIcon} /></button>
    <h6 className='ActiviestName'>Anuna’s Club</h6>
        <button className='navClubBtn'>Changer</button>
    </nav>
        <div className='VoteInner align-self-end d-flex flex-column align-items-center justify-content-center mx-auto mb-4'>
        <img src={speaker}/>
        <p>COP 27</p>
        </div>
    </div>
  )
}

export default withRouter(Vote);