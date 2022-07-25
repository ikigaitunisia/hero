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
        <nav className='d-flex justify-content-around navP'>
            <img className='returnIconClub' src={ReturnIcon} />
            <h6 className='ActiviestName'>Anuna’s Club</h6>
            <button className='navClubBtn'>Changer</button>
        </nav>
    {statecmp === 'current' ? (

        <div className='d-flex flex-column align-items-center align-self-center my-auto'>
        <img src={vote} />
        <h3>HERO App Feature</h3>
        <p>Would you like to have a HERO Club chat
        feature to exchange messages
        with the mobilizer and other club members?</p>
        <div className='d-flex'>
            <button onClick={switchNext}>Yes</button>
            <button>No</button>
        </div>
        </div>

    ):(

        <div className='FResults d-flex flex-column h-75'>
        <img className='voteIcon' src={vote} />
            
        <div className='d-flex justify-content-around flex-column'>
            <div className='d-flex justify-content-around'>
            <h6>Yes</h6>
            <h6>No</h6>
            </div>
            <div className="votes d-lfex">
            <div className='Yvote'>
                <span>
                </span>
            </div>
            <div className='Nvote'>
                <span>
                </span>
            </div>
            </div>
        </div>
        </div>

    )

    
}


    </div>
  )
}

export default Feature
