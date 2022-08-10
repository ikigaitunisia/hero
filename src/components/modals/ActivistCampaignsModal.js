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
                      src={"assets/img/logo1.png"}
                      alt="avatar"
                      style={{ width: "35px" }}
                      className="w100"
                    />
                  </a>
                </div>
              </div>

              <div className="section center-div mt-2">
                <h5 className="white mb-3">Campaigns</h5>
                <div>
                  <div style={{ display: "flex" }} className="mt-4">
                    <div>
                      <ion-icon
                        src="assets/img/svg/campaign.svg"
                        class="custom-icon-size"
                      ></ion-icon>
                    </div>
                    <div
                      className="in"
                      style={{ textAlign: "start", marginLeft: "20px" }}
                    >
                      <div className="white">
                        <div className="mb-05">
                          <strong>Empowering African Emerging Leaders</strong>
                        </div>
                        <div className="mb-05">
                          <strong>UNICEF</strong>
                        </div>
                        <div className="text-small mb-05">In progress</div>
                        <div className="text-xsmall">
                          Empowering Africa’s new generation of climate
                          mobilizers.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex" }} className="mt-4">
                    <div>
                      <ion-icon
                        src="assets/img/svg/campaign.svg"
                        class="custom-icon-size"
                      ></ion-icon>
                    </div>
                    <div
                      className="in"
                      style={{ textAlign: "start", marginLeft: "20px" }}
                    >
                      <div className="white">
                        <div className="mb-05">
                          <strong>Stop Coal Mining in Belgium</strong>
                        </div>
                        <div className="mb-05">
                          <strong>Youth for Climate Belgium</strong>
                        </div>
                        <div className="text-small mb-05">In progress</div>
                        <div className="text-xsmall">
                          Organizing mobilizations to put pressure on Belgium’s
                          goberment to close coal mines.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex" }} className="mt-4">
                    <div>
                      <ion-icon
                        src="assets/img/svg/campaign.svg"
                        class="custom-icon-size"
                      ></ion-icon>
                    </div>
                    <div
                      className="in"
                      style={{ textAlign: "start", marginLeft: "20px" }}
                    >
                      <div className="white">
                        <div className="mb-05">
                          <strong>Global Climate Strike</strong>
                        </div>
                        <div className="mb-05">
                          <strong>Friday’s for Future International</strong>
                        </div>
                        <div className="text-small mb-05">In progress</div>
                        <div className="text-xsmall">
                          Mobilization co-leader for Friday’s for Future Global
                          Climate Strike 2022.
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
