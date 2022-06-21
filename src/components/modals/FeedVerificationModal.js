import React, { useEffect } from "react";
import { Modal } from "bootstrap";

function FeedVerificationModal(props) {
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
              <div className="section mt-3 text-center center-div">
                <div className="avatar-section mb-2">
                  <a href="#">
                    <img
                      src={"assets/img/mobilizersLogoWhite.png"}
                      alt="avatar"
                    />
                  </a>
                </div>
              </div>

              <div
                className="section center-div mt-2 white-text"
                style={{ textAlign: "start" }}
              >
                <h6 className="white-text pb-3" style={{ fontWeight: "900" }}>
                  How we Verify HERO Mobilizers :
                </h6>
                <p className="pb-2">
                  HERO identifies publicly recognised climate movement leaders,
                  such as Anuna De Wever, whom are nominated by public figures
                  and organizations such as Greta Thunberg, UNICEF and Amnesty
                  International.
                </p>
                <p className="pb-2" style={{margin:0}}>
                  We verify their track record in successfully leading climate
                  movements:
                </p>
                <ul className="white-text pb-2">
                  <li className="no-padding">No violence.</li>
                  <li className="no-padding">
                    At least 1 victory in enacting change.
                  </li>
                </ul>
                <p className="pb-2">
                  These first Mobilizers can then nominate Emerging Climate
                  Mobilizers, which are then verified by HERO, with the above
                  criteria.
                </p>
                <p>
                  Find more information on our verification process on the{" "}
                  <a
                    href="https://herolabsco.notion.site/Discover-how-HERO-Mobilizers-are-verified-a3b9028ab257499fafa9d724c2ecb11b"
                    target="_blank"
                    className="white-text"
                  >
                    <b style={{ textDecoration: "underline" }}>HERO FAQ</b>
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedVerificationModal;
