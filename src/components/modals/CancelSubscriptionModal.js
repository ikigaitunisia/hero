import React, { useEffect, useState } from "react";
import { Modal } from "bootstrap";
import "./CancelSubscriptionModal.css";
import { useHistory } from "react-router-dom";

function CancelSubscriptionModal(props) {
  const history = useHistory();
  useEffect(() => {
    if (props.show) {
      const modal = new Modal(document.getElementById("cancelSubscription"), {
        keyboard: false,
      });
      if (modal) {
        modal.show();
      }
    }

    return () => {
      props.onClose();
      setConfirmCancel(false);
    };
  }, [props.show]);
  const [confirmCancel, setConfirmCancel] = useState(true);
  const [cancel, setCancel] = useState(false);

  useEffect(() => {
    const btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", () => {
      history.push("/subscriptions");
      window.location.reload();
    });
    const btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", async () => {
      setConfirmCancel(true);
      setCancel(false);
      console.log(confirmCancel);
      console.log("ddddd");
    });
  }, [confirmCancel, cancel]);
  return (
    <>
      <div
        className="modal fade modalbox"
        id="cancelSubscription"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
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
            {cancel && (
              <div className="modal-body">
                <div className="flex-center flex-col">
                  <img
                    src={"assets/img/logo2.png"}
                    alt="logo"
                    className="logo"
                  />
                  <p className="header-text mt-2 white">
                    Are you sure you want <br />
                    to cancel your subscription?
                  </p>
                  <p className="mt-2 mb-2 pb-4 white center-text">
                    By cancelling you will no longer have access <br />
                    to your HERO Circle and features.
                  </p>

                  <div>
                    <button
                      id="btn1"
                      type="button"
                      className="btn btn-lg mb-4 me-1"
                      onClick={() => console.log("ok")}
                      data-bs-dismiss="modal"
                    >
                      Go back
                    </button>
                    <button
                      id="btn2"
                      type="button"
                      className="btn btn-lg mb-4"
                      onClick={() => setConfirmCancel(true)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
            {confirmCancel && (
              <div className="modal-body">
                <div className="flex-center flex-col">
                  <img
                    src={"assets/img/logo2.png"}
                    alt="logo"
                    className="logo"
                  />
                  <p className="header-text mt-2 white">
                    Your subscription <br />
                    was succesfully cancelled.
                  </p>
                  <p className="mt-2 mb-2 pb-4 white center-text">
                    Your card will no longer be charged.
                  </p>

                  <div>
                    <button
                      id="btn1"
                      type="button"
                      className="btn btn-lg mb-2 me-1"
                      onClick={() => console.log("ok")}
                      data-bs-dismiss="modal"
                      style={{ width: "unset" }}
                    >
                      Explore other circles
                    </button>
                    <button
                      id="btn2"
                      type="button"
                      className="btn btn-lg mb-2"
                      style={{ width: "unset" }}
                    >
                      Go back to profile
                    </button>
                  </div>
                  <hr className="hr mt-2 mb-2 white" />
                  <p className="header-text mt-2 white">
                    Your feedback is important to us.
                  </p>
                  <p className="mt-2 mb-2 pb-4 white center-text">
                    Can you please take 1 minute to give us your
                    <br /> feedback and help us improve the
                    <br />
                    HERO experience.
                  </p>
                  <button
                    id="btn1"
                    type="button"
                    className="btn btn-lg mb-4 me-1"
                    style={{ width: "unset" }}
                  >
                    Go to survey
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CancelSubscriptionModal;
