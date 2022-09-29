import React, { useEffect, useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import Header from "../components/Header";
import "./CircleFeed.css";
import axios from "axios";
import ClubSelectMembershipModal from "../components/modals/ClubSelectMembershipModal";
import Menu from "../components/Menu";

function CircleFeed(props) {
  const history = useHistory();
  const [circles, setCircles] = useState([]);
  const [load, setLoad] = useState(false);
  /*const circles = [
    {
      id: "1",
      name: "HERO FIRST CIRCLE",
      description:
        "This is a brief description of HERO First Circle, working together towards pushing forward a climate policy.",
      link: "",
      video: "short-video-for-test.mp4",
    },
    {
      id: "2",
      name: "HERO SECOND CIRCLE",
      description:
        "This is a brief description of HERO Second Circle, working together towards pushing forward a climate policy.",
      link: "",
      video: "short-video-for-test.mp4",
    },
    {
      id: "3",
      name: "HERO YOUTHTOPIA CIRCLE",
      description:
        "This is a brief description of HERO Youthtopia Circle, working together towards pushing forward a climate policy.",
      link: "",
      video: "short-video-for-test.mp4",
    },
    {
      id: "4",
      name: "HERO FOURTH CIRCLE",
      description:
        "This is a brief description of HERO Fourth Circle, working together towards pushing forward a climate policy.",
      link: "",
      video: "short-video-for-test.mp4",
    },
    {
      id: "5",
      name: "HERO FIFTH CIRCLE",
      description:
        "This is a brief description of HERO Fifth Circle, working together towards pushing forward a climate policy.",
      link: "",
      video: "short-video-for-test.mp4",
    },
  ];
*/
  const [currentCircle, setCurrentCircle] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [test, setTest] = useState(0);
  const [showClubSelectMembershipModal, setShowClubSelectMembershipModal] =
    useState(false);
  const [subscribed,setSubscribed] = useState(false); 
  const user = JSON.parse(localStorage.getItem("user"));

  const goToNextCircle = () => {
    if (currentIndex === circles.length - 1) {
      isSubscribed(0);

      setCurrentIndex(0);
      setCurrentCircle(circles[0]);
      return;
    }

    setCurrentIndex(currentIndex + 1);

    setCurrentCircle(circles[currentIndex + 1]);
    isSubscribed(currentIndex+1);

  };
  const playVideo = (id) => {
    var v = document.getElementById(id);
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  };
  const isSubscribed = (index) => {
    console.log(circles[index]);
    if (user != null)
    {
      let circle = circles[index];
    axios
    .post("https://hegemony.donftify.digital:8080/supporter/isSubscribed", {
      
        email : user.Email ,
        circlename :circle.name
        
    })
    .then(function (response) {
      if (response.data.subscribed == 1)
      {
        setSubscribed(true);
      }
      else
      {
        setSubscribed(false);
      }

     
    })
    .catch(function (error) {
      //handle error here
      console.log(error);
    });
  }
  }
  useEffect(() => {
    axios
      .post("https://hegemony.donftify.digital:8080/circle/all", {
        tags: [],
        locations: [],
      })
      .then((res) => {
        console.log(res.data);
        let A = [];
        res.data.map((item, i) => {
          A.push({
            id: i.toString(),
            name: item.Name,
            Description: item.Description,
            video: "short-video-for-test.mp4",
          });
        });
       
        setCircles(prevState => {
          return (
            
            [...A]
          );
        });
        if (A.toString() !== circles.toString())
        {
        setTest(test+1);
        }
        setLoad(true);
        setCurrentCircle(A[currentIndex]);
        console.log(circles);
      
        
        if(currentCircle !== null)
        {
        isSubscribed(currentIndex);
        }
      });

  }, [test]);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {load && (
        <>
          <Header whiteMode showHeroLogo transparent showBackBtn showMenuBtn/>

          <div id="appCapsule" className="circle-feed-container">
            <div className="feed4" style={{ minHeight: "90vh!important" }}>
              {/*<video playsInline autoPlay id="1">
                <source
                  src={"assets/videos/" + currentCircle.video}
                  type="video/mp4"
                />
      </video>*/}
              <img
             src="assets/img/bg4.png"
             alt="image"
             style={{    width: "100%"}}
           />
              <div className="feed-content overlay-image">

                <div className="bottom mt-4 flex-col-start">
                  <h3 className="white mb-1">{currentCircle.name.replace("Hero","Hero".toUpperCase())}</h3>
                  <p className="white  mb-3">{currentCircle.Description}</p>
                  <button
                    id="whiteBtn"
                    type="button"
                    className="btn btn-primary rounded font-size-btn mb-2"
                    onClick={() => !subscribed  ? setShowClubSelectMembershipModal(true) : history.push("/circle-home:"+currentCircle.name)}
                  >
                    <ion-icon src="assets/img/svg/icon2.svg"></ion-icon>
                    Fund this HERO Circle
                  </button>
                  <a
                    href=""
                    onClick={() =>
                      history.push(
                        "/circle-feed-details:" + currentCircle.name,
                        { circle: circles, index: currentIndex ,circlename:currentCircle.name}
                      )
                    }
                    className="white mt-2 mb-2 ml-2"
                  >
                    Learn more about this circle
                  </a>
                </div>
              </div>
            </div>
            {circles.length > 1 &&
            <div className="circle-feed-bottom mb-4">
              <div style={{ display: "flex" }}>
                {circles.map((item, i) => {
                  return (
                    <div
                      className={
                        currentIndex === i ? "active-dot me-1" : "dot me-1"
                      }
                      onClick={goToNextCircle}
                    ></div>
                  );
                })}
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
}           
          </div>
            
          <ClubSelectMembershipModal
            show={showClubSelectMembershipModal}
            onClose={() => setShowClubSelectMembershipModal(false)}
            circle={currentCircle.name}
          />
          <Menu show={showMenu} onClose={() => setShowMenu(false)} />
        </>
      )} 
    </>
  );
}

export default withRouter(CircleFeed);
