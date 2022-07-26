import React from 'react'
import "./feature.css"
import vote from "./ProfileAssets/Vote.svg"
import ReturnIcon from "./ProfileAssets/Return.svg"
import { useState } from 'react'



const Feature = () => {

    const [statecmp, setStatecmp] = useState('current')
    
    const switchNext = () => 
    {
        setStatecmp('next')
    }


  return (
    <div className='featureCntainer d-flex flex-column'>

    {statecmp === 'current' ? (
        <>
        <nav className='d-flex justify-content-around navP'>
        <button className='border-0 bg-transparent' onClick={() => window.location.replace("/profile" + localStorage.getItem("profileId"))}><img className='returnIconClub' src={ReturnIcon} /></button>
        <h6 className='ActiviestName'>Anuna’s Club</h6>
        <button className='navClubBtn'>Changer</button>
        </nav>
        <div className='d-flex flex-column align-items-center align-self-center my-auto' style={{width: "265px"}}>
        <img src={vote} />
        <h3 className='featureTitle'>HERO App Feature</h3>
        <p className='featureParagraph w-100'>Would you like to have a HERO Club chat
        feature to exchange messages
        with the mobilizer and other club members?</p>
        <div className='d-flex justify-content-between w-75'>
            <button onClick={switchNext} className="featureBtn">Yes</button>
            <button className="featureBtn">No</button>
        </div>
        </div>
        </>
    ):(
        <>
            <nav className='d-flex justify-content-around navP'>
            <img onClick={() => {setStatecmp('current')}} className='returnIconClub' src={ReturnIcon} />
            <h6 className='ActiviestName'>Anuna’s Club</h6>
            <button className='navClubBtn'>Changer</button>
            </nav>
            <div className='FResults d-flex flex-column h-75'>
            <img className='voteIcon' src={vote} />
            <h3 className='featureTitle'>HERO App Feature Results</h3>

            <div className='d-flex justify-content-around flex-column h-50'>
                <div className="votes d-flex justify-content-around">
                <div className='Yvote'>
                    <h6 className='VoteType y'>Yes</h6>
                    <span>80%</span>
                </div>
                <div className='Nvote'>
                <h6 className='VoteType n'>No</h6>    
                <span>20%</span>
                </div>
                </div>
            </div>
            </div>
        </>
    )

    
}


    </div>
  )
}

export default Feature
