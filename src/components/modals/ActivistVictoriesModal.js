import React, { useEffect } from "react";
import { Modal } from "bootstrap";
//import "../ActivistProfileCapsule.css";

function ActivistVictoriesModal(props) {
  useEffect(() => {
    if (props.show) {
      const modal = new Modal(document.getElementById("mobilizerVictories"), {
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
      id="mobilizerVictories"
      tabIndex="-1"
    >
      <div  role="document">
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
              <h3 className="white-text">Anuna de Wever </h3>
              <span className="white-text">Belgium</span>
            </div>

            <div className="section center-div mt-2">
              <hr
                data-content="AND"
                className="hr-text mb-2 white-divider"
              ></hr>
              <h5 className="white-text">Victories</h5>
              <div class="section">
                <div style={{ display: "flex" }} className="mt-2">
                  <div>
                    <ion-icon
                      src="assets/img/svg/heroCoin3.svg"
                      style={{ width: "30px", height: "30px" }}
                    ></ion-icon>
                  </div>
                  <div
                    class="in"
                    style={{ textAlign: "start", marginLeft: "20px" }}
                  >
                    <div className="white-text">
                      <div class="mb-05">
                        <strong>Law passed</strong>
                      </div>
                      <div class="text-small mb-05">
                        Friday’s for Future International <br />
                        Completed
                      </div>
                      <div class="text-xsmall">
                        Protection of indigenous communities in the Amazon
                        Forest.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr
                data-content="AND"
                className="hr-text mt-2 mb-2 white-divider"
              ></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivistVictoriesModal;
