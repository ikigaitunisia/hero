import React from 'react'
import speaker from "../ProfileAssets/Speaker.svg"
import vote from "../ProfileAssets/Vote.svg"
import events from "../ProfileAssets/Events.svg"
import phoneScene from "../ProfileAssets/Phonescene.svg"
import ReturnIcon from "../ProfileAssets/Return.svg"
import playButton from "../ProfileAssets/Play_Button.svg"
import "./ProfileClub.css"

const ProfileClub = () => {
  return (
    <div className='ProfileClub'>
        <div className='ProfileClubHeader'>
            <nav className='d-flex justify-content-around'>
                <img className='returnIconClub' src={ReturnIcon} />
                <h6 className='ActiviestName'>Anuna’s Club</h6>
                <button className='navClubBtn'>Change</button>


            </nav>
        </div>

            <img src={playButton} className="align-items-center my-auto mx-auto"/>
        <div id="accordion" className='according'>

            <div class="card card-1 rounded-0">
                <div class="card-header" id="headingFirst">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed rounded-0" data-toggle="collapse" data-target="#collapseFirst" aria-expanded="false" aria-controls="collapseFirst">
                        <img src={speaker} />    Vote on the future of HERO
                    </button>
                </h5>
                </div>
                <div id="collapseFirst" className="collapse" aria-labelledby="headingFirst" data-parent="#accordion">
                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                    <img src={speaker} />
                    <button className='more-btn'>
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
                    <button className='more-btn'>
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
            <div class="card card-3 rounded-0">
                <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed rounded-0" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <img src={phoneScene} />Behind the scenes footage
                    </button>
                </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                    <img src={phoneScene} />
                    <button className='more-btn'>
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
            <div class="card card-4 rounded-0 rounded-0">
                <div class="card-header" id="headingLast">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed rounded-0" data-toggle="collapse" data-target="#collapseLast" aria-expanded="false" aria-controls="collapseLast">
                    <img src={events} />HERO Events
                    </button>
                </h5>
                </div>
                <div id="collapseLast" className="collapse" aria-labelledby="headingLast" data-parent="#accordion">
                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                    <img src={events} />
                    <button className='more-btn'>
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
        </div>
    
    
    </div>
  )
}

export default ProfileClub