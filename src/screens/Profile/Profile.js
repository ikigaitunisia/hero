import React from 'react'
import Logo from "./ProfileAssets/HERO Logo.svg"
import Play from "./ProfileAssets/Play_Button.svg"
import profileImage from "./ProfileAssets/ProfileImage.svg"
import socialIconO from "./ProfileAssets/social-icon-1.svg"
import socialIconT from "./ProfileAssets/social-icon-2.svg"
import socialIconTh from "./ProfileAssets/social-icon-3.svg"
import switchIconO from "./ProfileAssets/SwitchIcon-1.svg"
import switchIconT from "./ProfileAssets/SwitchIcon-2.svg"
import  VerifyLogo  from './ProfileAssets/Verify-logo.svg'
import VideoContent1 from "./ProfileAssets/Video Content 1.png"
import VideoContent2 from "./ProfileAssets/Video Content 2.png"
import VideoContent3 from "./ProfileAssets/Video Content 3.png"
import VideoContent4 from "./ProfileAssets/Video Content 4.png"
import VideoContent5 from "./ProfileAssets/Video Content 5.png"
import VideoContent6 from "./ProfileAssets/Video Content 6.png"


const Profile = () => {
  return (
    <div className='Profile h-100 d-flex flex-column justify-content-center'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
          <img src={Logo} />
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown link
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <div className='d-flex flex-column justify-content-center '>
              <div className='Profile-About'>
                <img src={profileImage} className='ProfileImage'/>
                <title className='ProfileTitle'>Anuna de Wever</title>
                <span className='d-flex'>
                <small className='Profilesubtitle'>@anunadewever</small>
                <img src={VerifyLogo} id='profilesubicon'/>
                </span>
                <small className='Profilelocation'>Brussels, Belgium</small>
                <p className='ProfileDesc'>
                </p>
                <ul className='socialMediaIcons d-flex'>
                <li className='scoial-icon'>
                <img src={socialIconO} className='socialIcon' />
                </li>
                <li className='scoial-icon'>
                <img src={socialIconT} className='socialIcon' />
                </li>
                <li className='scoial-icon'>
                <img src={socialIconTh} className='socialIcon' />
                </li> 
                </ul>
              </div>
              <div>
                <div className='switch'>
                  <button className='switch'><img className='switch-btn-icon' src={switchIconO} /> Public Content</button>
                  <button className='switch' ><img className='switch-btn-icon' src={switchIconT}/>Club Acess</button>
                </div>
                  <img src={VideoContent1}/>
                  <img src={VideoContent2}/>
                  <img src={VideoContent3}/>
                  <img src={VideoContent4}/>
                  <img src={VideoContent5}/>
                  <img src={VideoContent6}/>
              </div>




          </div>
        </div>
    
    
    
    
    </div>
  )
}

export default Profile