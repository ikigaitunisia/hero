import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import "./CancelSubscription.css";

function CancelSubscription(props) {
  const history = useHistory();
  const [confirmCancel, setConfirmCancel] = useState(false);

  return (
    <>
      <Header whiteMode transparent showCloseBtn />

      <div id="appCapsule" className="cancel-subscription">
        {!confirmCancel && (
          <div className="flex-center flex-col">
            <img src={"assets/img/logo2.png"} alt="logo" className="logo" />
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
                type="button"
                className="btn btn-lg mb-4 me-1"
                onClick={() => history.push("/subscriptions")}
                data-bs-dismiss="modal"
              >
                Go back
              </button>
              <button
                type="button"
                className="btn btn-lg mb-4"
                onClick={() => setConfirmCancel(true)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        {confirmCancel && (
          <div className="flex-center flex-col">
            <img src={"assets/img/logo2.png"} alt="logo" className="logo" />
            <p className="header-text mt-2 white">
              Your subscription <br />
              was succesfully cancelled.
            </p>
            <p className="mt-2 mb-2 pb-4 white center-text">
              Your card will no longer be charged.
            </p>

            <div>
              <button
                type="button"
                className="btn btn-lg mb-2 me-1"
                onClick={() => console.log("ok")}
                style={{ width: "unset" }}
              >
                Explore other circles
              </button>
              <button
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
              type="button"
              className="btn btn-lg mb-4 me-1"
              style={{ width: "unset" }}
            >
              Go to survey
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CancelSubscription;
