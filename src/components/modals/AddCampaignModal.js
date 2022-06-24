import React, { useEffect } from "react";
import { Modal } from "bootstrap";
import axios from "axios";
function AddCampaignModal(props) {
  useEffect(() => {
    if (props.show) {
      const modal = new Modal(document.getElementById("addCampaign"), {
        keyboard: false,
      });
      modal.show();
    }

    return () => {
      props.onClose();
    };
  }, [props.show]);
  const witdhrawl = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    axios
    .post("https://hegemony.donftify.digital:8080/widhdraw", {
      activist : user.Wallet
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      //handle error here
      console.log(error);
    });

  }
  return (
    <div
      className="modal fade modalbox"
      id="addCampaign"
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content" style={{opacity:"90%"}}>
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
            <div className="section">
              <form id="white-form">
                <div className="form-group basic">
                  <label className="label">Campaign</label>
                  <div className="input-group mb-2">
                    <input
                      type="text"
                      className="form-control AmountAc"
                      placeholder="Name of the campaign"
                    />
                  </div>
                </div>
                <div className="form-group basic">
                  <label className="label">Organization or movement</label>
                  <div className="input-group mb-2">
                    <input
                      type="text"
                      className="form-control AmountAc"
                      placeholder="Name of the organization or movement"
                    />
                  </div>
                </div>
                <div className="form-group basic">
                  <div className="input-wrapper">
                    <label className="label" forhtml="account2d">
                      Campaign Status
                    </label>
                    <select
                      className="form-control custom-select seletAc"
                      id="account2d"
                    >
                      <option value="" selected disabled hidden>
                        Select campaign status
                      </option>

                      <option value="0x0DEA7CE64e3f7BBbe5910504F4aa7569c02BB211">
                        option1
                      </option>
                      <option value="0x0DEA7CE64e3f7BBbe5910504F4aa7569c02BB211">
                        option2
                      </option>
                      <option value="0x0DEA7CE64e3f7BBbe5910504F4aa7569c02BB211">
                        option3
                      </option>
                    </select>
                    <i className="clear-input">
                      <ion-icon name="close-circle"></ion-icon>
                    </i>
                  </div>
                </div>
                <div className="form-group basic">
                  <div className="input-wrapper">
                    <label className="label" forhtml="account2d">
                      Campaign category
                    </label>
                    <select
                      className="form-control custom-select seletAc"
                      id="account2d"
                    >
                      <option value="" selected disabled hidden>
                        Climate
                      </option>

                      <option value="0x0DEA7CE64e3f7BBbe5910504F4aa7569c02BB211">
                        option1
                      </option>
                      <option value="0x0DEA7CE64e3f7BBbe5910504F4aa7569c02BB211">
                        option2
                      </option>
                      <option value="0x0DEA7CE64e3f7BBbe5910504F4aa7569c02BB211">
                        option3
                      </option>
                    </select>
                    <i className="clear-input">
                      <ion-icon name="close-circle"></ion-icon>
                    </i>
                  </div>
                </div>
                <div className="form-group basic">
                  <label className="label">Campaign description</label>
                  <div className="input-group mb-2">
                    <input
                      type="text"
                      className="form-control AmountAc"
                      placeholder="Brief description of your campaign"
                    />
                  </div>
                </div>
                <div className="form-group basic">
                  <button
                    type="button"
                    className="btn btn-link rounded"
                    data-bs-dismiss="modal"
                    style={{
                      borderColor: "white",
                      color: "white",
                      width: "200px",
                      background: "white"
                    }}
                    onClick={() => witdhrawl()}
                  >
                    Publish
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCampaignModal;
