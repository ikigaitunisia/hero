import React, { useEffect, useState } from "react";
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
      setSelectedSocialMedia(null);
    };
  }, [props.show]);

  const [selectedSocialMedia, setSelectedSocialMedia] = useState(null);

  const chooseSocialMedia = (socialMedia) => {
    if (selectedSocialMedia) {
      setSelectedSocialMedia(null);
      return;
    }
    setSelectedSocialMedia(socialMedia);
  };

  const send = () => {
    if (!selectedSocialMedia) {
      props.onClose();
      return;
    }
    console.log("send...");
  };

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
              <div className="row p-4">
                <div className="flex-col-center col mb-3">
                  <button
                    type="button"
                    className={
                      selectedSocialMedia === 1
                        ? "btn btn-icon rounded btn-primary social-btn-dark me-1 mb-1"
                        : "btn btn-icon rounded btn-primary social-btn me-1 mb-1"
                    }
                    onClick={() => chooseSocialMedia(1)}
                  >
                    {selectedSocialMedia !== 1 && (
                      <ion-icon name="logo-whatsapp"></ion-icon>
                    )}
                    {selectedSocialMedia === 1 && (
                      <ion-icon name="checkmark"></ion-icon>
                    )}
                  </button>
                  <span className="social-btn-title">Whatsapp</span>
                </div>
                <div className="flex-col-center col mb-3">
                  <button
                    type="button"
                    className={
                      selectedSocialMedia === 2
                        ? "btn btn-icon rounded btn-primary social-btn-dark me-1 mb-1"
                        : "btn btn-icon rounded btn-primary social-btn me-1 mb-1"
                    }
                    onClick={() => chooseSocialMedia(2)}
                  >
                    {selectedSocialMedia !== 2 && (
                      <ion-icon src="assets/img/svg/tiktok.svg"></ion-icon>
                    )}
                    {selectedSocialMedia === 2 && (
                      <ion-icon name="checkmark"></ion-icon>
                    )}
                  </button>
                  <span className="social-btn-title">TikTok</span>
                </div>
                <div className="flex-col-center col mb-3">
                  <button
                    type="button"
                    className={
                      selectedSocialMedia === 3
                        ? "btn btn-icon rounded btn-primary social-btn-dark me-1 mb-1"
                        : "btn btn-icon rounded btn-primary social-btn me-1 mb-1"
                    }
                    onClick={() => chooseSocialMedia(3)}
                  >
                    {selectedSocialMedia !== 3 && (
                      <ion-icon name="logo-instagram"></ion-icon>
                    )}
                    {selectedSocialMedia === 3 && (
                      <ion-icon name="checkmark"></ion-icon>
                    )}
                  </button>
                  <span className="social-btn-title">Instagram</span>
                </div>
                <div className="flex-col-center col mb-3">
                  <button
                    type="button"
                    className={
                      selectedSocialMedia === 4
                        ? "btn btn-icon rounded btn-primary social-btn-dark me-1 mb-1"
                        : "btn btn-icon rounded btn-primary social-btn me-1 mb-1"
                    }
                    onClick={() => chooseSocialMedia(4)}
                  >
                    {selectedSocialMedia !== 4 && (
                      <ion-icon name="logo-twitter"></ion-icon>
                    )}
                    {selectedSocialMedia === 4 && (
                      <ion-icon name="checkmark"></ion-icon>
                    )}
                  </button>
                  <span className="social-btn-title">Twitter</span>
                </div>
                <div className="flex-col-center col mb-3">
                  <button
                    type="button"
                    className={
                      selectedSocialMedia === 5
                        ? "btn btn-icon rounded btn-primary social-btn-dark me-1 mb-1"
                        : "btn btn-icon rounded btn-primary social-btn me-1 mb-1"
                    }
                    onClick={() => chooseSocialMedia(5)}
                  >
                    {selectedSocialMedia !== 5 && (
                      <ion-icon name="logo-facebook"></ion-icon>
                    )}
                    {selectedSocialMedia === 5 && (
                      <ion-icon name="checkmark"></ion-icon>
                    )}
                  </button>
                  <span className="social-btn-title">Facebook</span>
                </div>
              </div>
            </div>
            <div className="form-group basic p-0">
              <button
                type="button"
                className="btn btn-dark btn-block btn-lg no-border-radius"
                data-bs-dismiss="modal"
                onClick={send}
              >
                {selectedSocialMedia ? "Send" : "Cancel"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EchoModal;
