import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import { withRouter } from "react-router-dom";
import "./Subscriptions.css";

function Subscriptions(props) {
  const history = useHistory();
  const subscriptions = [
    {
      circleName: "HERO First Circle",
      subscriptionType: "HERO Subscription Type",
      amount: "10",
      image: "assets/img/sample/photo/1.jpg",
    },
    {
      circleName: "HERO Second Circle",
      subscriptionType: "HERO Subscription Type",
      amount: "20",
      image: "assets/img/sample/photo/1.jpg",
    },
    {
      circleName: "HERO Third Circle",
      subscriptionType: "HERO Subscription Type",
      amount: "50",
      image: "assets/img/sample/photo/1.jpg",
    },
  ];
  return (
    <>
      <Header
        showTitlePage
        title={"Active Subscriptions"}
        showBackBtn
        showMenuBtn
        transparent
        whiteMode
        backTo={"/"}
      />
      <div id="appCapsule" className="subscriptions">
        <div className="mt-4">
          <ion-icon
            src="assets/img/svg/account.svg"
            class="mb-2 icon-btn me-2"
            onClick={() => history.push("/account-information")}
          ></ion-icon>
          <ion-icon
            src="assets/img/svg/passwordInfo.svg"
            class="mb-2 icon-btn me-2"
            onClick={() => history.push("/edit-password")}
          ></ion-icon>
          <ion-icon
            src="assets/img/svg/notificationWhite.svg"
            class="mb-2 icon-btn me-2"
          ></ion-icon>
          <ion-icon
            src="assets/img/svg/card.svg"
            class="mb-2 icon-btn me-2"
          ></ion-icon>
        </div>
        <div className="section mt-2">
          <div className="card flex-center pt-4 pb-4">
            <span>
              Below you can find the list of your active HERO
              <br /> Circle subscriptions.
            </span>
            <hr className="hr mt-4 mb-4" />
            <div className="section" style={{ width: "100%" }}>
              <ul className="listview image-listview transparent flush">
                {subscriptions.map((item) => (
                  <li>
                    <div className="item pe-0 pl-0">
                      <img
                        src={item.image}
                        alt="image"
                        className="imaged rounded w48 me-2"
                      />
                      <div className="in">
                        <div
                          className="flex-col"
                          style={{ alignItems: "flex-start" }}
                        >
                          <strong>{item.circleName}</strong>
                          <p>{item.subscriptionType}</p>
                          <div className="mt-2">
                            <button
                              id="joinCircleBtn"
                              type="button"
                              className="btn btn-primary rounded font-size-btn me-1"
                            >
                              Modify
                            </button>
                            <button
                              id="joinCircleBtn"
                              type="button"
                              className="btn btn-primary rounded font-size-btn"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                        <div>
                          <div className="amount-div black mt-1">
                            <sup>€</sup>
                            {item.amount}
                            <span>/mo</span>
                          </div>
                          <button
                            id="joinCircleBtn"
                            type="button"
                            className="btn btn-primary rounded font-size-btn mt-1"
                          >
                            Invoices
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Subscriptions);
