import React, { useState,useEffect } from 'react';

import axios from "axios";
import { withRouter } from 'react-router-dom';
import { useHistory } from "react-router-dom";


function Capsule(props)  {

const history = useHistory();


// Set up some variables to prepare a Avalanche USDC -> BSC USDT quote

        
// Use the following flow to handle
// 1) Receiving a bridge quote
// 2) Submitting an approval TX on the specific Token
// 3) Initiating a bridge transaction




return (
<>

<div id="appCapsule">

<div className="section wallet-card-section pt-1">
    <div className="wallet-card">
        <div className="balance">
            <div className="left">
                <span className="title">Total Balance</span>
                <h1 className="total">$ 2,562.50</h1>
            </div>
            <div className="right">
                <a href="#" className="button" data-bs-toggle="modal" data-bs-target="#depositActionSheet">
                    <ion-icon name="add-outline"></ion-icon>
                </a>
            </div>
        </div>
        
        <div className="wallet-footer">
            <div className="item">
                <a href="#" data-bs-toggle="modal" data-bs-target="#withdrawActionSheet">
                    <div className="icon-wrapper bg-danger">
                        <ion-icon name="arrow-down-outline"></ion-icon>
                    </div>
                    <strong>Withdraw</strong>
                </a>
            </div>
            <div className="item">
                <a href="#" data-bs-toggle="modal" data-bs-target="#sendActionSheet">
                    <div className="icon-wrapper">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <strong>Send</strong>
                </a>
            </div>
            <div className="item">
                <a href="app-cards.html">
                    <div className="icon-wrapper bg-success">
                        <ion-icon name="card-outline"></ion-icon>
                    </div>
                    <strong>Cards</strong>
                </a>
            </div>
            <div className="item">
                <a href="#" data-bs-toggle="modal" data-bs-target="#exchangeActionSheet">
                    <div className="icon-wrapper bg-warning">
                        <ion-icon name="swap-vertical"></ion-icon>
                    </div>
                    <strong>Exchange</strong>
                </a>
            </div>

        </div>
    </div>
</div>

<div className="modal fade action-sheet" id="depositActionSheet" tabndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Add Balance</h5>
            </div>
            <div className="modal-body">
                <div className="action-sheet-content">
                    <form>
                        <div className="form-group basic">
                            <div className="input-wrapper">
                                <label className="label" for="account1">From</label>
                                <select className="form-control custom-select" id="account1">
                                    <option value="0">Savings (*** 5019)</option>
                                    <option value="1">Investment (*** 6212)</option>
                                    <option value="2">Mortgage (*** 5021)</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group basic">
                            <label className="label">Enter Amount</label>
                            <div className="input-group mb-2">
                                <span className="input-group-text" id="basic-addona1">$</span>
                                <input type="text" className="form-control" placeholder="Enter an amount"
                                    value="100" />
                            </div>
                        </div>


                        <div className="form-group basic">
                            <button type="button" className="btn btn-primary btn-block btn-lg"
                                data-bs-dismiss="modal">Deposit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="modal fade action-sheet" id="withdrawActionSheet" tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Withdraw Money</h5>
            </div>
            <div className="modal-body">
                <div className="action-sheet-content">
                    <form>
                        <div className="form-group basic">
                            <div className="input-wrapper">
                                <label className="label" for="account2d">From</label>
                                <select className="form-control custom-select" id="account2d">
                                    <option value="0">Savings (*** 5019)</option>
                                    <option value="1">Investment (*** 6212)</option>
                                    <option value="2">Mortgage (*** 5021)</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group basic">
                            <div className="input-wrapper">
                                <label className="label" for="text11d">To</label>
                                <input type="email" className="form-control" id="text11d" placeholder="Enter IBAN" />
                                <i className="clear-input">
                                    <ion-icon name="close-circle"></ion-icon>
                                </i>
                            </div>
                        </div>

                        <div className="form-group basic">
                            <label className="label">Enter Amount</label>
                            <div className="input-group mb-2">
                                <span className="input-group-text" id="basic-addonb1">$</span>
                                <input type="text" className="form-control" placeholder="Enter an amount"
                                    value="100" />
                            </div>
                        </div>

                        <div className="form-group basic">
                            <button type="button" className="btn btn-primary btn-block btn-lg"
                                data-bs-dismiss="modal">Withdraw</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="modal fade action-sheet" id="sendActionSheet" tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Send Money</h5>
            </div>
            <div className="modal-body">
                <div className="action-sheet-content">
                    <form>
                        <div className="form-group basic">
                            <div className="input-wrapper">
                                <label className="label" for="account2">From</label>
                                <select className="form-control custom-select" id="account2">
                                    <option value="0">Savings (*** 5019)</option>
                                    <option value="1">Investment (*** 6212)</option>
                                    <option value="2">Mortgage (*** 5021)</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group basic">
                            <div className="input-wrapper">
                                <label className="label" for="text11">To</label>
                                <input type="email" className="form-control" id="text11"
                                    placeholder="Enter bank ID" />
                                <i className="clear-input">
                                    <ion-icon name="close-circle"></ion-icon>
                                </i>
                            </div>
                        </div>

                        <div className="form-group basic">
                            <label className="label">Enter Amount</label>
                            <div className="input-group mb-2">
                                <span className="input-group-text" id="basic-addon1">$</span>
                                <input type="text" className="form-control" placeholder="Enter an amount"
                                    value="100" />
                            </div>
                        </div>

                        <div className="form-group basic">
                            <button type="button" className="btn btn-primary btn-block btn-lg"
                                data-bs-dismiss="modal">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="modal fade action-sheet" id="exchangeActionSheet" tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Exchange Money</h5>
            </div>
            <div className="modal-body">
                <div className="action-sheet-content">
                    <form>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group basic">
                                    <div className="input-wrapper">
                                        <label className="label" for="currency1">From</label>
                                        <select className="form-control custom-select" id="currency1">
                                            <option value="1">EUR</option>
                                            <option value="2">USD</option>
                                            <option value="3">AUD</option>
                                            <option value="4">CAD</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group basic">
                                    <div className="input-wrapper">
                                        <label className="label" for="currency2">To</label>
                                        <select className="form-control custom-select" id="currency2">
                                            <option value="1">USD</option>
                                            <option value="1">EUR</option>
                                            <option value="2">AUD</option>
                                            <option value="3">CAD</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-group basic">
                            <label className="label">Enter Amount</label>
                            <div className="input-group mb-2">
                                <span className="input-group-text" id="basic-addon2">$</span>
                                <input type="text" className="form-control" placeholder="Enter an amount"
                                    value="100" />
                            </div>
                        </div>



                        <div className="form-group basic">
                            <button type="button" className="btn btn-primary btn-block btn-lg"
                                data-bs-dismiss="modal">Exchange</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="section">
    <div className="row mt-2">
        <div className="col-6">
            <div className="stat-box">
                <div className="title">Income</div>
                <div className="value text-success">$ 552.95</div>
            </div>
        </div>
        <div className="col-6">
            <div className="stat-box">
                <div className="title">Expenses</div>
                <div className="value text-danger">$ 86.45</div>
            </div>
        </div>
    </div>
    <div className="row mt-2">
        <div className="col-6">
            <div className="stat-box">
                <div className="title">Total Bills</div>
                <div className="value">$ 53.25</div>
            </div>
        </div>
        <div className="col-6">
            <div className="stat-box">
                <div className="title">Savings</div>
                <div className="value">$ 120.99</div>
            </div>
        </div>
    </div>
</div>

<div className="section mt-4">
    <div className="section-heading">
        <h2 className="title">Transactions</h2>
        <a href="app-transactions.html" className="link">View All</a>
    </div>
    <div className="transactions">
        <a href="app-transaction-detail.html" className="item">
            <div className="detail">
                <img src="assets/img/sample/brand/1.jpg" alt="img" className="image-block imaged w48" />
                <div>
                    <strong>Amazon</strong>
                    <p>Shopping</p>
                </div>
            </div>
            <div className="right">
                <div className="price text-danger"> - $ 150</div>
            </div>
        </a>
     
        <a href="app-transaction-detail.html" className="item">
            <div className="detail">
                <img src="assets/img/sample/brand/2.jpg" alt="img" className="image-block  imaged w48" />
                <div>
                    <strong>Apple</strong>
                    <p>Appstore Purchase</p>
                </div>
            </div>
            <div className="right">
                <div className="price text-danger">- $ 29</div>
            </div>
        </a>
       
        <a href="app-transaction-detail.html" className="item">
            <div className="detail">
                <img src="assets/img/sample/avatar/avatar3.jpg" alt="img" className="image-block imaged w48" />
                <div>
                    <strong>Alex Ljung</strong>
                    <p>Transfer</p>
                </div>
            </div>
            <div className="right">
                <div className="price">+ $ 1,000</div>
            </div>
        </a>
      
        <a href="app-transaction-detail.html" className="item">
            <div className="detail">
                <img src="assets/img/sample/avatar/avatar4.jpg" alt="img" className="image-block imaged w48" />
                <div>
                    <strong>Beatriz Brito</strong>
                    <p>Transfer</p>
                </div>
            </div>
            <div className="right">
                <div className="price text-danger">- $ 186</div>
            </div>
        </a>
       
    </div>
</div>

<div className="section full mt-4">
    <div className="section-heading padding">
        <h2 className="title">My Cards</h2>
        <a href="app-cards.html" className="link">View All</a>
    </div>

    <div className="carousel-single splide">
        <div className="splide__track">
            <ul className="splide__list">

                <li className="splide__slide">
                    <div className="card-block bg-primary">
                        <div className="card-main">
                            <div className="card-button dropdown">
                                <button type="button" className="btn btn-link btn-icon" data-bs-toggle="dropdown">
                                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="#">
                                        <ion-icon name="pencil-outline"></ion-icon>Edit
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <ion-icon name="close-outline"></ion-icon>Remove
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <ion-icon name="arrow-up-circle-outline"></ion-icon>Upgrade
                                    </a>
                                </div>
                            </div>
                            <div className="balance">
                                <span className="label">BALANCE</span>
                                <h1 className="title">$ 1,256,90</h1>
                            </div>
                            <div className="in">
                                <div className="card-number">
                                    <span className="label">Card Number</span>
                                    •••• 9905
                                </div>
                                <div className="bottom">
                                    <div className="card-expiry">
                                        <span className="label">Expiry</span>
                                        12 / 25
                                    </div>
                                    <div className="card-ccv">
                                        <span className="label">CCV</span>
                                        553
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="splide__slide">
                    <div className="card-block bg-dark">
                        <div className="card-main">
                            <div className="card-button dropdown">
                                <button type="button" className="btn btn-link btn-icon" data-bs-toggle="dropdown">
                                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="#">
                                        <ion-icon name="pencil-outline"></ion-icon>Edit
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <ion-icon name="close-outline"></ion-icon>Remove
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <ion-icon name="arrow-up-circle-outline"></ion-icon>Upgrade
                                    </a>
                                </div>
                            </div>
                            <div className="balance">
                                <span className="label">BALANCE</span>
                                <h1 className="title">$ 1,256,90</h1>
                            </div>
                            <div className="in">
                                <div className="card-number">
                                    <span className="label">Card Number</span>
                                    •••• 9905
                                </div>
                                <div className="bottom">
                                    <div className="card-expiry">
                                        <span className="label">Expiry</span>
                                        12 / 25
                                    </div>
                                    <div className="card-ccv">
                                        <span className="label">CCV</span>
                                        553
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="splide__slide">
                    <div className="card-block bg-secondary">
                        <div className="card-main">
                            <div className="card-button dropdown">
                                <button type="button" className="btn btn-link btn-icon" data-bs-toggle="dropdown">
                                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="#">
                                        <ion-icon name="pencil-outline"></ion-icon>Edit
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <ion-icon name="close-outline"></ion-icon>Remove
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <ion-icon name="arrow-up-circle-outline"></ion-icon>Upgrade
                                    </a>
                                </div>
                            </div>
                            <div className="balance">
                                <span className="label">BALANCE</span>
                                <h1 className="title">$ 1,256,90</h1>
                            </div>
                            <div className="in">
                                <div className="card-number">
                                    <span className="label">Card Number</span>
                                    •••• 9905
                                </div>
                                <div className="bottom">
                                    <div className="card-expiry">
                                        <span className="label">Expiry</span>
                                        12 / 25
                                    </div>
                                    <div className="card-ccv">
                                        <span className="label">CCV</span>
                                        553
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    </div>

</div>

<div className="section full mt-4">
    <div className="section-heading padding">
        <h2 className="title">Send Money</h2>
        <a href="#" className="link">Add New</a>
    </div>

    <div className="carousel-small splide">
        <div className="splide__track">
            <ul className="splide__list">
                <li className="splide__slide">
                    <a href="#">
                        <div className="user-card">
                            <img src="assets/img/sample/avatar/avatar2.jpg" alt="img" className="imaged w-100" />
                            <strong>Jurrien</strong>
                        </div>
                    </a>
                </li>
                <li className="splide__slide">
                    <a href="#">
                        <div className="user-card">
                            <img src="assets/img/sample/avatar/avatar3.jpg" alt="img" className="imaged w-100" />
                            <strong>Elwin</strong>
                        </div>
                    </a>
                </li>
                <li className="splide__slide">
                    <a href="#">
                        <div className="user-card">
                            <img src="assets/img/sample/avatar/avatar4.jpg" alt="img" className="imaged w-100" />
                            <strong>Alma</strong>
                        </div>
                    </a>
                </li>
                <li className="splide__slide">
                    <a href="#">
                        <div className="user-card">
                            <img src="assets/img/sample/avatar/avatar5.jpg" alt="img" className="imaged w-100" />
                            <strong>Justine</strong>
                        </div>
                    </a>
                </li>
                <li className="splide__slide">
                    <a href="#">
                        <div className="user-card">
                            <img src="assets/img/sample/avatar/avatar6.jpg" alt="img" className="imaged w-100" />
                            <strong>Maria</strong>
                        </div>
                    </a>
                </li>
                <li className="splide__slide">
                    <a href="#">
                        <div className="user-card">
                            <img src="assets/img/sample/avatar/avatar7.jpg" alt="img" className="imaged w-100" />
                            <strong>Pamela</strong>
                        </div>
                    </a>
                </li>
                <li className="splide__slide">
                    <a href="#">
                        <div className="user-card">
                            <img src="assets/img/sample/avatar/avatar8.jpg" alt="img" className="imaged w-100" />
                            <strong>Neville</strong>
                        </div>
                    </a>
                </li>
                <li className="splide__slide">
                    <a href="#">
                        <div className="user-card">
                            <img src="assets/img/sample/avatar/avatar9.jpg" alt="img" className="imaged w-100" />
                            <strong>Alex</strong>
                        </div>
                    </a>
                </li>
                <li className="splide__slide">
                    <a href="#">
                        <div className="user-card">
                            <img src="assets/img/sample/avatar/avatar10.jpg" alt="img" className="imaged w-100" />
                            <strong>Stina</strong>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>

<div className="section full mt-4">
    <div className="section-heading padding">
        <h2 className="title">Monthly Bills</h2>
        <a href="app-bills.html" className="link">View All</a>
    </div>
    <div className="carousel-multiple splide">
        <div className="splide__track">
            <ul className="splide__list">

                <li className="splide__slide">
                    <div className="bill-box">
                        <div className="img-wrapper">
                            <img src="assets/img/sample/brand/1.jpg" alt="img" className="image-block imaged w48" />
                        </div>
                        <div className="price">$ 14</div>
                        <p>Prime Monthly Subscription</p>
                        <a href="#" className="btn btn-primary btn-block btn-sm">PAY NOW</a>
                    </div>
                </li>

                <li className="splide__slide">
                    <div className="bill-box">
                        <div className="img-wrapper">
                            <img src="assets/img/sample/brand/2.jpg" alt="img" className="image-block imaged w48" />
                        </div>
                        <div className="price">$ 9</div>
                        <p>Music Monthly Subscription</p>
                        <a href="#" className="btn btn-primary btn-block btn-sm">PAY NOW</a>
                    </div>
                </li>

                <li className="splide__slide">
                    <div className="bill-box">
                        <div className="img-wrapper">
                            <div className="iconbox bg-danger">
                                <ion-icon name="medkit-outline"></ion-icon>
                            </div>
                        </div>
                        <div className="price">$ 299</div>
                        <p>Monthly Health Insurance</p>
                        <a href="#" className="btn btn-primary btn-block btn-sm">PAY NOW</a>
                    </div>
                </li>

                <li className="splide__slide">
                    <div className="bill-box">
                        <div className="img-wrapper">
                            <div className="iconbox">
                                <ion-icon name="card-outline"></ion-icon>
                            </div>
                        </div>
                        <div className="price">$ 962</div>
                        <p>Credit Card Statement
                        </p>
                        <a href="#" className="btn btn-primary btn-block btn-sm">PAY NOW</a>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</div>

<div className="section mt-4">
    <div className="section-heading">
        <h2 className="title">Saving Goals</h2>
        <a href="app-savings.html" className="link">View All</a>
    </div>
    <div className="goals">
        <div className="item">
            <div className="in">
                <div>
                    <h4>Gaming Console</h4>
                    <p>Gaming</p>
                </div>
                <div className="price">$ 499</div>
            </div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85"
                    aria-valuemin="0" aria-valuemax="100">85%</div>
            </div>
        </div>
     
        <div className="item">
            <div className="in">
                <div>
                    <h4>New House</h4>
                    <p>Living</p>
                </div>
                <div className="price">$ 100,000</div>
            </div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "55%"}} aria-valuenow="55"
                    aria-valuemin="0" aria-valuemax="100">55%</div>
            </div>
        </div>
     
        <div className="item">
            <div className="in">
                <div>
                    <h4>Sport Car</h4>
                    <p>Lifestyle</p>
                </div>
                <div className="price">$ 42,500</div>
            </div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "15%"}} aria-valuenow="15"
                    aria-valuemin="0" aria-valuemax="100">15%</div>
            </div>
        </div>
    </div>
