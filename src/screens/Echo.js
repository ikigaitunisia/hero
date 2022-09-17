import React, { useState, useEffect } from "react";
import { withRouter,useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import "./Echo.css";

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
        className="echo"
        style={{ minHeight: "100vh" }}
      >
        <div id="" className="echo-content section">
          <img src={"assets/img/echotransparent.png"} alt="logo" className="logo" />{" "}
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
                   <button
                  type="button"
                  className="btn btn-icon rounded btn-primary social-btn"
                >
                  <img class="blue" src="assets/img/svg/whatsapp.svg"/>
                </button>
                  </WhatsappShareButton>
              
              </div>
              
            
              <div className="flex-col-center col mb-3 p-0">
              <TwitterShareButton
            url={"https://hegemony.donftify.digital:3001/"}
            title={"fb_share"}
            style={{width:"40px",height:"40px",borderRadius: "50%"}}
          >
                  <div className="flex-col-center col mb-3 p-0">
                <button
                  type="button"
                  className="btn btn-icon rounded btn-primary social-btn"
                >
                  <img class="blue" src="assets/img/svg/twitter.svg"/>
                </button>
              </div>
                  </TwitterShareButton>
              </div>
              
              <div className="flex-col-center col mb-3 p-0">
              <FacebookShareButton
            url={"https://hegemony.donftify.digital:3001/"}
            title={"CampersTribe - World is yours to explore"}
            hashtag="#camperstribe"
            style={{width:"40px",height:"40px",borderRadius: "50%"}}
          >
             <button
                  type="button"
                  className="btn btn-icon rounded btn-primary social-btn"
                >
                  <img class="blue" src="assets/img/svg/facebook.svg"/>
                </button>
          </FacebookShareButton>
              </div>
              <div className="flex-col-center col mb-3 p-0">
               
                  <LinkedinShareButton
            url={"https://hegemony.donftify.digital:3001/"}
            title={"join hero"}
            summary={"hello my friend"}
            source={"linkedin"}
            style={{width:"40px",height:"40px",borderRadius: "50%"}}
          >
                  <button
                  type="button"
                  className="btn btn-icon rounded btn-primary social-btn"
                >
                  <img class="blue" src="assets/img/svg/linkedin.svg"/>
                </button>
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
