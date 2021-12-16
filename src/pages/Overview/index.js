import React from 'react';
import SVG from 'react-inlinesvg';
import {toAbsoluteUrl} from '../../core/utils/StateLoading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';

import { Award, TrendingUp, Box, Sliders } from 'react-feather';

import particles4 from '../../core/assets/images/svg/icons/General/Shield-protected.svg';

import OverviewHeader from './OverviewHeader.js';

import play from '../../core/assets/images/svg/misc/play.svg';
import app from '../../core/assets/images/svg/misc/app.svg';

import {
  Row,
  Col,
  Nav,
  NavItem,
  Button,
  Container,
} from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import projectLogo from '../../core/assets/images/react.svg';

export default function Overview() {
  
  return (
    <>
      <div className="hero-wrapper bg-composed-wrapper bg-deep-sky">
        <div className="container">
          <OverviewHeader />
        </div>
        <div className="hero-wrapper--content">
          <div className="bg-composed-wrapper--bg bg-second opacity-6" />
          <div className="bg-composed-wrapper--bg bg-custom opacity-6" />
          <div className="bg-composed-wrapper--content">
            <div className="container z-over shadow-container-content-5 text-white text-center my-5">
              <div className="row align-items-center justify-content-center justify-content-lg-center py-5">
                <Col md="6" lg="6" xl="6">
                  <img
                    className="m-5 m-lg-0 w-100" style={{height:'500px'}}
                    src="https://zebpay.com/wp-content/uploads/2020/06/about-img-1.png"
                    alt="..."
                  />
                </Col>
                <Col md="6" lg="6" xl="6" className="text-lg-left">
                  <h2 className="display-3 font-weight-bold">
                    Pay bills, buy airtime, buy and sell <span style={{background: `linear-gradient(to right, #12CE5D 0%, #FFD80C 100%)`, WebkitBackgroundClip: `text`, WebkitTextFillColor: `transparent`}}>Crypto online simplified</span>
                  </h2>
                  <p className="font-size-xl py-3 text-white-50">
                    Paycrowdy is the easiest way to pay bills, buy Airtime and Purchase Data, buy and sell Bitcoin, Ethereum and Tether instantly at the best rates with zero fees.
                  </p>
                  <div className="py-4 mb-4 text-left">
                    <Link to="/dashboard" className="shadow-second-sm btn btn-warning btn-lg">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </span>
                      <span className="btn-wrapper--label">
                        Buy Crypto
                      </span>
                    </Link>
                  </div>
                </Col>
              </div>
            </div>
            <div className="shadow-container-blocks-5 z-below">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="var(--light)"
                  fillOpacity="1"
                  d="M0,32L120,58.7C240,85,480,139,720,138.7C960,139,1200,85,1320,58.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-light z-over" style={{ marginTop: '-70px' }}>
        <div className="container pb-5">
          <h4 className="font-weight-bold text-center text-second display-3">
            Get started in just a few minutes
          </h4>
          <div className="row mt-5">
          <Col lg="4">
              <div className="feature-box text-center mb-5">
                <img
                  src="https://d32exi8v9av3ux.cloudfront.net/website-app/2021/09/15/bf8a22/website-app/assets/homepages/nigeria/get-started/signup@2x.png"
                  style={{ height: 90 }}
                  className="mx-auto d-block img-fluid"
                  alt="..."
                />
                <h3 className="font-size-xl font-weight-bold my-3">Sign up</h3>
                <p className="text-black-50 mb-3">
                  Navigate to Sign up page, fill in your information details and create a free account seemlessly.
                </p>
              </div>
            </Col>
            <Col lg="4">
              <div className="feature-box text-center mb-5">
                <img
                  src="https://d32exi8v9av3ux.cloudfront.net/website-app/2021/09/15/bf8a22/website-app/assets/homepages/nigeria/get-started/deposit@2x.png"
                  style={{ height: 90 }}
                  className="mx-auto d-block img-fluid"
                  alt="..."
                />
                <h3 className="font-size-xl font-weight-bold my-3">
                  Process KYC & Deposit
                </h3>
                <p className="text-black-50 mb-3">
                  Choose your preferred payment method such as bank transfer or credit card to top up your Paycrowdy Wallet
                </p>
              </div>
            </Col>
            <Col lg="4">
              <div className="feature-box text-center mb-5">
                <img
                  src="https://d32exi8v9av3ux.cloudfront.net/website-app/2021/09/15/bf8a22/website-app/assets/homepages/nigeria/get-started/buy@2x.png"
                  style={{ height: 90 }}
                  className="mx-auto d-block img-fluid"
                  alt="..."
                />
                <h3 className="font-size-xl font-weight-bold my-3">Buy crypto</h3>
                <p className="text-black-50 mb-3">
                  Instantly start trading Bitcoin, Ethereum, Tether & Giftcard. Pay bills and lots more with cryptocurrency.  
                </p>
              </div>
            </Col>
          </div>
        </div>
      </div>

      <div className="container py-3 py-xl-3">
        <div className="p-0">
          <Row className="no-gutters">
            <div className="col-lg-5 col-mb-12 p-4 p-lg-5 d-flex align-items-center hover-scale-rounded">
              <img alt="..." className="w-100" src="https://dashboard.esetech.com.ng/images/crypto.png" />
            </div>
            <div className="col-lg-7 col-mb-12 d-flex align-items-center">
              <div className="p-4 text-center text-lg-left p-lg-5">
                <div className="mb-4">
                  <h1 className="display-3 my-3 font-weight-bold">Cryptocurrency Trading</h1>
                  <p className="font-size-xl text-black opacity-7">
                  We buy your Bitcoin, Ethereum, and other cryptos with zero transaction fees and then store them in your Paycrowdy Wallet as you sign up.
                  </p>
                  <p className="font-size-lg text-black-50">
                  Keep your bitcoin, ethereum, and other Cryptos in our safe, secure, and flexible Paycrowdy wallet. Convert your Crypto to Naira and back to other coins with ease.
                  </p>
                </div>
                <div>
                  <button className="btn btn-outline-primary btn-lg">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'question-circle']} />
                    </span>
                    <span className="btn-wrapper--label">Read more</span>
                  </button>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </div>

      <div className="bg-light">
        <div className="container py-3 py-xl-3">
          <div className="p-0">
            <Row className="no-gutters">
              <div className="col-lg-5 col-mb-12 p-4 p-lg-5 d-flex align-items-center hover-scale-rounded">
                <img alt="..." className="w-100" src="https://myecurrencyng.com/img/card-group.svg" />
              </div>
              <div className="col-lg-7 col-mb-12 d-flex align-items-center">
                <div className="p-4 text-center text-lg-left p-lg-5">
                  <div className="mb-4">
                    <h1 className="display-3 my-3 font-weight-bold">Buy & Sell Giftcards</h1>
                    <p className="font-size-xl text-black opacity-7">
                      You can convert your Giftcard to Naira, whether they are Physical cards or E-Codes with your Esetech wallet and earn some cash.
                    </p>
                    <p className="font-size-lg text-black-50">
                      Our Giftcard rates for Apple Store, Steam, Amazon, Google Play, iTunes, eBay etc. are very attractive for all our customers.
                    </p>
                  </div>
                  <div>
                    <button className="btn btn-outline-primary btn-lg">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['far', 'question-circle']} />
                      </span>
                      <span className="btn-wrapper--label">Read more</span>
                    </button>
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </div>
      </div>

      <div className="container py-3 py-xl-3">
        <div className="p-0">
          <Row className="no-gutters">
            <div className="col-lg-5 col-mb-12 p-4 p-lg-5 d-flex align-items-center hover-scale-rounded">
              <img alt="..." className="w-100" src="https://dashboard.esetech.com.ng/images/utilities.svg" />
            </div>
            <div className="col-lg-7 col-mb-12 d-flex align-items-center">
              <div className="p-4 text-center text-lg-left p-lg-5">
                <div className="mb-4">
                  <h1 className="display-3 my-3 font-weight-bold">Pay bills with Cryptocurrency</h1>
                  <p className="font-size-xl text-black opacity-7">
                    Don't run out of data. Get a top up on your MTN, GLO, Airtel, and 9Mobile sim at anytime of the day.
                  </p>
                  <p className="font-size-lg text-black-50">
                    Sign Up to get started with our fast, secure, and easy recharges.
                  </p>
                </div>
                <div>
                  <button className="btn btn-outline-primary btn-lg">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'question-circle']} />
                    </span>
                    <span className="btn-wrapper--label">Read more</span>
                  </button>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </div>

      <div className="bg-light pb-5">
        <div className="hero-wrapper bg-custom py-4 py-xl-5 bg-composed-wrapper">
          <div className="hero-wrapper--content">
            <div
              // className="bg-composed-wrapper--image rounded bg-composed-filter-rm opacity-6"
              // style={{ backgroundImage: 'url(' + particles3 + ')' }}
            />
            <div className="bg-composed-wrapper--content">
              <div className="container py-5 py-xl-5">
                <div className="text-center text-white">
                  <h1 className="display-3 mb-3 font-weight-bold">
                    Paycrowdy is trusted by:
                  </h1>
                  <p className="font-size-xxl m-0 py-3 text-white-50">
                    350+ custom-made, beautiful components, widgets, pages,
                    dashboards and applications.
                  </p>
                </div>
                
                <Col lg="10" className="mx-auto">
                  <div className="p-4 p-xl-5 hover-scale-rounded">
                    <Row className="no-gutters">
                      <Col xs="6" md="3" className="p-3">
                        <div className="divider-v bg-white-10 divider-v-md d-none d-lg-block" />
                        <div className="text-center">
                          <div>
                            <TrendingUp className="d-30 text-danger" />
                          </div>
                          <div className="mt-3 line-height-sm">
                            <b className="font-size-xxl pb-2">1000+</b>
                            <span className="text-white-50 font-size-lg d-block">
                              Customers
                            </span>
                          </div>
                        </div>
                      </Col>
                      <Col xs="6" md="3" className="p-3">
                        <div className="divider-v bg-white-10 divider-v-md d-none d-lg-block" />
                        <div className="text-center">
                          <div>
                            <Box className="d-30 text-warning" />
                          </div>
                          <div className="mt-3 line-height-sm">
                            <b className="font-size-xxl pb-2">5+</b>
                            <span className="text-white-50 font-size-lg d-block">
                              Businesses
                            </span>
                          </div>
                        </div>
                      </Col>
                      <Col xs="6" md="3" className="p-3">
                        <div className="divider-v bg-white-10 divider-v-md d-none d-lg-block" />
                        <div className="text-center">
                          <div>
                            <Award className="d-30 text-info" />
                          </div>
                          <div className="mt-3 line-height-sm">
                            <b className="font-size-xxl pb-2">100+</b>
                            <span className="text-white-50 font-size-lg d-block">
                              Transactions
                            </span>
                          </div>
                        </div>
                      </Col>
                      <Col xs="6" md="3" className="p-3">
                        <div className="text-center">
                          <div>
                            <Sliders className="d-30 text-success" />
                          </div>
                          <div className="mt-3 line-height-sm">
                            <b className="font-size-xxl pb-2">100+</b>
                            <span className="text-white-50 font-size-lg d-block">
                              Processed
                            </span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light">
        <div className="container pb-5">
          <div className="font-size-sm p-4">
            <div className="text-center my-2">
              <h4 className="font-weight-bold display-3">
                Safety and Security Guaranteed
              </h4>
            </div>
            <Row>
              <Col
                lg="6"
                className="d-flex overflow-hidden">
                <div className="d-block w-100 hover-scale-rounded">
                  <img src={particles4} className="img-fit-container" alt="..."/>
                </div>
              </Col>
              <Col
                lg="6"
                className="d-flex align-items-center justify-content-center flex-column">
                <div className="p-3">
                  <p className="text-second opacity-6 mt-3 mb-5 font-size-xl">
                    At Paycrowdy, we take security seriously so every payment made on our platform is 100% secure, even exceeding industry standard..
                  </p>
                  <div className="d-block d-xl-flex">
                    <div className="d-30 rounded-pill btn-icon bg-neutral-success font-size-xs text-success mt-0 mt-xl-1">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-sm"
                      />
                    </div>
                    <div className="pl-0 pl-xl-3">
                      <div className="font-weight-bold font-size-lg mb-1">
                        AI-Powered Fraud Management
                      </div>
                      <p className="mb-0 text-second opacity-7">
                        AI ensures our customers have a smooth, safe, and fast transaction experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="d-block d-xl-flex">
                    <div className="d-30 rounded-pill btn-icon bg-neutral-success font-size-xs text-success mt-0 mt-xl-1">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-sm"
                      />
                    </div>
                    <div className="pl-0 pl-xl-3">
                      <div className="font-weight-bold font-size-lg mb-1">
                        Multiple payment options
                      </div>
                      <p className="mb-0 text-second opacity-7">
                        We offer variety of payment methods to buy bitcoin online easily with local currencies at the best rates.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="d-block d-xl-flex">
                    <div className="d-30 rounded-pill btn-icon bg-neutral-success font-size-xs text-success mt-0 mt-xl-1">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-sm"
                      />
                    </div>
                    <div className="pl-0 pl-xl-3">
                      <div className="font-weight-bold font-size-lg mb-1">
                        Built for you
                      </div>
                      <p className="mb-0 text-second opacity-7">
                        With just a few clicks (or taps) you can trade bitcoin & giftcars safely on the web or any mobile device.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    
      <div className="bg-light pb-5">
        <div className="container">
          <div className="card p-5 bg-custom">
            <div className="d-block text-center text-xl-left d-xl-flex justify-content-between align-items-center">
              <div className="text-white">
                <h5 className="display-2 font-weight-bold mb-3">
                  Get started with Cryptocurrency now!
                </h5>
                <p className="font-size-lg opacity-7 mb-4">
                  Ready to join the future of money? Explore by creating a free account to see just how powerful Paycrowdy can meet your everyday need.
                </p>
              </div>
              <div className="ml-0 ml-xl-3 mt-5 mt-xl-0">
                <a href="https://api.whatsapp.com/send?phone=2348086548049" className="ml-3 shadow-none btn btn-outline-secondary" target="_blank">WhatsApp Line</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-second font-size-sm py-5">
        <div className="container">
          <div className="row pb-3">
            <div className="col-md-6 col-xl-4">
              <div className="my-4 my-xl-0">
                <div className="d-flex align-items-center mb-3">
                  <a href="#" className="mobile-app mr-1">
                    <SVG src={play} />
                  </a>
                  <a href="#" className="mobile-app ml-1">
                    <SVG src={app} />
                  </a>
                </div>
                <p className="text-white-50">
                  Send, receive, buy, sell and pay bills faster using the Paycrowdy mobile app, available on Google and Apple playstore.
                </p>
              </div>
              <ul className="nav-transparent flex-column nav">
                <li className="nav-item">
                  <a href="mailto:support@paycrowdy.com" className="px-0 py-1 text-white-50 nav-link">
                    support@paycrowdy.com
                  </a>
                </li>
                <li className="nav-item">
                  <a href="tel:+2348086548049" className="px-0 py-1 text-white-50 nav-link">
                    +2348086548049
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-xl-2">
              <div className="my-4 my-xl-0">
                <h6 className="text-white font-weight-bold mb-3 text-uppercase">
                  Company
                </h6>
                <ul className="nav-transparent flex-column nav">
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 py-1 text-white-50 nav-link">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 py-1 text-white-50 nav-link">
                      Careers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 py-1 text-white-50 nav-link">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-xl-2">
              <div className="my-4 my-xl-0">
                <h6 className="text-white font-weight-bold mb-3 text-uppercase">
                  Products
                </h6>
                <ul className="nav-transparent flex-column nav">
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 py-1 text-white-50 nav-link">
                      Bills Payment
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 py-1 text-white-50 nav-link">
                      Cryptocurrency
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 py-1 text-white-50 nav-link">
                      Giftcards
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-xl-2">
              <div className="my-4 my-xl-0">
                <h6 className="text-white font-weight-bold mb-3 text-uppercase">
                  Help
                </h6>
                <ul className="nav-transparent flex-column nav">
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 py-1 text-white-50 nav-link">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 py-1 text-white-50 nav-link">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 py-1 text-white-50 nav-link">
                      Learn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-xl-2">
              <div className="my-4 my-xl-0">
                <h6 className="text-white font-weight-bold mb-3 text-uppercase">
                  Social 
                </h6>
                <ul className="nav-transparent justify-content-start nav">
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 mr-3 text-white-50 nav-link">
                      <FontAwesomeIcon
                        icon={['fab', 'facebook']}
                        className="font-size-lg"
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 mr-3 text-white-50 nav-link">
                      <FontAwesomeIcon
                        icon={['fab', 'twitter']}
                        className="font-size-lg"
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 mr-3 text-white-50 nav-link">
                      <FontAwesomeIcon
                        icon={['fab', 'google']}
                        className="font-size-lg"
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 mr-3 text-white-50 nav-link">
                      <FontAwesomeIcon
                        icon={['fab', 'instagram']}
                        className="font-size-lg"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="divider mt-4 bg-white opacity-2" />
          <div className="divider mb-4 bg-white opacity-2" />
          <div className="py-3 d-block d-lg-flex align-items-center justify-content-between">
            <div className="text-center d-block mb-3 mb-md-0 text-white">
              Copyright &copy; 2020 - Vatics Systems Limited
            </div>
            <Nav className="nav-transparent justify-content-center">
              <NavItem>
                <NavLinkStrap
                  className="text-white-50"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  Privacy Policy
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap
                  className="text-white-50"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  Terms of Service
                </NavLinkStrap>
              </NavItem>
            </Nav>
          </div>
        </div>
      </div>
    </>
  );
}
