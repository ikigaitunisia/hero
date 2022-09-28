import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./CircleHome.css";
import Header from "../components/Header";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./MobilizerProfile.css";

function MobilizerProfile(props) {
  const index = props.location.state ? props.location.state.index : null;
  const history = useHistory();
  const [mobilizers, setMobilizers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(index !== null ? index : 0);
  const [currentCircle, setCurrentCircle] = useState({});
  const [load, setLoad] = useState(false);
  const { circlename } = useParams();
  const [socials, setSocials] = useState([]);
  const [Instagram, setInstagram] = useState("");
  const [Facebook, setFacebook] = useState("");
  const [Twitter, setTwitter] = useState("");
  const [TikTok, setTikTok] = useState("");
  const [subbscibed, setSubbscibed] = useState(0);
  const isSubscribed = async (email) => {
    let K = await axios.post(
      "https://hegemony.donftify.digital:8080/supporter/get-subscriptions",
      {
        email: email,
      }
    );

    console.log(K.data);
    return K.data;
  };
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
    console.log("circle");
    const user = JSON.parse(localStorage.getItem("user"));

    if (user != null) {
      isSubscribed(user.Email).then((response) => {
        setSubbscibed(response.length);
      });
    } else {
      setSubbscibed(0);
    }
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://hegemony.donftify.digital:8080/circle/members/" +
          circlename.replace(":", "")
      )
      .then((res) => {
        console.log(res.data);
        let k = res.data.sort((a, b) =>
          a.priority.low > b.priority.low ? 1 : -1
        );
        setCurrentCircle(k[currentIndex]);
        console.log(k[currentIndex]);
        setMobilizers(k);
        let socials = JSON.parse(k[currentIndex].Socials);
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
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        if (user != null) {
          isSubscribed(user.Email).then((response) => {
            setSubbscibed(response.length);
          });
        }
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
            backTo={
              subbscibed == 0 ? "/circle-feed" : "/circle-home" + circlename
            }
          />
          <div
            id="appCapsule"
            className="circle-feed-container mobilizer-profile"
          >
            <div className="section mt-2 mb-4 feed4">
              <div className="card bg-dark text-white round-container">
                <img
                  src={
                    currentCircle.imgProfil
                      ? "assets/img/" + currentCircle.imgProfil
                      : "assets/img/bg-card.png"
                  }
                  className="card-img overlay-img"
                  alt="image"
                />
                <div className="feed-content overlay-image card-img-overlay">
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
            {mobilizers.length > 1 && (
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
            )}
          </div>
        </>
      )}
    </>
  );
}

export default withRouter(MobilizerProfile);
