import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./CircleHome.css";
import Header from "../components/Header";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./MobilizerProfile.css";

function MobilizerProfile(props) {
  const history = useHistory();
  const [mobilizers, setMobilizers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCircle, setCurrentCircle] = useState({});
  const [load, setLoad] = useState(false);
  const { circlename } = useParams();
  const [socials, setSocials] = useState([]);
  const [Instagram, setInstagram] = useState("");
  const [Facebook, setFacebook] = useState("");
  const [Twitter, setTwitter] = useState("");
  const [TikTok, setTikTok] = useState("");
  const goToNextCircle = () => {
    if (currentIndex === mobilizers.length - 1) {
      setCurrentIndex(0);
      setCurrentCircle(mobilizers[0]);

      return;
    }
    setCurrentIndex(currentIndex + 1);
    let socials = JSON.parse(mobilizers[currentIndex + 1].Socials);

    if ("Instagram" in socials) {
      setInstagram(socials.Instagram);
    }
    if ("Twitter" in socials) {
      setTwitter(socials.Twitter);
    }
    if ("Facebook" in socials) {
      setFacebook(socials.Facebook);
    }
    if ("TikTok" in socials) {
      setTikTok(socials.TikTok);
    }
  };

  useEffect(() => {
    axios
      .get(
        "https://hegemony.donftify.digital:8080/circle/members/" +
          circlename.replace(":", "")
      )
      .then((res) => {
        console.log(res.data);
        setCurrentCircle(res.data[currentIndex]);
        console.log(res.data[currentIndex]);
        setMobilizers(res.data);
        let socials = res.data[currentIndex] ? JSON.parse(res.data[currentIndex].Socials): [];
        if ("Instagram" in socials) {
          setInstagram(socials.Instagram);
        }
        if ("Twitter" in socials) {
          setTwitter(socials.Twitter);
        }
        if ("Facebook" in socials) {
          setFacebook(socials.Facebook);
        }
        if ("TikTok" in socials) {
          setTikTok(socials.TikTok);
        }
        setLoad(true);
      });
  }, [currentIndex]);
  return (
    <>
      {load && (
        <>
          <Header
            showHeroLogo
            showBackBtn
            showMenuBtn
            whiteMode
            transparent
            backTo={"/circle-home"}
          />
          <div id="appCapsule" className="mobilizer-profile ">
            <div className="section mt-2 mb-4 feed2">
              <div className="card bg-dark text-white">
                <img
                  src={currentCircle.imgProfil ? "assets/img/"+ currentCircle.imgProfil : "assets/img/bg-card.png"}
                  className="card-img overlay-img"
                  alt="image"
                />
                <div className="card-img-overlay">
                  {currentCircle.Name && (
                    <h2 className="white">{currentCircle.Name}</h2>
                  )}
                  {currentCircle.accountId && (
                    <div className="flex-center">
                      <span>{currentCircle.accountId}</span>
                      <ion-icon
                        src="assets/img/svg/icon15.svg"
                        class="ml-1"
                      ></ion-icon>
                    </div>
                  )}
                  {currentCircle.address && (
                    <div className="mt-3 mb-2 flex-center">
                      <ion-icon
                        src="assets/img/svg/icon13.svg"
                        class="me-1"
                      ></ion-icon>
                      <span>{currentCircle.address}</span>
                    </div>
                  )}
                  {currentCircle.role && (
                    <div className="mb-3 flex-center">
                      <ion-icon
                        src="assets/img/svg/icon14.svg"
                        class="me-1"
                      ></ion-icon>
                      <span>{currentCircle.role}</span>
                    </div>
                  )}
                  {currentCircle.description && (
                    <p>{currentCircle.description}</p>
                  )}

                  <div className="flex-center flex-row mb-4">
                    <>
                      {TikTok != "" && (
                        <button
                          type="button"
                          className="btn btn-icon rounded btn-primary social-btn2 me-1"
                          onClick={() =>
                            window.open(TikTok, "_blank", "noopener,noreferrer")
                          }
                        >
                          <ion-icon src="assets/img/svg/tiktok2.svg"></ion-icon>
                        </button>
                      )}
                      {Instagram != "" && (
                        <button
                          type="button"
                          className="btn btn-icon rounded btn-primary social-btn2 me-1"
                          onClick={() =>
                            window.open(
                              Instagram,
                              "_blank",
                              "noopener,noreferrer"
                            )
                          }
                        >
                          <ion-icon
                            class="blue"
                            name="logo-instagram"
                          ></ion-icon>
                        </button>
                      )}
                      {Twitter != "" && (
                        <button
                          type="button"
                          className="btn btn-icon rounded btn-primary social-btn2"
                          onClick={() =>
                            window.open(
                              Twitter,
                              "_blank",
                              "noopener,noreferrer"
                            )
                          }
                        >
                          <ion-icon class="blue" name="logo-twitter"></ion-icon>
                        </button>
                      )}
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
                      className={
                        currentIndex === i ? "active-dot me-1" : "dot me-1"
                      }
                      key={i}
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
        </>
      )}
    </>
  );
}

export default withRouter(MobilizerProfile);
