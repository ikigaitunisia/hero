import React, { useEffect, useState } from "react";
import { useHistory,useParams } from "react-router-dom";
import "./CircleHome.css";
import Header from "../components/Header";
import { withRouter } from "react-router-dom";
import axios from "axios"
import "./MobilizerProfile.css";

function MobilizerProfile(props) {
  const history = useHistory();

  /*const circles = [
    {
      id: "1",
      name: "Anuna de Wever",
      fullname: "@anunadewever",
      address: "Brussels, Belgium",
      lead: "Circle Lead",
      description:
        "This is a brief description of the mobilizer’s work, organizations and projects.",
    },
    {
      id: "2",
      name: "Thomas Maddens",
      fullname: "@thomasmaddens",
      address: "Brussels, Belgium",
      lead: "Circle Campaigner",
      description:
        "This is a brief description of the mobilizer’s work, organizations and projects.",
    },
    {
      id: "3",
      name: "Mobilizer Three",
      fullname: "@mobilizerthree",
      address: "Circle Fundraiser",
      lead: "Circle Lead",
      description:
        "This is a brief description of the mobilizer’s work, organizations and projects.",
    },
    {
      id: "4",
      name: "Mobilizer Four",
      fullname: "@mobilizerfour",
      address: "Brussels, Belgium",
      lead: "Circle Organizer",
      description:
        "This is a brief description of the mobilizer’s work, organizations and projects.",
    },
    {
      id: "5",
      name: "Mobilizer Five",
      fullname: "@mobilizerfive",
      address: "City, Country",
      lead: "Circle Role",
      description:
        "This is a brief description of the mobilizer’s work, organizations and projects.",
    },
  ];
  */
  const [mobilizers,setMobilizers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCircle, setCurrentCircle] = useState({});
  const [load,setLoad] = useState(false);
  const { circlename } = useParams();
  const [socials,setSocials] = useState([]);
  const [Instagram,setInstagram] = useState("");
  const [Facebook,setFacebook] = useState("");
  const [Twitter,setTwitter] = useState("");
  const [TikTok,setTikTok] = useState("");
  const goToNextCircle = () => {
    if (currentIndex === mobilizers.length - 1) {
      setCurrentIndex(0);
      setCurrentCircle(mobilizers[0]);
      
      return;
    }
    setCurrentIndex(currentIndex + 1);
    let socials = JSON.parse(mobilizers[currentIndex].Socials);
        
        if ('Instagram' in socials)
        {
          setInstagram(socials.Instagram);
        }
        if("Twitter" in socials)
        {
          setTwitter(socials.Twitter);
        }
        if("Facebook" in socials)
        {
          setFacebook(socials.Facebook);
        }
        if("TikTok" in socials)
        {
          setTikTok(socials.TikTok)
        }
  };

  useEffect(() => {
    axios.get("https://hegemony.donftify.digital:8080/circle/members/"+circlename.replace(":",""))
      .then((res) => {
        console.log(res.data);
        setCurrentCircle(res.data[currentIndex]);

        setMobilizers(res.data);
        console.log(res.data.Socials)
        let socials = JSON.parse(res.data[currentIndex].Socials);
        
        if ('Instagram' in socials)
        {
          setInstagram(socials.Instagram);
        }
        if("Twitter" in socials)
        {
          setTwitter(socials.Twitter);
        }
        if("Facebook" in socials)
        {
          setFacebook(socials.Facebook);
        }
        if("TikTok" in socials)
        {
          setTikTok(socials.TikTok)
        }
          setLoad(true);
        });
  }, [currentIndex]);
  return (
    <>
    {load &&
    <>
      <Header
        showHeroLogo
        showBackBtn
        showMenuBtn
        whiteMode
        transparent
        backTo={"/circle-home"}
      />
      <div id="appCapsule" className="mobilizer-profile">
        <div class="section mt-2 mb-4">
          <div class="card bg-dark text-white">
            <img
              src="assets/img/bg-card.png"
              class="card-img overlay-img"
              alt="image"
            />
            <div class="card-img-overlay">
              <h2 className="white">{currentCircle.name}</h2>
              <div className="flex-center">
                <span>{currentCircle.fullname}</span>
                <ion-icon
                  src="assets/img/svg/icon15.svg"
                  class="ml-1"
                ></ion-icon>
              </div>
              <div className="mt-3 mb-2 flex-center">
                <ion-icon
                  src="assets/img/svg/icon13.svg"
                  class="me-1"
                ></ion-icon>
                <span>{currentCircle.address}</span>
              </div>
              <div className="mb-3 flex-center">
                <ion-icon
                  src="assets/img/svg/icon14.svg"
                  class="me-1"
                ></ion-icon>
                <span>{currentCircle.lead}</span>
              </div>
              <p>{currentCircle.description}</p>
              
              <div className="flex-center flex-row mb-4">
              
                      <>
                      {TikTok!= "" &&
                <button
                  type="button"
                  className="btn btn-icon rounded btn-primary social-btn2 me-1"
                  onClick={() =>  window.open(TikTok, '_blank', 'noopener,noreferrer')}
                >
                  <ion-icon src="assets/img/svg/tiktok2.svg"></ion-icon>
                </button>
                }
                {Instagram != "" &&
                <button
                  type="button"
                  className="btn btn-icon rounded btn-primary social-btn2 me-1"
                  onClick={() =>  window.open(Instagram, '_blank', 'noopener,noreferrer')}
                >
                  <ion-icon class="blue" name="logo-instagram"></ion-icon>
                </button>
}     
{Twitter != "" &&
                <button
                  type="button"
                  className="btn btn-icon rounded btn-primary social-btn2"
                  onClick={() =>  window.open(Twitter, '_blank', 'noopener,noreferrer')}
                >
                  <ion-icon class="blue" name="logo-twitter"></ion-icon>
                </button>
}
                </>
               
                
              </div>
            </div>
          </div>
        </div>
        <div className="circle-feed-bottom mb-4">
     
          <div style={{ display: "flex" }}>
          {mobilizers.map((item, i) => {
                    return (

            <div
              className={currentIndex === i ? "active-dot me-1" : "dot me-1"}
              onClick={goToNextCircle}
            ></div>
                    )
            })
            }
          </div>
          {
            <button
              type="button"
              className="btn btn-icon rounded btn-primary social-btn"
              onClick={goToNextCircle}
            >
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          }
        </div>
      </div>
      </>
    }
    </>
  );
}

export default withRouter(MobilizerProfile);
