import React, { useState,useEffect,useCallback } from "react";
import "./CardTransactionCapsule.css";
import ExchangeModal from "./modals/ExchangeModal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import { newKitFromWeb3,toTxResult } from "@celo/contractkit";
import { abiDepositContract } from "./abiDepositContract";
import { ERC20abi } from "./ERC20abi";
import { requestTxSig, waitForSignedTxs,requestAccountAddress, waitForAccountAuth } from "@celo/dappkit/lib/web";

import { useHistory, useParams } from "react-router-dom";
import { ethers } from "ethers";
import axios from "axios";

const contractAddress = "0xA85BEC65D8c16ecfA3D9230BB39C8adC4468dDBA";
function CardTransactionCapsule2(props) {
  const history = useHistory();
  const [content, setContent] = useState("");
  const [provider,setProvider] = useState(null);
  const [kit,setKit] =useState(null);
  const [Wallet,setWallet] = useState("");
  const [webT,setWebT] = useState(null);
  const [Connected,setConnected] = useState(false);
  const [Somme,setSomme] = useState(0);
  const [Index,setIndex] = useState(0);
  const [Activist,setActivist] = useState([]);
  const [approuved,setApprouved] = useState(false);
  const [WalletContrib,setWalletContrib] = useState("");
  const urlOFGateway ="https://staging-global.transak.com/?apiKey=0d9d5931-ed0d-4f9e-979b-fb6fa87658a0&redirectURL=https://hegemony.donftify.digital:3001/Card&cryptoCurrencyList=CUSD&defaultCryptoCurrency=CUSD&walletAddress=0x0ffc0e4E81441F5caBe78148b75F3CC8fee58dAb&disableWalletAddressForm=true&exchangeScreenTitle=Hero%20Payement%20Credit%20Card%20&isFeeCalculationHidden=true" ;
  const dappName = "HeroCoin";

  const updateArray = (response) => {
    
    setActivist(oldArray => [...oldArray,response]);
    console.log(Activist);
  } 
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setWalletContrib(user.wallet.address);
    axios
      .post("https://hegemony.donftify.digital:8080/GetIndexActiv")
      .then(function (response) {
        console.log(response.data);
        setIndex(response.data.index);
        for (var i = 1; i < response.data.index; i++) {
          axios
            .post("https://hegemony.donftify.digital:8080/GetActivistByID", {
              ID: i,
            })
            .then(function (response) {
              console.log(response.data);
              updateArray(response.data);
              
            })
            .catch(function (error) {
              //handle error here
              console.log(error);
            });
        }
      })
      .catch(function (error) {
        //handle error here
        console.log(error);
      });
  }, []);
  const updateSum = () => {
    var S = 0;
    document.querySelectorAll(".AmountAc").forEach((element) => {
      if (parseFloat(element.value) > 0 && !isNaN(parseFloat(element.value))) {
        S = S + parseFloat(element.value);
      }
    });
    setSomme(S);
  };

  const connect = async () => {
  const requestId = "login";
  const callback = "https://hegemony.donftify.digital:3001/cardtransaction";
  requestAccountAddress({
    requestId,
    dappName,
    callback
  });
  
  const dappkitResponse = await waitForAccountAuth(requestId);

  // The pepper is not available in all Valora versions
  //this.setState({
  //  address: dappkitResponse.address,
  //  phoneNumber: dappkitResponse.phoneNumber,
  //  pepper: dappkitResponse.pepper,
  //});
    console.log(dappkitResponse.address);
    setWallet(dappkitResponse.address);
    /*
    const provider = new WalletConnectProvider({
      rpc: {
        44787: "https://alfajores-forno.celo-testnet.org",
        42220: "https://forno.celo.org",
      },

    });

    await provider.enable();
    const web3 = new Web3(provider);
    let kit1 = newKitFromWeb3(web3);

    kit1.defaultAccount = provider.accounts[0];
    provider.on("accountsChanged", (accounts) => {
      console.log(accounts);
    });
    console.log("**************");
    console.log(contractAddress);
    //const hash = await tx.getHash();
    //console.log(hash);
    setWallet(kit1.defaultAccount);
    setConnected(true);
    setProvider(provider);
    setKit(kit1);
    setWebT(web3);

    */
  };
  const getElems = async () => {
    const web3 = new Web3("https://alfajores-forno.celo-testnet.org");
// mainnet -- comment out the above, uncomment below for mainnet
// const web3 = new Web3('https://forno.celo.org');

    const kit = newKitFromWeb3(web3);
    console.log(kit);
    const callback = "https://hegemony.donftify.digital:3001/card";

    var arrA = [];
    var ArrAv = [];

    document.querySelectorAll(".seletAc").forEach((element) => {
      arrA.push(element.value);
    });

    document.querySelectorAll(".AmountAc").forEach((element) => {
      var amount = ethers.BigNumber.from((parseFloat(element.value) * 10**18).toString());
      ArrAv.push(amount);
    });
    SommeBig=(Somme * 10**18).toString();
    const stableToken = await kit.contracts.getStableToken();
    const txObjectIncAllow = stableToken.increaseAllowance(
      contractAddress,
      amountSomme
    ).txo;
    let instance = await new kit.web3.eth.Contract(
      abiDepositContract,
      contractAddress
    );
   const txObjectDeposit = await instance.methods.DepositCusd(
      amountSomme,
      WalletContrib,
      arrA,
      ArrAv
    ).txo;

    const requestId = "signMeEverything";

// Request the TX signature from DAppKit
requestTxSig(
  kit,
  [
    {
      tx: txObjectIncAllow,
      from: Wallet,
      to: stableToken.address,
      estimatedGas: 200000,
    },
    {
      tx: txObjectDeposit,
      from: Wallet,
      to: contractAddress,
      estimatedGas: 200000,
    },
  ],
  { requestId, dappName, callback }
);

const dappkitResponse = await waitForSignedTxs(requestId);

const receipts = [];
// execute the allowance
console.log("execute the allowance");
const tx0 = await kit.connection.sendSignedTransaction(
  dappkitResponse.rawTxs[0]
);

    // Then we will call the Exchange contract, and attempt to buy 1 CELO with a
    // max price of 10 cUSD (it could use less than that).
    
    // Then we will call the lockedGold contract to lock our CELO
    // (Remember that the address should be a registered Account)
    // Later, the amount to be locked will be the parameter `value`.
    
    // Then we use the 1 CELO to vote for a specific validator group address.
    // Here you have to change the validator group address
    // (At the moment of writing the tuto, the 0x5edfCe0bad47e24E30625c275457F5b4Bb619241
    // was a valid address, but you could check the groups using the celocli)
   
    history.push("/Card");
  };

  const mobilizer = (
    <>
      <div className="form-group basic">
        <div className="input-wrapper">
          <label className="label" for="account2d">
            To
          </label>
          <select className="form-control custom-select seletAc" id="account2d"  >
            { Activist.map((activist) => (
            <option value={activist.Wallet}>{activist.Nom+" "+activist.Prenom}</option>
          
            ))
            }
          </select>
         
          <i className="clear-input">
            <ion-icon name="close-circle"></ion-icon>
          </i>
        </div>
      </div>

      <div className="form-group basic">
        <label className="label">Enter Amount</label>
        <div className="input-group mb-2">
          <span className="input-group-text" id="basic-addonb1">
            $
          </span>
          <input
            type="text"
            className="form-control AmountAc"
            placeholder="Enter an amount"
            onChange={(ev) => updateSum(ev.target.value)}
          />
        </div>
      </div>
    </>
  );
  const addContent = () => {
    setContent((current) => (
      <>
        {current} {mobilizer}
      </>
    ));
  };

  return (
    <div id="appCapsule" className="bg-g" style={{ minHeight: "100vh" }}>
      <div className="section mt-2">
        <ion-icon
          class="icon-logo"
          src="assets/img/svg/heroCardWhite.svg"
        ></ion-icon>
      </div>
      <div className="section">
        <h4 className="text-title white-text" style={{ margin: 0 }}>
          Support HERO Mobilizers
        </h4>
        <span className="white-text">with a Basic Income.</span>
      </div>
      <div className="section">
        <form id="white-form">
          <div className="flex-end">
            <a href="#" style={{ color: "white" }}>
              <ion-icon
                class="add-icon"
                name="add"
                onClick={() => addContent()}
              ></ion-icon>
            </a>
          </div>
          <div className="form-group basic">
            <div className="input-wrapper">
              <label className="label" for="account2d">
                To
              </label>
              <select className="form-control custom-select seletAc" id="account2d" >
              { Activist.map((activist) => (
            <option value={activist.Wallet}>{activist.Nom+" "+activist.Prenom}</option>
          
            ))
            }
            </select>
              <i className="clear-input">
                <ion-icon name="close-circle"></ion-icon>
              </i>
            </div>
          </div>

          <div className="form-group basic">
            <label className="label">Enter Amount</label>
            <div className="input-group mb-2">
              <span className="input-group-text" id="basic-addonb1">
                $
              </span>
              <input
                type="text"
                className="form-control AmountAc"
                placeholder="Enter an amount"
                onChange={(ev) => updateSum(ev.target.value)}
              />
            </div>
          </div>
          {content}
          <div className="form-group basic">
            <label className="label mb-3">Type of Payment</label>

            <div className="radio-input">
              <div class="form-check mb-1" onClick={() => connect()}>
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Crypto Payement
                </label>
              </div>
              <div
                class="form-check mb-1"
                onClick={() => {
                  window.location.href = urlOFGateway;
                }}
              >
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Credit Card
                </label>
              </div>
            </div>
          </div>

          {/*
          <div className="form-group basic">
            <div className="input-wrapper">
              <label className="label" for="account2d">
                Form of Payment
              </label>
              <select className="form-control custom-select" id="account2d">
                <option value="0">Credit Card</option>
                <option value="1">Credit Card</option>
                <option value="1">Credit Card</option>
              </select>
            </div>
          </div>
          <div className="form-group basic">
            <label className="label">Credit Card Information</label>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Name on card"
              />
            </div>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Card number"
              />
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="input-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Expiration Date"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="input-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="CVV"
                  />
                </div>
              </div>
            </div>
          </div>
  */}

          <div className="section mt-4 pt-2 mb-4">
            <h4 className="white-text">Transaction total</h4>
            <h3 className="white-text">{"$" + Somme}</h3>
          </div>
          <div className="form-group basic">
     
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
              onClick={() => getElems()}
            >
              Confirm
            </button> 
       
          
          </div>
        </form>
      </div>
    </div>
  );
}

export default CardTransactionCapsule2;
