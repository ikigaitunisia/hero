import React, { useEffect } from "react";
import { Modal } from "bootstrap";
import "../ActivistProfileCapsule.css";

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
                    src={"assets/img/" + props.activist.autre.Photo}
                    alt="avatar"
                    className="imaged w100 rounded"
                  />
                </a>
              </div>
              <h3 className="white-text custom-font">
                {props.activist.Nom + " " + props.activist.Prenom}{" "}
              </h3>
              <span className="white-text">{props.activist.autre.Pays}</span>
            </div>

            <div className="section center-div mt-2">
              <hr
                data-content="AND"
                className="hr-text mb-4 white-divider"
              ></hr>
              <h5 className="white-text mb-3">Victories</h5>
              <div className="section">
                <div style={{ display: "flex" }} className="mt-2">
                  <div>
                    <ion-icon
                      src="assets/img/svg/heroCoin3.svg"
                      class="custom-icon-size"
                    ></ion-icon>
                  </div>
                  <div
                    className="in"
                    style={{ textAlign: "start", marginLeft: "20px" }}
                  >
                    <div className="white-text">
                      <div className="mb-05">
                        <strong>Law passed</strong>
                      </div>
                      <div className="text-small mb-05">
                        Friday’s for Future International <br />
                        Completed
                      </div>
                      <div className="text-xsmall">
                        Protection of indigenous communities in the Amazon
                        Forest.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr
                data-content="AND"
                className="hr-text mt-4 mb-4 white-divider"
              ></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivistVictoriesModal;