</div>


<div className="section full mt-4 mb-3">
    <div className="section-heading padding">
        <h2 className="title">Lastest News</h2>
        <a href="app-blog.html" className="link">View All</a>
    </div>

    <div className="carousel-multiple splide">
        <div className="splide__track">
            <ul className="splide__list">

                <li className="splide__slide">
                    <a href="app-blog-post.html">
                        <div className="blog-card">
                            <img src="assets/img/sample/photo/1.jpg" alt="image" className="imaged w-100" />
                            <div className="text">
                                <h4 className="title">What will be the value of bitcoin in the next...</h4>
                            </div>
                        </div>
                    </a>
                </li>

                <li className="splide__slide">
                    <a href="app-blog-post.html">
                        <div className="blog-card">
                            <img src="assets/img/sample/photo/2.jpg" alt="image" className="imaged w-100" />
                            <div className="text">
                                <h4 className="title">Rules you need to know in business</h4>
                            </div>
                        </div>
                    </a>
                </li>

                <li className="splide__slide">
                    <a href="app-blog-post.html">
                        <div className="blog-card">
                            <img src="assets/img/sample/photo/3.jpg" alt="image" className="imaged w-100" />
                            <div className="text">
                                <h4 className="title">10 easy ways to save your money</h4>
                            </div>
                        </div>
                    </a>
                </li>

                <li className="splide__slide">
                    <a href="app-blog-post.html">
                        <div className="blog-card">
                            <img src="assets/img/sample/photo/4.jpg" alt="image" className="imaged w-100" />
                            <div className="text">
                                <h4 className="title">Follow the financial agenda with...</h4>
                            </div>
                        </div>
                    </a>
                </li>

            </ul>
        </div>
    </div>
  

</div>


<div className="appFooter">
    <div className="footer-title">
        Copyright © Finapp 2021. All Rights Reserved.
    </div>
    Bootstrap 5 based mobile template.
</div>

</div>

</>    
)

}


export default withRouter(Capsule);