import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import { withRouter } from "react-router-dom";
import "./AccountInformation.css";

function AccountInformation(props) {
  const history = useHistory();

  return (
    <>
      <Header
        showTitlePage
        title={"Account Information"}
        showBackBtn
        showMenuBtn
        transparent
        whiteMode
        backTo={"/"}
      />
      <div id="appCapsule" className="account-information">
        <div className="mt-4">
          <ion-icon
            src="assets/img/svg/accountInfo.svg"
            class="mb-2 icon-btn me-2"
          ></ion-icon>
          <ion-icon
            src="assets/img/svg/passwordInfo.svg"
            class="mb-2 icon-btn me-2"
          ></ion-icon>
          <ion-icon
            src="assets/img/svg/notification.svg"
            class="mb-2 icon-btn me-2"
          ></ion-icon>
          <ion-icon
            src="assets/img/svg/card.svg"
            class="mb-2 icon-btn me-2"
          ></ion-icon>
        </div>
        <div className="section mt-2">
          <div className="card flex-center pt-4 pb-4">
            <img
              src="assets/img/sample/photo/1.jpg"
              alt="image"
              className="imaged w48 rounded mb-3"
            />
            <span className="blue">Upload profile photo</span>
            <hr className="hr mt-4 mb-4" />
            <div id="">
              <form>
                <div className="form-group boxed">
                  <div className="input-wrapper">
                    <label className="label mb-3" for="text4b">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="text4b"
                      placeholder="Supporter One"
                    />
                    <i className="clear-input">
                      <ion-icon name="close-circle"></ion-icon>
                    </i>
                  </div>
                </div>

                <div className="form-group boxed">
                  <div className="input-wrapper">
                    <label className="label mb-3" for="email4b">
                      HERO ID
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email4b"
                      placeholder="@supporterone"
                    />
                    <i className="clear-input">
                      <ion-icon name="close-circle"></ion-icon>
                    </i>
                  </div>
                </div>
                <div className="form-group boxed">
                  <div className="input-wrapper">
                    <label className="label mb-3" for="email4b">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email4b"
                      placeholder="supporterone@gmail.com"
                    />
                    <i className="clear-input">
                      <ion-icon name="close-circle"></ion-icon>
                    </i>
                  </div>
                </div>
                <div className="form-group boxed">
                  <div className="input-wrapper">
                    <label className="label mb-3" for="select4b">
                      Where do you live?
                    </label>
                    <select
                      className="form-control custom-select"
                      id="select4b"
                    >
                      <option value="1">Netherlands</option>
                      <option value="2">Netherlands</option>
                      <option value="3">Netherlands</option>
                      <option value="4">Netherlands</option>
                    </select>
                  </div>
                </div>
                <div className="flex-center mt-3">
                  <p className="m-0">I want to receive email updates</p>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="SwitchCheckDefault4"
                      checked="true"
                    />
                    <label
                      className="form-check-label"
                      for="SwitchCheckDefault4"
                    ></label>
                  </div>
                </div>
              </form>

              <button
                type="button"
                className="btn btn-outline-secondary btn-lg mt-4"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(AccountInformation);
