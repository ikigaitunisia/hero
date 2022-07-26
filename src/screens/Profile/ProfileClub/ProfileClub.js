import React, { useState } from 'react'
import speaker from "../ProfileAssets/Speaker.svg"
import vote from "../ProfileAssets/Vote.svg"
import events from "../ProfileAssets/Events.svg"
import phoneScene from "../ProfileAssets/Phonescene.svg"
import ReturnIcon from "../ProfileAssets/Return.svg"
import { withRouter, useHistory, Link } from "react-router-dom";
import playButton from "../ProfileAssets/Play_Button.svg"
import "./ProfileClub.css"
import { useEffect } from 'react'



const ProfileClub = (props) => {


    const [show, setShow] = useState('show')

    localStorage.setItem("profileId",  props.match.params.id)
    useEffect(() => {
        let test = document.querySelector("#profile");
        if (test) {test.remove()}
    })


    const redirectTosmthn = () => {
        window.location.replace('/vote:id')
    }

    const feature = () => {
        window.location.replace('/feature:id')
    }

    const eventTalk = () => {
        window.location.replace('/event-talk:id')

    }

    const dropHandler = (f) => {
        setShow('no')
        document.querySelector(".ProfileClubHeader").style.display = "none"
        document.querySelector(".AccorMore").style.height = "100vh"
        document.querySelector(".Subacc." + f).style.display = "flex"
        document.querySelector(".Subacc." + f).style.flexDirection = "column"
        document.querySelector(".AccorHeader." + f).style.display = "none"
    }


  return (

    
    <div className='ProfileClub' style={
        {
            minHeight: show == "show" ? ("100vh"):("initial")
        }
    }>

 

            <div className='ProfileClubHeader '>
            <nav className='navP'>
                <button className='border-0 bg-transparent' onClick={() => window.location.replace("/profile" + props.match.params.id)}><img className='returnIconClub' src={ReturnIcon} /></button>
                <h6 className='ActiviestName'>Anuna’s Club</h6>
                <button className='navClubBtn'>Changer</button>
            </nav>
            <img src={playButton} className="align-items-center my-auto mx-auto"/>

        </div>

            
            <div className='AccorMore d-flex flex-column'>
            <div className='d-flex flex-column '>
                <button className='AccorHeader f ' onClick={() => dropHandler('f')}>                        
                <img src={speaker} />    <p className='my-auto'>Active Campaigns</p>
                </button>
                <div className='Subacc f'>
                <nav className='navP'>
                <button className='border-0 bg-transparent' onClick={() => window.location.replace("/profile" + props.match.params.id)}><img className='returnIconClub' src={ReturnIcon} /></button>
                <h6 className='ActiviestName'>Anuna’s Club</h6>
                <button className='navClubBtn'>Changer</button>
            </nav>
                    <img className='Accicon' src={speaker} />
                    <button  onClick={redirectTosmthn} className='more-btn ActiveBtn mx-auto' id='more-Link'>
                    COP 27
                    </button>                    <button className='more-btn mx-auto'>Anuna x UNICEF</button>
                    <button className='more-btn mx-auto'>Anuna x UNICEF</button>
                </div>
            </div>
            <div className='d-flex flex-column'>
            <button onClick={() => dropHandler('s')} className='AccorHeader s' >                    <img src={vote} /> <p>Vote on the future of HERO</p>
            </button>
            <div className='Subacc s'>
            <nav className='navP'>
            <button className='border-0 bg-transparent' onClick={() => window.location.replace("/profile" + props.match.params.id)}><img className='returnIconClub' src={ReturnIcon} /></button>
            <h6 className='ActiviestName'>Anuna’s Club</h6>
            <button className='navClubBtn'>Changer</button>
        </nav>
                <img className='Accicon' src={vote} />
                <button onClick={feature} className='voteBtn more-btn mx-auto'>
                Club Messaging Feature
                                    </button>                <button className='more-btn mx-auto'>Sub Hola</button>
                <button className='more-btn mx-auto'>Sub Hola</button>
            </div>
        </div>
        <div className='d-flex flex-column'>
        <button  onClick={() => dropHandler('t')} className='AccorHeader t' ><img src={phoneScene} /><p>Behind the scenes footage</p></button>
        <div className='Subacc t'>

        <nav className='navP'>
            <button className='border-0 bg-transparent' onClick={() => window.location.replace("/profile" + props.match.params.id)}><img className='returnIconClub' src={ReturnIcon} /></button>
            <h6 className='ActiviestName'>Anuna’s Club</h6>
            <button className='navClubBtn'>Changer</button>
        </nav>
        <img className='Accicon' src={phoneScene} />

            <button className='more-btn mx-auto'>Sub Hola</button>
            <button className='more-btn mx-auto'>Sub Hola</button>
            <button className='more-btn mx-auto'>Sub Hola</button>
        </div>
    </div>
    <div className='d-flex flex-column'>
    <button onClick={() => dropHandler('l')} className='AccorHeader l' ><img src={events} /><p>HERO Events</p></button>
    <div className='Subacc l'>
    <nav className='navP'>
    <button className='border-0 bg-transparent' onClick={() => window.location.replace("/profile" + props.match.params.id)}><img className='returnIconClub' src={ReturnIcon} /></button>
    <h6 className='ActiviestName'>Anuna’s Club</h6>
    <button className='navClubBtn'>Changer</button>
</nav>
<img className='Accicon' src={events} />

<button onClick={eventTalk} name={"COP27"} className='more-btn HeventBtn mx-auto'>
HERO Talk Amsterdam
</button>
        <button className='more-btn mx-auto'>Sub Hola</button>
        <button className='more-btn mx-auto'>Sub Hola</button>
    </div>
    </div>
    
            </div>

        



    
    
    </div>
  )
}

export default withRouter(ProfileClub);