import React, { useEffect } from "react";
import { Modal } from "bootstrap";

function ActivistCampaignsModal(props) {
  useEffect(() => {
    if (props.show) {
      const modal = new Modal(document.getElementById("activistCampaigns"), {
        keyboard: false,
      });
      if (modal) {
        modal.show();
      }
    }

    return () => {
      props.onClose();
    };
  }, [props.show]);

  return (
    <>
      <div
        className="modal fade modalbox"
        id="activistCampaigns"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content" style={{ opacity: "90%" }}>
            <div
              className="modal-header"
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
            <div className="modal-body">
              <div className="section mt-3 text-center center-div">
                <div className="avatar-section mb-2">
                  <a href="#">
                    <img
                      src={"assets/img/" + props.activist.autre.Photo}
                      alt="avatar"
                      className="imaged w100 rounded"
                    />
                  </a>
                </div>
                <h3 className="white-text custom-font">Anuna de Wever</h3>
                <span className="white-text">Belgium</span>
              </div>

              <div className="section center-div mt-2">
                <hr
                  data-content="AND"
                  className="hr-text mb-4 mt-4 white-divider"
                ></hr>
                <h5 className="white-text mb-3">Current Campaigns</h5>
                <div className="section">
                  <div style={{ display: "flex" }} className="mt-2">
                    <div>
                      <ion-icon
                        src="assets/img/svg/user.svg"
                        class="custom-icon-size"
                      ></ion-icon>
                    </div>
                    <div
                      className="in"
                      style={{ textAlign: "start", marginLeft: "20px" }}
                    >
                      <div className="white-text">
                        <div className="mb-05">
                          <strong>Migrants Rights</strong>
                        </div>
                        <div className="text-small mb-05">
                          Human Rights Watch <br />
                          In progress
                        </div>
                        <div className="text-xsmall">
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
                        class="custom-icon-size"
                      ></ion-icon>
                    </div>
                    <div
                      className="in"
                      style={{ textAlign: "start", marginLeft: "20px" }}
                    >
                      <div className="white-text">
                        <div className="mb-05">
                          <strong>Stop Coal Mining in Belgium</strong>
                        </div>
                        <div className="text-small mb-05">
                          Youth for Climate Belgium <br />
                          In progress
                        </div>
                        <div className="text-xsmall">
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
                  className="hr-text mb-4 mt-4 white-divider"
                ></hr>
                <h5 className="white-text mb-3">Upcoming Campaigns</h5>
                <div className="section ">
                  <div style={{ display: "flex" }} className="mt-2">
                    <div>
                      <ion-icon
                        src="assets/img/svg/paper.svg"
                        class="custom-icon-size"
                      ></ion-icon>
                    </div>
                    <div
                      className="in"
                      style={{ textAlign: "start", marginLeft: "20px" }}
                    >
                      <div className="white-text">
                        <div className="mb-05">
                          <strong>Global Climate Strike</strong>
                        </div>
                        <div className="text-small mb-05">
                          Friday’s for Future International <br />
                          To be launched
                        </div>
                        <div className="text-xsmall">
                          Mobilization lead for Friday’s for Future
                          International Global Climate Strike 2022.
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
    </>
  );
}

export default ActivistCampaignsModal;
