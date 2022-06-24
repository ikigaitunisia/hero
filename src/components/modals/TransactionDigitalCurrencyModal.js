import React, { useEffect } from "react";
import { Modal } from "bootstrap";

function TransactionDigitalCurrencyModal(props) {
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
              <div
                className="section center-div mt-4 pt-4 white-text"
                style={{ textAlign: "start" }}
              >
                <p className="pb-2" style={{ margin: 0 }}>
                  <b>
                    Since we are working on the Valora Alfajoles Testnet, you
                    will need to
                  </b>
                </p>
                <ul className="white-text pb-2">
                  <li className="no-padding">
                    Click a <b>first</b> time on “Confirm” to proceed to Valora
                    Alfajoles and Approve in Valora the connection with Hero
                    Coin
                  </li>
                  <li className="no-padding">
                    Return to this same Transaction page, wait a few seconds for
                    the first operation to clear and Click a second time on{" "}
                    <b>“Confirm”</b> to proceed again to Valora and validate the
                    transaction this time
                  </li>
                  <li className="no-padding">
                    On iphones, you even need to do this 3 times:)
                  </li>
                </ul>
                <p className="pb-2">
                  <b>
                    This is only for the testing envirnonment, it only requires
                    1 Validation on the Real Net !
                  </b>
                </p>
                <br />
                <button
                  type="button"
                  class="btn btn-link rounded btn-lg"
                  data-bs-dismiss="modal"
                  style={{
                    borderColor: "white",
                    color: "#8585FF",
                    width: "200px",
                    backgroundColor: "white",
                  }}
                  onClick={() => {
                    props.connectWallet();
                    props.onClose();
                  }}
                >
                  ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionDigitalCurrencyModal;
