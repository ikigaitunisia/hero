import React, { useEffect, useState } from "react";
import { Modal } from "bootstrap";
import "./ClubSelectMembershipModal.css";
import HeroStarterDetails from "./HeroStarterDetails";
import HeroSupporterDetails from "./HeroSupporterDetails";
import HeroChangerDetails from "./HeroChangerDetails";

function ClubSelectMembershipModal(props) {
  useEffect(() => {
    if (props.show) {
      const modal = new Modal(document.getElementById("clubSelectMembership"), {
        keyboard: false,
      });
      if (modal) {
        modal.show();
      }
    }

    return () => {
      props.onClose();
      setShowHeroStarterDetails(false);
      setShowHeroSupporterDetails(false);
      setShowHeroChangerDetails(false);
    };
  }, [props.show]);
  const [showHeroStarterDetails, setShowHeroStarterDetails] = useState(false);
  const [showHeroSupporterDetails, setShowHeroSupporterDetails] =
    useState(false);
  const [showHeroChangerDetails, setShowHeroChangerDetails] = useState(false);

  return (
    <>
      <div
        className="modal fade modalbox"
        id="clubSelectMembership"
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
            {!showHeroStarterDetails &&
              !showHeroSupporterDetails &&
              !showHeroChangerDetails && (
                <div className="modal-body">
                  <img
                    src={"assets/img/heroLogo2.png"}
                    alt="logo"
                    className="logo"
                  />
                  <p className="header-text mt-4">
                    Choose your HERO Club
                    <br /> Membership
                  </p>
                  <div className="button-wrapper mt-4">
                    <button
                      type="button"
                      class="btn btn-outline-primary custom-btn me-1 mb-1"
                      onClick={() => setShowHeroStarterDetails(true)}
                    >
                      <sup>€</sup>10<span>/mo</span>
                    </button>
                    <span className="mt-1">HERO Starter</span>
                    <a href="" className="mt-1">
                      Click here to see what’s included.
                    </a>
                  </div>
                  <div className="button-wrapper mt-4">
                    <button
                      type="button"
                      class="btn btn-outline-primary custom-btn me-1 mb-1"
                      onClick={() => setShowHeroSupporterDetails(true)}
                    >
                      <sup>€</sup>20<span>/mo</span>
                    </button>
                    <span className="mt-1">HERO Supporter</span>
                    <a href="" className="mt-1">
                      Click here to see what’s included.
                    </a>
                  </div>
                  <div className="button-wrapper mt-4">
                    <button
                      type="button"
                      class="btn btn-outline-primary custom-btn me-1 mb-1"
                      onClick={() => setShowHeroChangerDetails(true)}
                    >
                      <sup>€</sup>50<span>/mo</span>
                    </button>
                    <span className="mt-1">HERO Changer</span>
                    <a href="" className="mt-1">
                      Click here to see what’s included.
                    </a>
                  </div>
                  <button
                    type="button"
                    className="btn btn-icon rounded btn-primary submit-btn me-1 mb-1 mt-4"
                  >
                    <ion-icon
                      src="assets/img/svg/next2.svg"
                      style={{ color: "blue" }}
                    ></ion-icon>
                  </button>
                </div>
              )}
            {showHeroStarterDetails && (
              <div className="modal-body">
                <HeroStarterDetails />
              </div>
            )}
            {showHeroSupporterDetails && (
              <div className="modal-body">
                <HeroSupporterDetails />
              </div>
            )}
            {showHeroChangerDetails && (
              <div className="modal-body">
                <HeroChangerDetails />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ClubSelectMembershipModal;
