import React from 'react'



const Profile = () => {
  return (
    <div className='Profile h-100 d-flex flex-column justify-content-center'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
          <img src='' />
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
                <img className='ProfileImage'/>
                <title className='ProfileTitle'></title>
                <span className='d-flex'>
                <small className='Profilesubtitle'></small>
                <img id='profilesubicon'/>
                </span>
                <small className='Profilelocation'>Brussels, Belgium</small>
                <p className='ProfileDesc'>
                </p>
                <ul className='socialMediaIcons d-flex'>
                <li className='scoial-icon'>
                <img className='socialIcon' />
                </li>
                <li className='scoial-icon'>
                <img className='socialIcon' />
                </li>
                <li className='scoial-icon'>
                <img className='socialIcon' />
                </li> 
                </ul>
              </div>
              <div>
                <div className='switch'>
                  <button className='switch'><img className='switch-btn-icon' src=''/> Public Content</button>
                  <button className='switch' ><img className='switch-btn-icon' src=''/>Club Acess</button>
                </div>
                <img src=''/>
                <img src=''/>
                <img src=''/>
                <img src=''/>
                <img src=''/>
                <img src=''/>
              </div>




          </div>
        </div>
    
    
    
    
    </div>
  )
}

export default Profile