import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import "./ActivistProfileCapsule.css";
import ActivistCampaignsModal from "./modals/ActivistCampaignsModal";
import ActivistVictoriesModal from "./modals/ActivistVictoriesModal";
//import CardTransactionModal from "./modals/CardTransactionModal";

function ActivistProfileCapsule(props) {
  const A = useLocation();
  const history = useHistory();
  const [load, setLoad] = useState({});
  const [showMobilizerCampaignsModal, setShowMobilizerCampaignsModal] =
    useState(false);
  const [showMobilizerVictoriesModal, setShowMobilizerVictoriesModal] =
    useState(false);
  const [showCardTransactionModal, setShowCardTransactionModal] =
    useState(false);
  
  useEffect(() => {
    console.log(A);
  }, []);
  const support = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user == null) {
      history.push("/Login");
    } else {
      //setShowCardTransactionModal(true);
      history.push("/cardtransaction");
    }
  };
  const goNext  = () => {
     if (A.state.index+1 == A.state.indexMax)
      {    console.log(A.state.index+1);

        axios
            .post("https://hegemony.donftify.digital:8080/GetActivistByID", {
              ID: 1,
            })
            .then(function (response) {
              console.log(response.data);
              history.push("/activistprofile", {...response.data,indexMax:A.state.indexMax});
              window.location.reload(false);
            })
            .catch(function (error) {
              //handle error here
              console.log(error);
            });
      }
      else
      {
        axios
        .post("https://hegemony.donftify.digital:8080/GetActivistByID", {
          ID: A.state.index+1 ,
        })
        .then(function (response) {
          console.log(response.data);
          history.push("/activistprofile", {...response.data,indexMax:A.state.indexMax});
          window.location.reload(false);
        })
        .catch(function (error) {
          //handle error here
          console.log(error);
        });
      }

  }
  const goBack = () => {
    if (A.state.index-1 == 0)
     {    

       axios
           .post("https://hegemony.donftify.digital:8080/GetActivistByID", {
             ID: A.state.indexMax-1,
           })
           .then(function (response) {
             console.log(response.data);
             history.push("/activistprofile", {...response.data,indexMax:A.state.indexMax});
             window.location.reload(false);
           })
           .catch(function (error) {
             //handle error here
             console.log(error);
           });
     }
     else
     {
       axios
       .post("https://hegemony.donftify.digital:8080/GetActivistByID", {
         ID: A.state.index-1 ,
       })
       .then(function (response) {
         console.log(response.data);
         history.push("/activistprofile", {...response.data,indexMax:A.state.indexMax});
         window.location.reload(false);
       })
       .catch(function (error) {
         //handle error here
         console.log(error);
       });
     }

 }
  return (
    <>
      <div id="appCapsule" className="bg-g-1">
        <div className="section full">
          <video id="background-video" autoPlay loop muted>
            <source src={A.state.autre.Video} type="video/mp4" />
          </video>
        </div>
        <div className="section mt-3 text-center center-div">
          <div className="avatar-section mb-2">
            <a href="#">
              <img
                src={"assets/img/" + A.state.autre.Photo}
                alt="avatar"
                className="imaged w100 rounded"
              />
            </a>
          </div>
          <h3 className="custom-font blue-text" style={{paddingBottom:0, margin:0}}>
            {A.state.Nom + " " + A.state.Prenom}{" "}
            <ion-icon
              src="assets/img/svg/heroblue.svg"
              style={{ width: "8.4px", marginLeft: "3px" }}
            ></ion-icon>
          </h3>
          <span className="blue-text" style={{fontStyle: "italic"}}>{A.state.autre.Pays}</span>
          <div className="lead black-text pt-3 pb-3">
            {A.state.autre.Bio + " "}
          </div>
          <h5>
            <a href={A.state.autre.twitter} className="blue-text title-font">
              {"@" + A.state.Nom}
            </a>
          </h5>
        </div>
        <hr
          data-content="AND"
          className="hr-text mt-4 mb-4"
          style={{ width: "70%", margin: "0 auto", background: "#a9abad" }}
        ></hr>
        <div className="section">
          <h5 className="blue-text">Endorsed by</h5>
          <div className="lead black-text pb-2">{A.state.autre.Endorser}</div>
        </div>
        <hr
          data-content="AND"
          className="hr-text mt-4 mb-4"
          style={{ width: "70%", margin: "0 auto", background: "#a9abad" }}
        ></hr>
        <div className="section">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 flex-center mb-2">
              <ion-icon
                class="md-icon"
                src="assets/img/svg/voteBlue.svg"
                style={{ marginRight: "5px" }}
                onClick={() => setShowMobilizerCampaignsModal(true)}
              ></ion-icon>
              <strong className="blue-text">Campaigns</strong>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 flex-center  mb-2">
              <ion-icon
                class="md-icon"
                src="assets/img/svg/HeroCoin2.svg"
                style={{ marginRight: "5px" }}
                onClick={() => setShowMobilizerVictoriesModal(true)}
              ></ion-icon>
              <strong className="blue-text">Victories</strong>
            </div>
          </div>
        </div>
        <ActivistCampaignsModal
          show={showMobilizerCampaignsModal}
          activist={A.state}
          onClose={() => setShowMobilizerCampaignsModal(false)}
        />
        <ActivistVictoriesModal
          show={showMobilizerVictoriesModal}
          activist={A.state}
          onClose={() => setShowMobilizerVictoriesModal(false)}
        />
        <hr
          data-content="AND"
          className="hr-text mt-4 mb-4"
          style={{ width: "70%", margin: "0 auto", background: "#a9abad" }}
        ></hr>
        <div className="section mb-4">
          <div className="title blue-text title-font">
            Fund a 1 year Basic Income of
          </div>
          <div className="value blue-text title-font">
            {"€5000"}
          </div>

          <div className="center-div mt-3 ">
            <div
              className="progress mb-2"
              style={{
                width: "200px",
                margin: "0 auto",
                backgroundColor: "#dcdce9",
              }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "55%", background: "blue", height: "100%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div
              className="value"
              style={{ color: "blue", textAlign: "center" }}
            >
              <b className="title-font">€ 500</b>
              {" of € 5000"}
            </div>
          </div>
        </div>
        <div className="section pb-4">
          <button
            id="supportMobBtn"
            type="button"
            className="btn btn-primary btn-lg rounded font-size-btn"
            onClick={() => support()}
          >
             {"Support "+A.state.Nom}
          </button>
        </div>
      </div>
      {/*<CardTransactionModal
        show={showCardTransactionModal}
        onClose={() => setShowCardTransactionModal(false)}
            />*/}
      <div className="appBottomMenu" style={{ padding: "0 20px" }}>
        <a  className="item" onClick={() => goBack()}>
          <div
            className="col"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <ion-icon
              src="assets/img/svg/previous.svg"
              style={{ margin: 0 }}
            ></ion-icon>

            <strong
              style={{
                color: "blue",
                marginLeft: "10px",
                fontSize: "14px",
                marginTop: 0,
              }}
              className="title-font"
            >
              Previous mobilizer
            </strong>
          </div>
        </a>

        <a  className="item" onClick={() => goNext()}>
          <div
            className="col"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <strong
              style={{
                color: "blue",
                marginRight: "10px",
                fontSize: "14px",
                marginTop: 0,
              }}
              className="title-font"
            >
              Next mobilizer
            </strong>
            <ion-icon
              src="assets/img/svg/next.svg"
              style={{ margin: 0 }}
            ></ion-icon>
          </div>
        </a>
      </div>
    </>
  );
}

export default ActivistProfileCapsule;
