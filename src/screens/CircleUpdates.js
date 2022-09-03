import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import { withRouter } from "react-router-dom";
import "./CircleUpdates.css";

function CircleUpdates(props) {
  const history = useHistory();

  return (
    <>
      <Header
        showTitlePage
        title={"Circle Updates"}
        showBackBtn
        showMenuBtn
        transparent
        whiteMode
      />
      <div id="appCapsule" className="circles-updates">
        <div className="mt-4">
          <ion-icon
            src="assets/img/svg/icon16.svg"
            class="mb-2 icon-btn me-2"
          ></ion-icon>
          <ion-icon
            src="assets/img/svg/icon17.svg"
            class="mb-2 icon-btn me-2"
          ></ion-icon>
          <ion-icon
            src="assets/img/svg/icon18.svg"
            class="mb-2 icon-btn me-2"
          ></ion-icon>
        </div>
        <div className="section mt-2">
          <div className="card">
            <ul className="listview flush transparent simple-listview">
              <li>
                <div>
                  <img
                    src="assets/img/sample/photo/1.jpg"
                    alt="image"
                    class="imaged w48 rounded"
                  />
                </div>
                <div
                  className="in"
                  style={{ textAlign: "start", marginLeft: "20px" }}
                >
                  <div className="blue">
                    <div className="">
                      <strong>
                        Mobilizer 1 <small>10h</small>
                      </strong>
                    </div>
                    <div className="mb-05">
                      <span>@mobilizer1</span>
                    </div>
                    <div className="text-xsmall">
                      This is an update about an event. <b>@Circle Event 1</b>{" "}
                      can be tagged to access more details.
                    </div>
                  </div>
                  <div class="card text-white bg-primary mt-2 mb-2">
                    <div class="card-header flex-center">
                      <ion-icon src="assets/img/svg/icon19.svg"></ion-icon>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title blue">Circle Event 1</h5>
                      <p class="card-text blue">
                        Month Day, 0:00 am - Month Day, 0:00 pm CET
                      </p>
                    </div>
                  </div>
                  <div className="flex-row mt-3">
                    <div className="flex-center flex-row">
                      <ion-icon
                        src="assets/img/svg/icon20.svg"
                        style={{ width: "15px", height: "15px" }}
                        class="me-1"
                      ></ion-icon>
                      <span className="me-2">100</span>
                    </div>
                    <div className="flex-center flex-row">
                      <ion-icon
                        src="assets/img/svg/icon21.svg"
                        style={{ width: "15px", height: "15px" }}
                        class="me-1"
                      ></ion-icon>
                      <span>250</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="assets/img/sample/photo/1.jpg"
                    alt="image"
                    class="imaged w48 rounded"
                  />
                </div>
                <div
                  className="in"
                  style={{ textAlign: "start", marginLeft: "20px" }}
                >
                  <div className="blue">
                    <div className="">
                      <strong>
                        Mobilizer 2 <small>12h</small>
                      </strong>
                    </div>
                    <div className="mb-05">
                      <span>@mobilizer2</span>
                    </div>
                    <div className="text-xsmall">
                      This is a text update with up to 280 characters.
                    </div>
                  </div>
                  <div className="flex-row mt-3">
                    <div className="flex-center flex-row">
                      <ion-icon
                        src="assets/img/svg/icon20.svg"
                        style={{ width: "15px", height: "15px" }}
                        class="me-1"
                      ></ion-icon>
                      <span className="me-2">100</span>
                    </div>
                    <div className="flex-center flex-row">
                      <ion-icon
                        src="assets/img/svg/icon21.svg"
                        style={{ width: "15px", height: "15px" }}
                        class="me-1"
                      ></ion-icon>
                      <span>250</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="assets/img/sample/photo/1.jpg"
                    alt="image"
                    class="imaged w48 rounded"
                  />
                </div>
                <div
                  className="in"
                  style={{ textAlign: "start", marginLeft: "20px" }}
                >
                  <div className="blue">
                    <div className="">
                      <strong>
                        Mobilizer 3 <small>1d</small>
                      </strong>
                    </div>
                    <div className="mb-05">
                      <span>@mobilizer3</span>
                    </div>
                    <div className="text-xsmall">
                      This is a text update with media, in this case a video.
                    </div>
                  </div>
                  <div className="flex-row mt-3 mb-4">
                    <video playsInline>
                      <source
                        src={"assets/videos/" + "short-video-for-test.mp4"}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(CircleUpdates);
