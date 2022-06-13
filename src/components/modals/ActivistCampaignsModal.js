import React, { useEffect } from "react";
import { Modal } from "bootstrap";

function ActivistCampaignsModal(props) {
  useEffect(() => {
    if (props.show) {
      const modal = new Modal(document.getElementById("activistCampaigns"), {
        keyboard: false,
      });
      modal.show();
    }

    return () => {
      props.onClose();
    };
  }, [props.show]);

  return (
    <div
      class="modal fade modalbox"
      id="activistCampaigns"
      tabIndex="-1"
      role="dialog"
      show={props.show}
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div
            class="modal-header"
            style={{
              justifyContent: "flex-end",
              border: "unset",
              background: "transparent",
            }}
          >
            <a href="#" data-bs-dismiss="modal">
              <ion-icon name="close" style={{ color: "white" }}></ion-icon>
            </a>
          </div>
          <div class="modal-body">
            <div className="section mt-3 text-center center-div">
              <div className="avatar-section mb-2">
                <a href="#">
                  <img
                    src="assets\img\img3.png"
                    alt="avatar"
                    className="imaged w100 rounded"
                  />
                </a>
              </div>
              <h3 className="white-text">Anuna de Wever</h3>
              <span className="white-text">Belgium</span>
            </div>

            <div className="section center-div mt-2">
              <hr
                data-content="AND"
                className="hr-text mb-2 white-divider"
              ></hr>
              <h5 className="white-text">Current Campaigns</h5>
              <div class="section">
                <div style={{ display: "flex" }} className="mt-2">
                  <div>
                    <ion-icon
                      src="assets/img/svg/user.svg"
                      style={{ width: "30px", height: "30px" }}
                    ></ion-icon>
                  </div>
                  <div
                    class="in"
                    style={{ textAlign: "start", marginLeft: "20px" }}
                  >
                    <div className="white-text">
                      <div class="mb-05">
                        <strong>Migrants Rights</strong>
                      </div>
                      <div class="text-small mb-05">
                        Human Rights Watch <br />
                        In progress
                      </div>
                      <div class="text-xsmall">
                        Drafting a new law to present to the EU Parliament to
                        protect climate refugees.
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex" }} className="mt-2">
                  <div>
                    <ion-icon
                      src="assets/img/svg/paper.svg"
                      style={{ width: "30px", height: "30px" }}
                    ></ion-icon>
                  </div>
                  <div
                    class="in"
                    style={{ textAlign: "start", marginLeft: "20px" }}
                  >
                    <div className="white-text">
                      <div class="mb-05">
                        <strong>Stop Coal Mining in Belgium</strong>
                      </div>
                      <div class="text-small mb-05">
                        Youth for Climate Belgium <br />
                        In progress
                      </div>
                      <div class="text-xsmall">
                        Organizing mobilizations to put pressure on Belgium’s
                        goberment to close coal mines.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section center-div mt-2">
              <hr
                data-content="AND"
                className="hr-text mb-2 white-divider"
              ></hr>
              <h5 className="white-text">Upcoming Campaigns</h5>
              <div class="section ">
                <div style={{ display: "flex" }} className="mt-2">
                  <div>
                    <ion-icon
                      src="assets/img/svg/paper.svg"
                      style={{ width: "30px", height: "30px" }}
                    ></ion-icon>
                  </div>
                  <div
                    class="in"
                    style={{ textAlign: "start", marginLeft: "20px" }}
                  >
                    <div className="white-text">
                      <div class="mb-05">
                        <strong>Global Climate Strike</strong>
                      </div>
                      <div class="text-small mb-05">
                        Friday’s for Future International <br />
                        To be launched
                      </div>
                      <div class="text-xsmall">
                        Mobilization lead for Friday’s for Future International
                        Global Climate Strike 2022.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivistCampaignsModal;
