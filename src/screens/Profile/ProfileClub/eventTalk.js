import React from 'react'
import events from "../ProfileAssets/Events.svg"


const eventTalk = () => {
  return (
    <div>
        <img src={events} />
        <div>
            <h5>
            Name
            </h5>
            <p>
            John Doe
            </p>
            <h5>
            Event
            </h5>
            <p>HERO Talk Amsterdam
            </p>
            <h5>Ticket Type</h5>
            <p>HERO Changer Access</p>
            <h5>Date</h5>
            <p>Thu, 28 Jul 2022
            7:00 PM - 8:30 PM</p>
            <a>Add to calendar</a>
            <h5>Venue</h5>
            <p>EDGE Workspaces</p>
            <a>View Map</a>
            </div>
    
    </div>
  )
}

export default eventTalk