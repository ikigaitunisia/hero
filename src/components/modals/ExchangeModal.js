import React from "react";

function ExchangeModal(props) {
  return (
    <div
      className="modal fade action-sheet"
      id="exchangeActionSheet"
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Exchange</h5>
          </div>
          <div className="modal-body">
            <div className="action-sheet-content">
              <form>
                <div className="form-group basic">
                  <div className="input-wrapper">
                    <label className="label" for="account2d">
                      Select Field Label
                    </label>
                    <select
                      className="form-control custom-select"
                      id="account2d"
                    >
                      <option value="0">Value 1</option>
                      <option value="1">Value 2</option>
                      <option value="2">Value 3</option>
                    </select>
                  </div>
                </div>

                <div className="form-group basic">
                  <label className="label">Amount</label>
                  <div className="input-group mb-2">
                    <span className="input-group-text" id="basic-addonb1">
                      $
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter an amount"
                      value=""
                    />
                  </div>
                </div>

                <div className="form-group basic">
                  <button
                    type="button"
                    className="btn btn-primary btn-block btn-lg"
                    data-bs-dismiss="modal"
                  >
                    Confirm
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

export default ExchangeModal;
