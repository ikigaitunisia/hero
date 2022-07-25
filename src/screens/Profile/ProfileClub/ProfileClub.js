import React from 'react'
import speaker from "../ProfileAssets/Speaker.svg"
import vote from "../ProfileAssets/Vote.svg"
import events from "../ProfileAssets/Events.svg"
import phoneScene from "../ProfileAssets/Phonescene.svg"
import ReturnIcon from "../ProfileAssets/Return.svg"
import { withRouter, useHistory, Link } from "react-router-dom";
import playButton from "../ProfileAssets/Play_Button.svg"
import "./ProfileClub.css"
import { useEffect } from 'react'



const ProfileClub = () => {

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

  return (
    <div className='ProfileClub'>
        <div className='ProfileClubHeader'>
            <nav className='d-flex justify-content-around navP'>
                <img className='returnIconClub' src={ReturnIcon} />
                <h6 className='ActiviestName'>Anuna’s Club</h6>
                <button className='navClubBtn'>Changer</button>


            </nav>
        </div>

            <img src={playButton} className="align-items-center my-auto mx-auto"/>
        <div id="accordion" className='according'>

            <div className="card card-1 rounded-0">
                <div className="card-header" id="headingFirst">
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed rounded-0" data-toggle="collapse" data-target="#collapseFirst" aria-expanded="false" aria-controls="collapseFirst">
                        <img src={speaker} />    Vote on the future of HERO
                    </button>
                </h5>
                </div>
                <div id="collapseFirst" className="collapse" aria-labelledby="headingFirst" data-parent="#accordion">
                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                    <img src={speaker} />
                    <button  onClick={redirectTosmthn} className='more-btn' id='more-Link'>
                    COP 27
                    </button>
                    <button className='more-btn mid-btn'>
                    Anuna x UNICEF
                    </button>
                    <button className='more-btn'>
                    Global Climate Strike
                    </button>

                    <a>See previous campaigns</a>
                    
                </div>
                </div>
            </div>
            <div className="card card-2 rounded-0">
                <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                    <button className="btn btn-link rounded-0 collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <img src={vote} /> Vote on the future of HERO
                    </button>
                </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                    <img src={vote} />
                    <button onClick={feature} className='more-btn'>
                    Club Messaging Feature
                                        </button>
                    <button className='more-btn mid-btn'>
                    COP Campaign Concept
                                        </button>
                    <button className='more-btn'>
                    Topic of next HERO Talk
                                        </button>

                    <a>See my previous votes</a>
                    
                </div>
                </div>
            </div>
            <div className="card card-3 rounded-0">
                <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed rounded-0" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <img src={phoneScene} />Behind the scenes footage
                    </button>
                </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                    <img src={phoneScene} />
                    <button className='more-btn'>
                    Preparing for COP                    </button>
                    <button className='more-btn mid-btn'>
                    Preparing our next climate strike
                                        </button>
                    <button className='more-btn'>
                    Meeting with HERO Supporters
                                        </button>

                    <a>See more behind the scenes</a>
                </div>
                </div>
            </div>
            <div className="card card-4 rounded-0 rounded-0">
                <div className="card-header" id="headingLast">
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed rounded-0" data-toggle="collapse" data-target="#collapseLast" aria-expanded="false" aria-controls="collapseLast">
                    <img src={events} />HERO Events
                    </button>
                </h5>
                </div>
                <div id="collapseLast" className="collapse" aria-labelledby="headingLast" data-parent="#accordion">
                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                    <img src={events} />
                    <button onClick={eventTalk} name={"COP27"} className='more-btn'>
                    HERO Talk Amsterdam
                    </button>
                    <button className='more-btn mid-btn'>
                    HERO Re-Cycling
                                        </button>
                    <button className='more-btn'>
                    HERO Supporter’s
                    Meet Up
                                        </button>

                    <a>See previous events</a>
                    
                </div>
                </div>
            </div>
        </div>
    
    
    </div>
  )
}

export default withRouter(ProfileClub);