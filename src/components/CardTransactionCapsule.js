import React, { useState } from "react";
import "./CardTransactionCapsule.css";
import ExchangeModal from "./modals/ExchangeModal";

function CardTransactionCapsule(props) {
  const [showExchangeModal, setShowExchangeModal] = useState(false);
  const [content, setContent] = useState("");
  const urlOFGateway ="https://staging-global.transak.com/?apiKey=0d9d5931-ed0d-4f9e-979b-fb6fa87658a0&redirectURL=https://hegemony.donftify.digital:3001/Card&cryptoCurrencyList=CUSD&defaultCryptoCurrency=CUSD&walletAddress=0x9dD392F9aAa8c9fE1F69B184b586eE9CeF85861D&disableWalletAddressForm=true&exchangeScreenTitle=Hero%20Payement%20Credit%20Card%20&isFeeCalculationHidden=true" ;
  const mobilizer = (
    <>
      <div className="form-group basic">
        <div className="input-wrapper">
          <label className="label" for="account2d">
            To
          </label>
          <select className="form-control custom-select" id="account2d">
            <option value="0">Anuna de Wever</option>
            <option value="1">Julieta Martinez</option>
            <option value="1">Vanessa Nakate</option>
          </select>
          <i className="clear-input">
            <ion-icon name="close-circle"></ion-icon>
          </i>
        </div>
      </div>

      <div className="form-group basic">
        <label className="label">Enter Amount</label>
        <div className="input-group mb-2">
          <span className="input-group-text" id="basic-addonb1">
            $
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Enter an amount"
          />
        </div>
      </div>
    </>
  );
  const addContent = () => {
    setContent((current) => (
      <>
        {current} {mobilizer}
      </>
    ));
  };

  return (
    <div id="appCapsule" className="bg-g">
      <div className="section mt-2">
        <ion-icon
          class="icon-title"
          src="assets/img/svg/heroCardWhite.svg"
        ></ion-icon>
      </div>
      <div className="section">
        <h4 className="white-text">Support HERO Mobilizers</h4>
        <span className="white-text">with a Basic Income.</span>
      </div>
      <div className="section">
        <form id="white-form">
          <div className="flex-end">
            <a href="#" style={{ color: "white" }}>
              <ion-icon
                class="add-icon"
                name="add"
                onClick={addContent}
              ></ion-icon>
            </a>
          </div>
          <div className="form-group basic">
            <div className="input-wrapper">
              <label className="label" for="account2d">
                To
              </label>
              <select className="form-control custom-select" id="account2d">
                <option value="0">Anuna de Wever</option>
                <option value="1">Julieta Martinez</option>
                <option value="1">Vanessa Nakate</option>
              </select>
              <i className="clear-input">
                <ion-icon name="close-circle"></ion-icon>
              </i>
            </div>
          </div>

          <div className="form-group basic">
            <label className="label">Enter Amount</label>
            <div className="input-group mb-2">
              <span className="input-group-text" id="basic-addonb1">
                $
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter an amount"
              />
            </div>
          </div>
          {content}
          <div className="form-group basic">
            <label className="label mb-2">Type of Payment</label>

            <div className="radio-input">
              <div class="form-check mb-1">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Crypto Payement
                </label>
              </div>
              <div class="form-check mb-1" onClick={() => {window.location.href = urlOFGateway;}}>
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label class="form-check-label" for="flexRadioDefault2" >
                  Credit Card
                </label>
              </div>
            </div>
          </div>

          {/*
          <div className="form-group basic">
            <div className="input-wrapper">
              <label className="label" for="account2d">
                Form of Payment
              </label>
              <select className="form-control custom-select" id="account2d">
                <option value="0">Credit Card</option>
                <option value="1">Credit Card</option>
                <option value="1">Credit Card</option>
              </select>
            </div>
          </div>
          <div className="form-group basic">
            <label className="label">Credit Card Information</label>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Name on card"
              />
            </div>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Card number"
              />
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="input-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Expiration Date"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="input-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="CVV"
                  />
                </div>
              </div>
            </div>
          </div>
  */ }

          <div className="section">
            <h4 className="white-text">Transaction total</h4>
            <h3 className="white-text">$300</h3>
          </div>
          <div className="form-group basic">
            <button
              type="button"
              class="btn btn-outline-secondary rounded"
              data-bs-dismiss="modal"
              style={{ borderColor: "white", color: "white", width: "200px" }}
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CardTransactionCapsule;
