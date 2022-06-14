import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import "./FeedCapsule.css";

function FeedCapsule(props) {
  const history = useHistory();
  const [Index, setIndex] = useState(0);
  const [Activist, setActivist] = useState([]);
  useEffect(() => {
    axios
      .post("https://hegemony.donftify.digital:8080/GetIndexActiv")
      .then(function (response) {
        console.log(response.data);
        setIndex(response.data.index);
        for (var i = 1; i <= response.data.index; i++) {
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
      })
      .catch(function (error) {
        //handle error here
        console.log(error);
      });
  }, []);

  return (
    <div id="appCapsule" className="bg-g-1" style={{ minHeight: "100vh" }}>
      <div className="section mt-4 pt-4 center-div">
        <h5 className="blue-text title-font">
          Browse the first HERO Mobilizers with a verified track record on
          climate action.
        </h5>
        <h6 className="mt-4 pt-2 title-font">
          <a
            href=""
            style={{ textDecoration: "underline" }}
            className="blue-text"
          >
            Discover how HERO Mobilizers are verified
            <ion-icon
              src="assets/img/svg/heroblue.svg"
              style={{ width: "8.4px", marginLeft: "3px" }}
            ></ion-icon>
          </a>
        </h6>
      </div>
      <div className="section mt-4 pt-2 mb-2">
        <div className="row mt-2 pe-3 pl-3">
          {Activist.map((activist) => (
            <>
              
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                <div
                  className="card bg-dark text-white"
                  onClick={() => history.push("/activistprofile", activist)}
                  style={{ borderRadius: "20px" }}
                >
                  <img
                    className="card-img"
                    src={activist.autre.Photo}
                    alt="Card image"
                  />
                  <div
                    className="card-img-overlay center-column-content"
                    style={{ borderRadius: "20px" }}
                  >
                    <div>
                      <h1 className="white-text title-font">
                        {activist.Nom+" "+activist.Prenom}
                        <ion-icon
                          src={"assets/img/svg/hero.svg"}
                          style={{ width: "10px" }}
                        ></ion-icon>
                      </h1>
                      <span className="white-text">{activist.autre.Pays}</span>
                    </div>
                  </div>
                </div>
              </div>
             
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeedCapsule;
