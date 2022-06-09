import React from "react";

function MobilizerCampaigns(props) {
  return (
    <>
      <div id="appCapsule" className="bg-g-1">
        <div className="section mt-3 text-center center-div">
          <div className="avatar-section mb-2">
            <a href="#">
              <img
                src="assets\img\Anuna_Profile Picture.jpg"
                alt="avatar"
                className="imaged w100 rounded"
              />
            </a>
          </div>
          <h3 className="blue-text">Anuna de Wever</h3>
        </div>
        <hr
          data-content="AND"
          className="hr-text mt-2"
          style={{ width: "70%", margin: "0 auto" }}
        ></hr>
        <div className="section">
          <h5 className="blue-text">Current Campaigns</h5>
          <div class="section full">
            <ul class="listview image-listview flush">
              <li>
                <a href="app-notification-detail.html" class="item">
                  <div class="icon-box bg-warning">
                    <ion-icon src="assets/img/svg/user.svg"></ion-icon>
                  </div>
                  <div class="in">
                    <div>
                      <div class="mb-05">
                        <strong>Migrants Rights</strong>
                      </div>
                      <div class="text-small mb-05">
                        Human Rights Watch <br />
                        May 2022 - Present
                      </div>
                      <div class="text-xsmall">
                        Drafting a new law to present to the EU Parliament to
                        protect climate refugees.
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="app-notification-detail.html" class="item">
                  <div class="icon-box bg-warning">
                    <ion-icon src="assets/img/svg/paper.svg"></ion-icon>
                  </div>
                  <div class="in">
                    <div>
                      <div class="mb-05">
                        <strong>Stop Coal Mining in Belgium</strong>
                      </div>
                      <div class="text-small mb-05">
                        Youth for Climate Belgium <br />
                        January 2022 - Present
                      </div>
                      <div class="text-xsmall">
                        Organizing mobilizations to put pressure on Belgium’s
                        goberment to close coal mines.
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr
          data-content="AND"
          className="hr-text mt-2"
          style={{ width: "70%", margin: "0 auto" }}
        ></hr>
        <div className="section">
          <h5 className="blue-text">Upcoming Campaigns</h5>
          <div class="section full">
            <ul class="listview image-listview flush">
              <li>
                <a href="app-notification-detail.html" class="item">
                  <div class="icon-box bg-warning">
                    <ion-icon src="assets/img/svg/paper.svg"></ion-icon>
                  </div>
                  <div class="in">
                    <div>
                      <div class="mb-05">
                        <strong>Global Climate Strike</strong>
                      </div>
                      <div class="text-small mb-05">
                        Friday’s for Future International <br />
                        June 2022 - Present
                      </div>
                      <div class="text-xsmall">
                        Mobilization lead for Friday’s for Future International
                        Global Climate Strike 2022.
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobilizerCampaigns;
