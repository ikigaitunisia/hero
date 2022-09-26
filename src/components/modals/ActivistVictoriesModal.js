import React, { useEffect } from "react";
import { Modal } from "bootstrap";
import "./Modal.css";

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
        <div className="modal-content" style={{ opacity: 1 }}>
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
              <h5 className="white mb-3">Victories</h5>
              <div className="mt-4">
                <div className="card mt-4 mb-4">
                  <div style={{ display: "flex" }} className="card-body">
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
                      <div>
                        <div className="mb-05">
                          <strong>Stop Cambo</strong>
                        </div>
                        <div className="text-small mb-05">Project paused</div>
                        <div className="text-xsmall">
                        After 6 months of campaigning, Shell pulled out of the controversial Cambo oil field, which led to the project being paused.
Dominique, Francesca, Jessica were involved in this campaign.

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-4">
                  <div style={{ display: "flex" }} className="card-body">
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
                      <div>
                        <div className="mb-05">
                          <strong>UK climate emergency</strong>
                        </div>
                        <div className="text-small mb-05">Declared. With legal Net Zero target</div>
                        <div className="text-xsmall">
                        The UK government declared a climate emergency after a shut down of London for 10 days. 
Liba and Jessica were involved.

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
    </div>
  );
}

export default ActivistVictoriesModal;
