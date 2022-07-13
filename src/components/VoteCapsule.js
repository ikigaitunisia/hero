import React, { useEffect, useReducer, useState } from "react";
import "./VoteCapsule.css";
import axios from "axios";
function VoteCapsule(props) {
  const [proposal, setProposal] = useState([]);
  const [nbVotes, setnbVotes] = useState(0);
  const [yesPercent, setyesPercent] = useState(0);
  const [noPercent, setnoPercent] = useState(0);
  const [voted, setVoted] = useState(false);
  const [PercentageYes, setPercentageYes] = useState(0);
  const [PercentageNo, setPercentageNo] = useState(0);
  const [priv, setPriv] = useState("");
  const [countdownDate, setCountdownDate] = useState(
    new Date("07/01/2022").getTime()
  );
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => updateCountdown(), 1000);
  }, []);

  const updateCountdown = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      // For visual appeal, add a zero to each number that's only one digit
      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };
  const voteOnproposal = (_id, vote) => {
    setVoted(true);

    axios
      .post("https://hegemony.donftify.digital:8080/VoteProp", {
        privKey: priv,
        id: _id,
        vote: vote,
      })
      .then(function (response) {
        console.log(response.data);

        setVoted(true);
      })
      .catch(function (error) {
        //handle error here
        console.log(error);
      });
  };
  const update = (_id) => {
    console.log("********");
    console.log(_id);
    axios
      .post("https://hegemony.donftify.digital:8080/GetProposal", {
        id: _id,
      })
      .then(function (response) {
        console.log(response.data);

        setPercentageYes(response.data.Yes);
        setPercentageNo(response.data.No);
      })
      .catch(function (error) {
        //handle error here
        console.log(error);
      });
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    setPriv(user.wallet.autre.privateKey);
    axios
      .post("https://hegemony.donftify.digital:8080/GetIndexProp")
      .then(function (response) {
        console.log(response.data);
        setnbVotes(parseInt(response.data));

        for (var i = 1; i < response.data; i++) {
          axios
            .post("https://hegemony.donftify.digital:8080/GetProposal", {
              id: i,
            })
            .then(function (response) {
              console.log(response.data);

              setProposal([...proposal, response.data]);
            })
            .catch(function (error) {
              //handle error here
              console.log(error);
            });
        }
      })
      .catch(function (error) {
        //handle error here
        console.log(error);
      });
  }, []);
  return (
    <div id="appCapsule" className="bg-g">
      <div className="section custom-width center-div-2 white-text mb-4 mt-4">
        <h2 className="white-text text-title fw-7">
          You have the power to vote on the future of HERO.
        </h2>
        <p>
          As a HERO Coin holder you have a say in how the community moves
          forward.
        </p>
        <a
          href="https://herolabsco.notion.site/Discover-how-voting-works-2ed93de2afd34131b4603f693773c696"
          className="white-text underline"
          target="_blank"
        >
          Discover how voting works.
        </a>
      </div>
      {proposal.map((prop, i) => (
        <>
          <div className="section center-div-2 mb-4">
            <div className="wallet-card">
              <p className="fw-bold black-text">{prop.Description}</p>
            </div>
          </div>
          <div className="section mb-4 center-div-2">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 flex-center mb-2">
                <button
                  type="button"
                  className="btn btn-icon rounded me-1 btn-round-black"
                  onClick={() => {
                    voteOnproposal(i + 1, true);
                  }}
                >
                  <ion-icon name="close" class="flex white-text"></ion-icon>
                </button>
                {voted && (
                  <div>
                    <span className="badge badge-dark custom-badge br-30">
                      {"20%"}
                    </span>
                  </div>
                )}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 flex-center mb-2">
                <button
                  type="button"
                  className="btn btn-icon rounded me-1 btn-round-white"
                  onClick={() => {
                    voteOnproposal(i + 1, true);
                  }}
                >
                  <ion-icon
                    name="checkmark-outline"
                    class="flex black-text"
                  ></ion-icon>
                </button>
                {voted && (
                  <div>
                    <span className="badge badge-dark custom-badge br-30">
                      {"80%"}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="section center-div-2 mb-4 pb-4">
            <h5 className="white-text mb-2 underline">Voting ends in:</h5>
            <div id="counter" className="row wallet-card custom-padding mt-3">
              <div className="col-3 center-content">
                <h1 className="small-font">{state.days || "0"}</h1>
                <span className="xsmall-font">DAYS</span>
              </div>
              <div className="col-3 center-content">
                <h1 className="small-font">{state.hours || "00"}</h1>
                <span className="xsmall-font">HOURS</span>
              </div>

              <div className="col-3 center-content">
                <h1 className="small-font">{state.minutes || "00"}</h1>
                <span className="xsmall-font">MINUTES</span>
              </div>

              <div className="col-3 center-content">
                <h1 className="small-font">{state.seconds || "00"}</h1>
                <span className="xsmall-font">SECONDS</span>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default VoteCapsule;
