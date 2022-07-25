import React from 'react'
import events from "../ProfileAssets/Events.svg"
import speaker from "../ProfileAssets/Speaker.svg"
import ReturnIcon from "../ProfileAssets/Return.svg"
import './eventTalk.css'
import { useHistory } from 'react-router-dom'

const eventTalk = () => {
  
  return (
    <div className='eventTalk d-flex flex-column '>
    <nav className='d-flex justify-content-around navP'>
        <button className='border-0 bg-transparent' onClick={() => {window.location.replace("/profileclub" + window.localStorage.getItem("profileId"))} }><img className='returnIconClub' src={ReturnIcon} /></button>
        <h6 className='ActiviestName'>Anuna’s Club</h6>
        <button className='navClubBtn'>Changer</button>
    </nav>
        <img className='eventIcon mx-auto ' src={events} />
        <div className='eventInner d-flex flex-column justify-content-center align-items-center my-auto'>
            <img src={process.env.PUBLIC_URL + "/assets/img/svg/Code.svg" } />
            <h5 className='eventTalkTitle'>
            Name
            </h5>
            <p className='eventTalkParagraph'>
            John Doe
            </p>
            <h5 className='eventTalkTitle'>
            Event
            </h5>
            <p className='eventTalkParagraph'>HERO Talk Amsterdam
            </p>
            <h5 className='eventTalkTitle'>Ticket Type</h5>
            <p className='eventTalkParagraph'>HERO Changer Access</p>
            <h5 className='eventTalkTitle'>Date</h5>
            <p className='eventTalkParagraph'>Thu, 28 Jul 2022
            7:00 PM - 8:30 PM</p>
            <a className='eventTalkLink mx-auto'>Add to calendar</a>
            <h5>Venue</h5>
            <p className='eventTalkParagraph'>EDGE Workspaces</p>
            <a className='eventTalkLink mx-auto'>View Map</a> 
          </div>
    
    </div>
  )
}

export default eventTalk