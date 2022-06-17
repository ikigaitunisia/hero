import React, { useState,useEffect } from "react";
import "./CardTransactionCapsule.css";
import ExchangeModal from "./modals/ExchangeModal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import { newKitFromWeb3 } from "@celo/contractkit";
import { abiDepositContract } from "./abiDepositContract";
import { ERC20abi } from "./ERC20abi";

import { useHistory, useParams } from "react-router-dom";
import { ethers } from "ethers";
import axios from "axios";
const contractAddress = "0x02454be04F9B1131b3fDc5513fF04A444f5E2864";
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

    
  };
  const getElems = async () => {
    console.log(kit);
    var arrA = [];
    var ArrAv = [];
    document.querySelectorAll(".seletAc").forEach((element) => {
      arrA.push(element.value);
    });

    document.querySelectorAll(".AmountAc").forEach((element) => {
      const bigAmounnt = ethers.utils.parseEther(element.value);
      var amount = ethers.BigNumber.from(bigAmounnt.toString());
      ArrAv.push(amount);
    });
    const bigAmounntSomme = ethers.utils.parseEther(Somme.toString());
    var amountSomme = ethers.BigNumber.from(bigAmounntSomme.toString());
    let  AprvInst= await new kit.web3.eth.Contract(
      ERC20abi,
      "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1"
    );
    await AprvInst.methods.approve(
      contractAddress,
      amountSomme
    ).send( { from: kit.defaultAccount  ,gasPrice: 1000000000});

    let instance = await new kit.web3.eth.Contract(
      abiDepositContract,
      contractAddress
    );
   await instance.methods.DepositCusd(
      amountSomme,
      WalletContrib,
      arrA,
      ArrAv
    ).send({ from: kit.defaultAccount  , gasPrice: 1000000000});

    
 
    
    
   
    
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
                fontWeight: "bold",
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
