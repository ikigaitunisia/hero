import React, { useEffect, useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import Header from "../components/Header";
import "./CircleFeed.css";
import axios from "axios";
import ClubSelectMembershipModal from "../components/modals/ClubSelectMembershipModal";

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
  const [currentCircle, setCurrentCircle] = useState(circles[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showClubSelectMembershipModal, setShowClubSelectMembershipModal] =
    useState(false);

  const goToNextCircle = () => {
    if (currentIndex === circles.length - 1) {
      setCurrentIndex(0);
      setCurrentCircle(circles[0]);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };
  const playVideo = (id) => {
    var v = document.getElementById(id);
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  };
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

        setCircles(A);
        setLoad(true);
        setCurrentCircle(A[currentIndex]);
      });
    console.log(circles);

    console.log(load);
  }, [currentIndex]);
  return (
    <>
      {load && (
        <>
          <Header whiteMode showHeroLogo transparent showBackBtn />

          <div id="appCapsule" className="circle-feed-container">
            <div className="feed2" style={{ minHeight: "90vh!important" }}>
              <video playsInline autoPlay id="1">
                <source
                  src={"assets/videos/" + currentCircle.video}
                  type="video/mp4"
                />
              </video>
              <div className="feed-content">
                <button
                  type="button"
                  className="btn btn-primary rounded play-btn"
                  onClick={() => playVideo(1)}
                >
                  <ion-icon name="play" class="m-0"></ion-icon>
                </button>

                <div className="bottom mt-4 flex-col-start">
                  <h3 className="white mb-3">{currentCircle.name}</h3>
                  <p className="white  mb-3">{currentCircle.description}</p>
                  <button
                    id="whiteBtn"
                    type="button"
                    className="btn btn-primary rounded font-size-btn mb-4"
                    onClick={() => setShowClubSelectMembershipModal(true)}
                  >
                    <ion-icon src="assets/img/svg/icon2.svg"></ion-icon>
                    Fund this HERO Circle
                  </button>
                  <a
                    href=""
                    onClick={() =>
                      history.push(
                        "/circle-feed-details:" + currentCircle.name,
                        { circle: circles, index: currentIndex }
                      )
                    }
                    className="white"
                  >
                    Learn more about this circle
                  </a>
                </div>
              </div>
            </div>
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
          </div>
          <ClubSelectMembershipModal
            show={showClubSelectMembershipModal}
            onClose={() => setShowClubSelectMembershipModal(false)}
            circle={currentCircle.name}
          />
        </>
      )}
    </>
  );
}

export default withRouter(CircleFeed);
