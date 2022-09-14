import React, { useState, useEffect } from "react";
import { withRouter,useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {CopyToClipboard} from 'react-copy-to-clipboard';

import {
  
  
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
 
  
 

} from "react-share";
function Echo() {
  const history = useHistory();
  const [Copied,setCopied] = useState("copie");
  const { circlename } = useParams();
  const valueOF = "https://hegemony.donftify.digital:3001/circle-feed-details"+circlename;
  return (
    <>
      <div
        id="appCapsule"
        className="bg-g login"
        style={{ minHeight: "100vh" }}
      >
        <div id="welcomeClub" className="modal-body">
          <img src={"assets/img/echo.png"} alt="logo" className="logo" />{" "}
          <p className="header-text mt-4 white">
            Echo this circle,
            <br />
            invite your friends to join!
          </p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder={valueOF}
              value={valueOF}
              aria-label="circle1.hero-labs.co"
              aria-describedby="basic-addon2"
              readonly
            />
            <div class="input-group-append">
            <CopyToClipboard text={valueOF}
          onCopy={() => setCopied("copied")}>
              <button class="btn btn-outline-secondary" type="button">
              {Copied}
              </button>
              </CopyToClipboard>
            </div>
          </div>
          <div className="section center">
            <div id="social-btn-container2" className="row mb-4">
              <div className="flex-col-center col mb-3 p-0">
              <WhatsappShareButton
            url={"https://hegemony.donftify.digital:3001/"}
            quote={"fb_share"}
            style={{width:"40px",height:"40px",borderRadius: "50%"}}
          >
                  <ion-icon class="blue" name="logo-whatsapp"></ion-icon>
                  </WhatsappShareButton>
              </div>
              
            
              <div className="flex-col-center col mb-3 p-0">
              <TwitterShareButton
            url={"https://hegemony.donftify.digital:3001/"}
            quote={"fb_share"}
            style={{width:"40px",height:"40px",borderRadius: "50%"}}
          >
                  <ion-icon class="blue" name="logo-twitter"></ion-icon>
                  </TwitterShareButton>
              </div>
              
              <div className="flex-col-center col mb-3 p-0">
              <FacebookShareButton
            url={"https://hegemony.donftify.digital:3001/"}
            quote={"fb_share"}
            style={{width:"40px",height:"40px",borderRadius: "50%"}}
          >
              <ion-icon class="blue" name="logo-facebook" ></ion-icon>
          </FacebookShareButton>
              </div>
              <div className="flex-col-center col mb-3 p-0">
               
                  <LinkedinShareButton
            url={"https://hegemony.donftify.digital:3001/"}
            quote={"fb_share"}
            style={{width:"40px",height:"40px",borderRadius: "50%"}}
          >
                  <ion-icon class="blue" name="logo-linkedin" ></ion-icon>
                  </LinkedinShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Echo);
