import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";

import axios from "axios";
import "./FeedCapsule.css";

function FeedCapsule(props) {
  const width = window.innerWidth;
  const history = useHistory();
  const [Info, setInfo] = useState({});
  const [Index, setIndex] = useState(0);
  const [Activist, setActivist] = useState([]);
  useEffect(() => {
    axios
      .post("https://hegemony.donftify.digital:8080/GetIndexActiv")
      .then(function (response) {
        console.log(response.data);
        setIndex(response.data.index);
      })
      .catch(function (error) {
        //handle error here
        console.log(error);
      });
    for (var i = 0; i <= Index; i++) {
      axios
        .post("https://hegemony.donftify.digital:8080/GetActivistByID", {
          ID: i,
        })
        .then(function (response) {
          console.log(response.data);

          setActivist([...Activist, response.data]);
        })
        .catch(function (error) {
          //handle error here
          console.log(error);
        });
    }
  }, []);

  return (
    <div id="appCapsule" className="bg-g-1">
      <div className="section mt-4">
        <h4 className="blue-text">
          Browse the first HERO Mobilizers with a verified track record on
          climate action.
        </h4>
        <a href="">Discover how HERO Mobilizers are verified</a>
      </div>
      <div className="section mt-4 mb-2">
        <div className="row mt-2">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-2">
            <div
              className="card bg-dark text-white"
              onClick={() => history.push("/activistprofile", Activist)}
            >
              <img
                className="card-img"
                src="assets/img/mobilizer1.png"
                alt="Card image"
              />
              <div className="card-img-overlay center-column-content">
                <div className="custom-font">
                  <h1 className="white-text">Anuna de Wever</h1>
                  <span className="white-text">Belgium</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-2">
            <div
              className="card bg-dark text-white"
              onClick={() => history.push("/activistprofile", Activist)}
            >
              <img
                className="card-img"
                src="assets/img/bg1.png"
                alt="Card image"
              />
              <div className="card-img-overlay center-column-content">
                <div className="custom-font">
                  <h1 className="white-text">Anuna de Wever</h1>
                  <span className="white-text">Belgium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedCapsule;
