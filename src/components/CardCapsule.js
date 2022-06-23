import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import axios from "axios";
import "./CardCapsule.css";
import ExchangeModal from "./modals/ExchangeModal";
import ActivistCampaignsModal from "./modals/ActivistCampaignsModal";
import ActivistVictoriesModal from "./modals/ActivistVictoriesModal";

function CardCapsule(props) {
  const [showExchangeModal, setShowExchangeModal] = useState(false);
  const [balance, setBalance] = useState(0);
  const [showMobilizerCampaignsModal, setShowMobilizerCampaignsModal] =
    useState(false);
  const [showMobilizerVictoriesModal, setShowMobilizerVictoriesModal] =
    useState(false);

  useEffect(() => {
    async function fetchBalance() {
      const user = JSON.parse(localStorage.getItem("user"));
      const wallet = user.wallet.address;
      axios
        .post("https://hegemony.donftify.digital:8080/balanceOf", {
          user: wallet,
          Token: "0x606EB1DA7271779Ab46C492b1e2615232C2E13d7",
        })
        .then(function (response) {
          setBalance(response.data.res);
        })
        .catch(function (error) {
          //handle error here
          console.log(error);
        });
    }
    fetchBalance();

    let OrderID = (new URLSearchParams(window.location.search)).get("orderId")
    let fiatAmount = (new URLSearchParams(window.location.search)).get("fiatAmount")
    let arrA = (new URLSearchParams(window.location.search)).get("ArrAct")
    let ArrAmnt = (new URLSearchParams(window.location.search)).get("ArrAmnt")

    console.log(OrderID,fiatAmount);
    console.log(arrA);
    console.log(ArrAmnt);


  }, []);
  return (
    <div id="appCapsule" className="bg-g-1 cardCapsule">
      <div className="section mt-2">
        <div className="card-block mb-2 bg-g">
          <div className="card-main card-main-custom">
            <div className="in in-custom">
              <div className="card-number card-number-custom mb-3">
                <span className="label">YOUR HERO COIN BALANCE</span>
                <strong>
                  <ion-icon
                    src="assets/img/svg/Vector.svg"
                    style={{ marginRight: "5px" }}
                  ></ion-icon>{" "}
                  {balance == 0 ? 1 : balance}
                </strong>
              </div>
              <div className="card-number card-number-custom">
                <span className="label">BACKED BY</span>
                <strong>5 KILOS</strong>
                <span className="label">IN CARBON CREDITS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ExchangeModal
        show={showExchangeModal}
        onClose={() => setShowExchangeModal(false)}
      />
      <div className="text pt-4">
        <div
          className="lead blue-text title-font custom-font-size"
          style={{ fontWeight: "normal" }}
        >
          You recieve 1 HERO Coin for being a first time Contributor. Then, each
          time your contribution is withdrawn by the mobilizer(s) you have
          chosen to support, you receive the equivalent amount of HERO Coins.
          HERO Coin is backed by <b>carbon credits*</b> and allows you to vote
          on the future of HERO.
        </div>

        <span className="pt-4">
          <a
            href="https://herolabsco.notion.site/Discover-carbon-credits-are-Calculated-7069545cfff94df7b1fd2a3831a49f2f"
            className=" blue-text title-font link-size"
            style={{ textDecoration: "underline" }}
            target="_blank"
          >
            *Discover how carbon credits are calculated.
          </a>
        </span>
        <h1 className="text-title title-font">HERO Mobilizers supported</h1>
      </div>
      <hr
        data-content="AND"
        className="hr-text mt-4 mb-4"
        style={{ width: "70%", margin: "0 auto", background: "blue" }}
      ></hr>
      <div className="center-div">
        <ul className="listview flush transparent simple-listview no-space mt-3">
          <li className="pt-3 pb-3">
            <div
              className="detail"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src="assets/img/img3.png"
                alt="img"
                className="image-block imaged rounded w48"
                style={{ marginRight: "10px" }}
              />
              <div>
                <strong className="blue-text custom-font">
                  Anuna de Wever
                </strong>
              </div>
            </div>
            <div className="itemList">
              <ion-icon
                class="md-icon"
                src="assets/img/svg/voteBlue.svg"
                style={{ marginRight: "5px" }}
                onClick={() => setShowMobilizerCampaignsModal(true)}
              ></ion-icon>
              <ion-icon
                class="md-icon"
                src="assets/img/svg/HeroCoin2.svg"
                style={{ marginRight: "5px" }}
                onClick={() => setShowMobilizerVictoriesModal(true)}
              ></ion-icon>
            </div>
          </li>
          <li className="pt-3 pb-3">
            <div
              className="detail"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src="assets/img/img2.png"
                alt="img"
                className="image-block imaged rounded w48"
                style={{ marginRight: "10px" }}
              />
              <div>
                <strong className="blue-text custom-font">
                  Julieta Martinez
                </strong>
              </div>
            </div>
            <div className="itemList">
              <ion-icon
                class="md-icon"
                src="assets/img/svg/voteBlue.svg"
                style={{ marginRight: "5px" }}
                onClick={() => setShowMobilizerCampaignsModal(true)}
              ></ion-icon>
              <ion-icon
                class="md-icon"
                src="assets/img/svg/HeroCoin2.svg"
                style={{ marginRight: "5px" }}
                onClick={() => setShowMobilizerVictoriesModal(true)}
              ></ion-icon>
            </div>
          </li>
        </ul>
      </div>
      {/*<ActivistCampaignsModal
        show={showMobilizerCampaignsModal}
        onClose={() => setShowMobilizerCampaignsModal(false)}

      />
      <ActivistVictoriesModal
        show={showMobilizerVictoriesModal}
        onClose={() => setShowMobilizerVictoriesModal(false)}
  />*/}
    </div>
  );
}

export default CardCapsule;
