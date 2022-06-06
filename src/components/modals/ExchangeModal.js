import React, { useEffect } from "react";
import { Modal } from "bootstrap";

import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3 from 'web3';
import { newKitFromWeb3 } from '@celo/contractkit';

function ExchangeModal(props) {
  const [provider,setProvider] = useState(null);
  const [kit,setKit] =useState(null);
  

  const connect = async() => {
    const provider = new WalletConnectProvider({
      rpc: {
        44787: "https://alfajores-forno.celo-testnet.org",
        42220: "https://forno.celo.org",
      },
    });
  
    await provider.enable()
    const web3 = new Web3(provider);
    let kit = newKitFromWeb3(web3)
  
    kit.defaultAccount = provider.accounts[0]
    console.log(kit.defaultAccount);
    provider.on("accountsChanged", (accounts) => {
      console.log(accounts);
    });
  
    setProvider(provider);
    setKit(kit);
  }
  useEffect(() => {
    if (props.show) {
      const modal = new Modal(document.getElementById("exchangeActionSheet"), {
        keyboard: false,
      });
      modal.show();
    }

    return () => {
      props.onClose();
    };
  }, [props.show]);
  /*
  const connectWalletProcess = async () => { //TODO: implement
 
    console.log("ok");
      
    const connectorV = new WalletConnect({
    bridge: "https://bridge.walletconnect.org", // Required
    qrcodeModal: QRCodeModal,
      });
     if (!connectorV.connected) {
        // create new session
        connectorV.createSession();
        connectorV.on("connect", (error, payload) => {
        if (error) {
        throw error;
        }
         
        // Get provided accounts and chainId
        const { accounts, chainId } = payload.params[0];
        setWorM("WC");
        setWallet(accounts);
       });
       }
       setConnector(connectorV);
   
   };
   const connectWalletPressedWC = async () => { //TODO: implement
         handleClose();
      const a= await connectWalletProcess();
      
      };
*/
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
            <button
              type="button"
              className="btn btn-primary btn-block btn-lg"
              data-bs-dismiss="modal"
              onClick={() => connect()}
            >
              Connect Wallet
            </button>
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
                      <option value="0">Celo</option>
                      <option value="1">cusd</option>
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
