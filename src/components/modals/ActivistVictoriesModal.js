import React, { useEffect } from "react";
import { Modal } from "bootstrap";

function ActivistVictoriesModal(props) {
  useEffect(() => {
    if (props.show) {
      const modal = new Modal(document.getElementById("mobilizerVictories"), {
        keyboard: false,
      });
      console.log(modal);
      if (modal) {
        modal.show();
      }
    }

    return () => {
      props.onClose();
    };
  }, [props.show]);

  return (
    <div
      className="modal fade modalbox"
      id="mobilizerVictories"
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
                    style={{width: "35px"}}
                    className="w100"
                  />
                </a>
              </div>
            </div>

            <div className="section center-div mt-2">
              <h5 className="white mb-3">Victories</h5>
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
                        <strong>EU Climate Law</strong>
                      </div>
                      <div className="mb-05">
                        <strong>Carbon Policy</strong>
                      </div>
                      <div className="text-small mb-05">Passed</div>
                      <div className="text-xsmall">
                        Climate target changed from 40% to 55% carbon emission
                        reduction by 2030.
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
                        <strong>Taxonomy Law in Belgium</strong>
                      </div>
                      <div className="mb-05">
                        <strong>Carbon Policy</strong>
                      </div>
                      <div className="text-small mb-05">Blocked</div>
                      <div className="text-xsmall">
                        Avoided Taxonomy Law to pass in Belgium’s Congress.
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

export default ActivistVictoriesModal;
