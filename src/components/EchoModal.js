import React, { useEffect } from "react";
import { Modal } from "bootstrap";
import "./EchoModal.css";

function EchoModal(props) {
  useEffect(() => {
    if (props.show) {
      const modal = new Modal(document.getElementById("echo"), {
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
    <div
      className="modal fade action-sheet"
      id="echo"
      tabindex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content top-border-radius">
          <div className="modal-header">
            <div className="mt-2 flex-end">
              <a href="#" data-bs-dismiss="modal">
                <ion-icon
                  name="close-circle"
                  class="close-modal-btn"
                ></ion-icon>
              </a>
            </div>
            <h5 className="modal-title">Echo on</h5>
          </div>
          <div className="modal-body">
            <div className="action-sheet-content p-0">
              <div
                className="row p-4"
              >
                <div className="flex-col-center col mb-3">
                  <button
                    type="button"
                    className="btn btn-icon rounded btn-primary social-btn me-1 mb-1"
                  >
                    <ion-icon name="logo-whatsapp"></ion-icon>
                  </button>
                  <span className="social-btn-title">Whatsapp</span>
                </div>
                <div className="flex-col-center col mb-3">
                  <button
                    type="button"
                    className="btn btn-icon rounded btn-primary social-btn me-1 mb-1"
                  >
                    <ion-icon src="assets/img/svg/tiktok.svg"></ion-icon>
                  </button>
                  <span className="social-btn-title">TikTok</span>
                </div>
                <div className="flex-col-center col mb-3">
                  <button
                    type="button"
                    className="btn btn-icon rounded btn-primary social-btn me-1 mb-1"
                  >
                    <ion-icon name="logo-instagram"></ion-icon>
                  </button>
                  <span className="social-btn-title">Instagram</span>
                </div>
                <div className="flex-col-center col mb-3">
                  <button
                    type="button"
                    className="btn btn-icon rounded btn-primary social-btn me-1 mb-1"
                  >
                    <ion-icon name="logo-twitter"></ion-icon>
                  </button>
                  <span className="social-btn-title">Twitter</span>
                </div>
                <div className="flex-col-center col mb-3">
                  <button
                    type="button"
                    className="btn btn-icon rounded btn-primary social-btn me-1 mb-1"
                  >
                    <ion-icon name="logo-facebook"></ion-icon>
                  </button>
                  <span className="social-btn-title">Facebook</span>
                </div>
              </div>
            </div>
            <div className="form-group basic p-0">
              <button
                type="button"
                className="btn btn-dark btn-block btn-lg"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EchoModal;
