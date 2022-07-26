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



const ProfileClub = (props) => {


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

    const dropHandler = () => {
        document.querySelector(".ProfileClubHeader").style.display = 'none!important';
        document.querySelector(".ProfileClub").style.minHeight = "0";
        document.querySelector(".ProfileClub").style.height = "0";
        document.querySelector("nav.test").style.height = "none!important";

    }


  return (
    <div className='ProfileClub'>
        <div className='ProfileClubHeader d-flex flex-column justify-content-around'>
            <nav className='test d-flex justify-content-around navP border-0'>
                <button className='border-0 bg-transparent' onClick={() => window.location.replace("/profile" + props.match.params.id)}><img className='returnIconClub' src={ReturnIcon} /></button>
                <h6 className='ActiviestName'>Anuna’s Club</h6>
                <button className='navClubBtn'>Changer</button>
            </nav>
            <img src={playButton} className="align-items-center my-auto mx-auto"/>

        </div>
        <div id="accordion" className='according'>
            <div className="card card-1 rounded-0" >
                <div className="card-header p-4 border-0" id="headingFirst">
                <h5 className="mb-0">
                    <button onClick={dropHandler} className="btn btn-link collapsed rounded-0" data-toggle="collapse" data-target="#collapseFirst" aria-expanded="false" aria-controls="collapseFirst">
                        <img src={speaker} />    Active Campaigns
                    </button>
                </h5>
                </div>
                <div  id="collapseFirst" className="collapse" aria-labelledby="headingFirst" data-parent="#accordion">
                <div style={{ color: "#0000FF!important"}} className="card-body d-flex flex-column justify-content-between align-items-center">
                    <img src={speaker} />
                    <button  onClick={redirectTosmthn} className='more-btn ActiveBtn' id='more-Link'>
                    COP 27
                    </button>
                    <button className='more-btn mid-btn ActiveBtn'>
                    Anuna x UNICEF
                    </button>
                    <button className='more-btn ActiveBtn'>
                    Global Climate Strike
                    </button>

                    <a className='MoreLink mx-auto'>See previous campaigns</a>
                    
                </div>
                </div>
            </div>
            <div className="card card-2 rounded-0">
                <div className="card-header p-4 border-0" id="headingTwo">
                <h5 className="mb-0">
                    <button className="btn btn-link rounded-0 collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <img src={vote} /> Vote on the future of HERO
                    </button>
                </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                    <img src={vote} />
                    <button onClick={feature} className='voteBtn more-btn'>
                    Club Messaging Feature
                                        </button>
                    <button className='more-btn mid-btn voteBtn'>
                    COP Campaign Concept
                                        </button>
                    <button className='more-btn voteBtn'>
                    Topic of next HERO Talk
                                        </button>

                    <a className='MoreLink mx-auto'>See my previous votes</a>
                    
                </div>
                </div>
            </div>
            <div className="card card-3 rounded-0">
                <div className="card-header p-4 border-0" id="headingThree">
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed rounded-0" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <img src={phoneScene} />Behind the scenes footage
                    </button>
                </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                    <img src={phoneScene} />
                    <button className='more-btn bsBtn'>
                    Preparing for COP                    </button>
                    <button className='more-btn mid-btn bsBtn'>
                    Preparing our next climate strike
                                        </button>
                    <button className='more-btn bsBtn'>
                    Meeting with HERO Supporters
                                        </button>

                    <a className='MoreLink mx-auto'>See more behind the scenes</a>
                </div>
                </div>
            </div>
            <div className="card card-4 rounded-0 rounded-0">
                <div className="card-header p-4 border-0" id="headingLast">
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed rounded-0" data-toggle="collapse" data-target="#collapseLast" aria-expanded="false" aria-controls="collapseLast">
                    <img src={events} />HERO Events
                    </button>
                </h5>
                </div>
                <div id="collapseLast" className="collapse" aria-labelledby="headingLast" data-parent="#accordion">
                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                    <img src={events} />
                    <button onClick={eventTalk} name={"COP27"} className='more-btn HeventBtn'>
                    HERO Talk Amsterdam
                    </button>
                    <button className='more-btn mid-btn HeventBtn'>
                    HERO Re-Cycling
                                        </button>
                    <button className='more-btn HeventBtn'>
                    HERO Supporter’s
                    Meet Up
                                        </button>

                    <a className='MoreLink mx-auto'>See previous events</a>
                    
                </div>
                </div>
            </div>
        </div>
    
    
    </div>
  )
}

export default withRouter(ProfileClub);