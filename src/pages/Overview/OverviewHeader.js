import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Collapse,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import projectLogo from '../../core/assets/images/react.svg';
import { NavLink, Link } from 'react-router-dom';

export default function LivePreviewExample() {
  const [activeTab, setActiveTab] = useState('1');

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <>
      <div className="header-nav-wrapper header-nav-wrapper-lg navbar-dark">
        <div className="app-nav-logo">
          <NavLink
            to="/"
            title="Bamburgh React Admin Dashboard with Reactstrap PRO"
            className="app-nav-logo app-nav-logo--light">
            <div className="app-nav-logo--icon rounded-lg shadow-second-sm bg-secondary border-0">
              <img
                alt="Bamburgh React Admin Dashboard with Reactstrap PRO"
                src={projectLogo}
              />
            </div>
            <div className="app-nav-logo--text">
              <b>Paycrowdy1</b>
            </div>
          </NavLink>
        </div>
        <div className="header-nav-menu d-none d-lg-block">
          <ul className="d-flex nav nav-neutral-first justify-content-center">
            <li>
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="font-weight-bold rounded-lg text-white px-3">
                Company
                <span className="opacity-5 dropdown-arrow">
                  <FontAwesomeIcon icon={['fas', 'angle-down']} />
                </span>
              </a>
              <div className="submenu-dropdown submenu-dropdown--xl">
                <Row className="no-gutters">
                  <Col lg="7" className="z-over">
                    <div className="shadow-sm-dark w-100 bg-white p-3 rounded">
                      <div className="px-4 text-uppercase pb-2 text-primary font-weight-bold font-size-sm">
                        Dashboards
                      </div>
                      <Nav
                        pills
                        className="nav-neutral-primary mb-3 nav-pills-rounded flex-column">
                        <NavItem>
                          <NavLinkStrap
                            tag={NavLink}
                            to="/DashboardMonitoring"
                            className="px-4 d-flex align-items-center">
                            <span>Monitoring</span>
                            <FontAwesomeIcon
                              icon={['fas', 'angle-right']}
                              className="opacity-6 ml-auto"
                            />
                          </NavLinkStrap>
                        </NavItem>
                        <NavItem>
                          <NavLinkStrap
                            tag={NavLink}
                            to="/DashboardCommerce"
                            className="px-4 d-flex align-items-center">
                            <span>Commerce</span>
                            <FontAwesomeIcon
                              icon={['fas', 'angle-right']}
                              className="opacity-6 ml-auto"
                            />
                          </NavLinkStrap>
                        </NavItem>
                        <NavItem>
                          <NavLinkStrap
                            tag={NavLink}
                            to="/DashboardAnalytics"
                            className="px-4 d-flex align-items-center">
                            <span>Analytics</span>
                            <FontAwesomeIcon
                              icon={['fas', 'angle-right']}
                              className="opacity-6 ml-auto"
                            />
                          </NavLinkStrap>
                        </NavItem>
                        <NavItem>
                          <NavLinkStrap
                            tag={NavLink}
                            to="/DashboardStatistics"
                            className="px-4 d-flex align-items-center">
                            <span>Statistics</span>
                            <FontAwesomeIcon
                              icon={['fas', 'angle-right']}
                              className="opacity-6 ml-auto"
                            />
                          </NavLinkStrap>
                        </NavItem>
                      </Nav>
                      <div className="px-4 text-uppercase pb-2 text-primary font-weight-bold font-size-sm">
                        Apps Pages
                      </div>
                      <Nav
                        pills
                        className="nav-neutral-primary nav-pills-rounded flex-column">
                        <NavItem>
                          <NavLinkStrap
                            tag={NavLink}
                            to="/PageCalendar"
                            className="px-4 d-flex align-items-center">
                            <span>Calendar</span>
                            <FontAwesomeIcon
                              icon={['fas', 'angle-right']}
                              className="opacity-6 ml-auto"
                            />
                          </NavLinkStrap>
                        </NavItem>
                        <NavItem>
                          <NavLinkStrap
                            tag={NavLink}
                            to="/PageChat"
                            className="px-4 d-flex align-items-center">
                            <span>Chat</span>
                            <FontAwesomeIcon
                              icon={['fas', 'angle-right']}
                              className="opacity-6 ml-auto"
                            />
                          </NavLinkStrap>
                        </NavItem>
                        <NavItem>
                          <NavLinkStrap
                            tag={NavLink}
                            to="/PageFileManager"
                            className="px-4 d-flex align-items-center">
                            <span>File Manager</span>
                            <FontAwesomeIcon
                              icon={['fas', 'angle-right']}
                              className="opacity-6 ml-auto"
                            />
                          </NavLinkStrap>
                        </NavItem>
                        <NavItem>
                          <NavLinkStrap
                            tag={NavLink}
                            to="/PageProjects"
                            className="px-4 d-flex align-items-center">
                            <span>Projects</span>
                            <FontAwesomeIcon
                              icon={['fas', 'angle-right']}
                              className="opacity-6 ml-auto"
                            />
                          </NavLinkStrap>
                        </NavItem>
                        <NavItem>
                          <NavLinkStrap
                            tag={NavLink}
                            to="/PageProfile"
                            className="px-4 d-flex align-items-center">
                            <span>Profile</span>
                            <FontAwesomeIcon
                              icon={['fas', 'angle-right']}
                              className="opacity-6 ml-auto"
                            />
                          </NavLinkStrap>
                        </NavItem>
                      </Nav>
                    </div>
                  </Col>
                  <Col lg="5" className="d-flex align-items-center">
                    <div className="shadow-sm-dark w-100 bg-second p-4 rounded-right">
                      <div className="px-4 text-uppercase pb-2 text-white font-weight-bold font-size-sm">
                        Individual Apps
                      </div>
                      <Nav
                        pills
                        className="nav-transparent nav-pills-rounded flex-column">
                        <NavItem>
                          <NavLinkStrap
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="active px-4 text-white-50 d-flex align-items-center">
                            <span>General</span>
                            <FontAwesomeIcon
                              icon={['fas', 'angle-right']}
                              className="opacity-6 ml-auto"
                            />
                          </NavLinkStrap>
                        </NavItem>
                        <NavItem>
                          <NavLinkStrap
                            href="https://demo.uifort.com/bamburgh-react-crypto-application-reactstrap-pro-demo"
                            target="_blank"
                            className="px-4 d-flex text-white-50 align-items-center">
                            <span>Crypto</span>
                            <FontAwesomeIcon
                              icon={['fas', 'angle-right']}
                              className="opacity-6 ml-auto"
                            />
                          </NavLinkStrap>
                        </NavItem>
                        <NavItem>
                          <NavLinkStrap
                            href="https://demo.uifort.com/bamburgh-react-messenger-application-reactstrap-pro-demo"
                            target="_blank"
                            className="px-4 d-flex text-white-50 align-items-center">
                            <span>Messenger</span>
                            <FontAwesomeIcon
                              icon={['fas', 'angle-right']}
                              className="opacity-6 ml-auto"
                            />
                          </NavLinkStrap>
                        </NavItem>
                        <NavItem>
                          <NavLinkStrap
                            href="https://demo.uifort.com/bamburgh-react-commerce-application-reactstrap-pro-demo"
                            target="_blank"
                            className="px-4 d-flex text-white-50 align-items-center">
                            <span>Commerce</span>
                            <FontAwesomeIcon
                              icon={['fas', 'angle-right']}
                              className="opacity-6 ml-auto"
                            />
                          </NavLinkStrap>
                        </NavItem>
                        <NavItem>
                          <NavLinkStrap
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="disabled px-4 d-flex text-white-50 align-items-center disabled">
                            <span>Learning</span>
                          </NavLinkStrap>
                        </NavItem>
                        <NavItem>
                          <NavLinkStrap
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="px-4 d-flex text-white-50 align-items-center disabled">
                            <span>Monitoring</span>
                          </NavLinkStrap>
                        </NavItem>
                        <NavItem>
                          <NavLinkStrap
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="px-4 d-flex text-white-50 align-items-center disabled">
                            <span>Fleet Manager</span>
                          </NavLinkStrap>
                        </NavItem>
                        <NavItem>
                          <NavLinkStrap
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="px-4 d-flex text-white-50 align-items-center disabled">
                            <span>Banking</span>
                          </NavLinkStrap>
                        </NavItem>
                      </Nav>
                    </div>
                  </Col>
                </Row>
              </div>
            </li>
            <li>
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="font-weight-bold rounded-lg text-white px-3">
                Products
                <span className="opacity-5 dropdown-arrow">
                  <FontAwesomeIcon icon={['fas', 'angle-down']} />
                </span>
              </a>
              <div className="submenu-dropdown submenu-dropdown--xxl">
                <Row className="no-gutters">
                  <Col lg="6" className="z-over">
                    <div className="shadow-sm-dark w-100 bg-white p-3 rounded">
                      <div className="px-3 text-uppercase pb-2 text-primary font-weight-bold font-size-sm">
                        Marketing
                      </div>
                      <Row className="no-gutters">
                        <Col lg="6">
                          <Nav
                            pills
                            className="nav-neutral-primary nav-pills-rounded mb-3 flex-column">
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/MarketingCta"
                                className="d-flex align-items-center">
                                <span>Call to Action</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/MarketingFeatureSections"
                                className="d-flex align-items-center">
                                <span>Feature Sections</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/MarketingFooters"
                                className="d-flex align-items-center">
                                <span>Footers</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/MarketingHeaders"
                                className="d-flex align-items-center">
                                <span>Headers</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/MarketingHero"
                                className="d-flex align-items-center">
                                <span>Hero</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                          </Nav>
                        </Col>
                        <Col lg="6">
                          <Nav
                            pills
                            className="nav-neutral-primary nav-pills-rounded flex-column">
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/MarketingIcons"
                                className="d-flex align-items-center">
                                <span>Icon Boxes</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/MarketingPartners"
                                className="d-flex align-items-center">
                                <span>Partners</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/MarketingPricingTables"
                                className="d-flex align-items-center">
                                <span>Pricing Tables</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/MarketingTestimonials"
                                className="d-flex align-items-center">
                                <span>Testimonials</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                          </Nav>
                        </Col>
                      </Row>
                      <div className="px-3 text-uppercase pb-2 text-primary font-weight-bold font-size-sm">
                        Elements
                      </div>
                      <Row className="no-gutters">
                        <Col lg="6">
                          <Nav
                            pills
                            className="nav-neutral-primary nav-pills-rounded mb-3 flex-column">
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/ElementsAvatars"
                                className="d-flex align-items-center">
                                <span>Avatars</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/ElementsBadges"
                                className="d-flex align-items-center">
                                <span>Badges</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/ElementsButtons"
                                className="d-flex align-items-center">
                                <span>Buttons</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/ElementsDropdowns"
                                className="d-flex align-items-center">
                                <span>Dropdowns</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/ElementsIcons"
                                className="d-flex align-items-center">
                                <span>Icons</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/ElementsNavigationMenus"
                                className="d-flex align-items-center">
                                <span>Navigation Menus</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/ElementsPagination"
                                className="d-flex align-items-center">
                                <span>Pagination</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                          </Nav>
                        </Col>
                        <Col lg="6">
                          <Nav
                            pills
                            className="nav-neutral-primary nav-pills-rounded flex-column">
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/ElementsProgressBars"
                                className="d-flex align-items-center">
                                <span>Progress Bars</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/ElementsRatings"
                                className="d-flex align-items-center">
                                <span>Ratings</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/ElementsRibbons"
                                className="d-flex align-items-center">
                                <span>Ribbons</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/ElementsScrollable"
                                className="d-flex align-items-center">
                                <span>Scrollable Boxes</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/ElementsSearchBars"
                                className="d-flex align-items-center">
                                <span>Search Bars</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/ElementsTimelines"
                                className="d-flex align-items-center">
                                <span>Timelines</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/ElementsUtilitiesHelpers"
                                className="d-flex align-items-center">
                                <span>Utilities</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                          </Nav>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col lg="6" className="d-flex align-items-center">
                    <div className="shadow-sm-dark w-100 bg-deep-sky p-4 rounded-right">
                      <div className="px-2 text-uppercase pb-2 text-white font-weight-bold font-size-sm">
                        Data Display
                      </div>
                      <Row>
                        <Col lg="6">
                          <Nav
                            pills
                            className="nav-transparent nav-pills-rounded flex-column">
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/BlocksChartsLarge"
                                className="px-2 text-white-50 d-flex align-items-center">
                                <span>Charts Large</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/BlocksChartsSmall"
                                className="px-2 d-flex text-white-50 align-items-center">
                                <span>Charts Small</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/BlocksComposed"
                                className="px-2 d-flex text-white-50 align-items-center">
                                <span>Composed Text</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/BlocksGrids"
                                className="px-2 d-flex text-white-50 align-items-center">
                                <span>Grids</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/BlocksIcons"
                                className="px-2 d-flex text-white-50 align-items-center">
                                <span>Icon Cards</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/BlocksImages"
                                className="px-2 d-flex text-white-50 align-items-center">
                                <span>Image Cards</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/BlocksListsLarge"
                                className="px-2 d-flex text-white-50 align-items-center">
                                <span>Lists Large</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/BlocksListsSmall"
                                className="px-2 d-flex text-white-50 align-items-center">
                                <span>Lists Small</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                          </Nav>
                        </Col>
                        <Col lg="6">
                          <Nav
                            pills
                            className="nav-transparent nav-pills-rounded flex-column">
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/BlocksNavigation"
                                className="px-2 d-flex text-white-50 align-items-center">
                                <span>Navigation</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/BlocksProfilesSmall"
                                className="px-2 d-flex text-white-50 align-items-center">
                                <span>Profile Cards</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/BlocksProgressCircular"
                                className="px-2 d-flex text-white-50 align-items-center">
                                <span>Progress Circular</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/BlocksProgressHorizontal"
                                className="px-2 d-flex text-white-50 align-items-center">
                                <span>Progress Horizontal</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/BlocksSparklinesLarge"
                                className="px-2 d-flex text-white-50 align-items-center">
                                <span>Sparklines Large</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/BlocksSparklinesSmall"
                                className="px-2 d-flex text-white-50 align-items-center">
                                <span>Sparklines Small</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                tag={NavLink}
                                to="/BlocksStatistics"
                                className="px-2 d-flex text-white-50 align-items-center">
                                <span>Statistics</span>
                                <FontAwesomeIcon
                                  icon={['fas', 'angle-right']}
                                  className="opacity-6 ml-auto"
                                />
                              </NavLinkStrap>
                            </NavItem>
                          </Nav>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </li>
            <li>
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="font-weight-bold rounded-lg text-white px-3">
                Help
                <span className="opacity-5 dropdown-arrow">
                  <FontAwesomeIcon icon={['fas', 'angle-down']} />
                </span>
              </a>
              <div className="submenu-dropdown submenu-dropdown--lg">
                <div className="shadow-sm-dark w-100 bg-white p-3 rounded">
                  <Nav
                    pills
                    className="nav-neutral-primary nav-pills-rounded mb-3 flex-column">
                    <NavItem>
                      <NavLinkStrap
                        tag={NavLink}
                        to="/blog"
                        className="d-flex align-items-center">
                        <span>Blog</span>
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        tag={NavLink}
                        to="/faqs"
                        className="d-flex align-items-center">
                        <span>FAQs</span>
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        tag={NavLink}
                        to="/learn"
                        className="d-flex align-items-center">
                        <span>Learn</span>
                      </NavLinkStrap>
                    </NavItem>
                  </Nav>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
          <span className="d-none d-lg-block">
            <Link to="/auth/login" className="shadow-none btn btn-outline-secondary font-size-sm text-uppercase mr-3">Login</Link>
            <Link to="/auth/register" className="text-nowrap font-size-sm text-uppercase shadow-second-sm btn btn-warning">Register</Link>
          </span>
          <span className="d-block d-lg-none">
            <button
              onClick={toggle}
              className={clsx('navbar-toggler hamburger hamburger--elastic', {
                'is-active': collapse
              })}>
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </span>
        </div>
        <div className="d-flex d-lg-none">
          <Collapse
            isOpen={collapse}
            className="nav-collapsed-wrapper shadow-lg navbar-collapse">
            <div className="nav-inner-wrapper">
              <Button
                onClick={toggle}
                color="danger"
                className="btn-icon d-40 shadow-sm hover-scale-lg btn-animated-icon-sm nav-toggle-inner-btn p-0">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'times']} />
                </span>
              </Button>
              <div className="p-3">
                <div className="px-4 text-uppercase py-2 text-primary font-weight-bold font-size-sm">
                  Dashboards
                </div>
                <Nav
                  pills
                  className="nav-neutral-primary mb-3 nav-pills-rounded flex-column">
                  <NavItem>
                    <NavLinkStrap
                      tag={NavLink}
                      to="/DashboardMonitoring"
                      className="px-4 d-flex align-items-center">
                      <span>Monitoring</span>
                      <FontAwesomeIcon
                        icon={['fas', 'angle-right']}
                        className="opacity-6 ml-auto"
                      />
                    </NavLinkStrap>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap
                      tag={NavLink}
                      to="/DashboardCommerce"
                      className="px-4 d-flex align-items-center">
                      <span>Commerce</span>
                      <FontAwesomeIcon
                        icon={['fas', 'angle-right']}
                        className="opacity-6 ml-auto"
                      />
                    </NavLinkStrap>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap
                      tag={NavLink}
                      to="/DashboardAnalytics"
                      className="px-4 d-flex align-items-center">
                      <span>Analytics</span>
                      <FontAwesomeIcon
                        icon={['fas', 'angle-right']}
                        className="opacity-6 ml-auto"
                      />
                    </NavLinkStrap>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap
                      tag={NavLink}
                      to="/DashboardStatistics"
                      className="px-4 d-flex align-items-center">
                      <span>Statistics</span>
                      <FontAwesomeIcon
                        icon={['fas', 'angle-right']}
                        className="opacity-6 ml-auto"
                      />
                    </NavLinkStrap>
                  </NavItem>
                </Nav>
                <div className="px-4 text-uppercase pb-2 text-primary font-weight-bold font-size-sm">
                  Apps Pages
                </div>
                <Nav
                  pills
                  className="nav-neutral-primary nav-pills-rounded flex-column">
                  <NavItem>
                    <NavLinkStrap
                      tag={NavLink}
                      to="/PageCalendar"
                      className="px-4 d-flex align-items-center">
                      <span>Calendar</span>
                      <FontAwesomeIcon
                        icon={['fas', 'angle-right']}
                        className="opacity-6 ml-auto"
                      />
                    </NavLinkStrap>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap
                      tag={NavLink}
                      to="/PageChat"
                      className="px-4 d-flex align-items-center">
                      <span>Chat</span>
                      <FontAwesomeIcon
                        icon={['fas', 'angle-right']}
                        className="opacity-6 ml-auto"
                      />
                    </NavLinkStrap>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap
                      tag={NavLink}
                      to="/PageFileManager"
                      className="px-4 d-flex align-items-center">
                      <span>File Manager</span>
                      <FontAwesomeIcon
                        icon={['fas', 'angle-right']}
                        className="opacity-6 ml-auto"
                      />
                    </NavLinkStrap>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap
                      tag={NavLink}
                      to="/PageProjects"
                      className="px-4 d-flex align-items-center">
                      <span>Projects</span>
                      <FontAwesomeIcon
                        icon={['fas', 'angle-right']}
                        className="opacity-6 ml-auto"
                      />
                    </NavLinkStrap>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap
                      tag={NavLink}
                      to="/PageProfile"
                      className="px-4 d-flex align-items-center">
                      <span>Profile</span>
                      <FontAwesomeIcon
                        icon={['fas', 'angle-right']}
                        className="opacity-6 ml-auto"
                      />
                    </NavLinkStrap>
                  </NavItem>
                </Nav>
              </div>
              <div className="divider" />
              <div className="m-3">
                <div className="bg-primary px-3 py-4 rounded">
                  <div className="px-4 text-uppercase pb-2 text-white font-weight-bold font-size-sm">
                    Individual Apps
                  </div>
                  <Nav
                    pills
                    className="nav-transparent nav-pills-rounded flex-column">
                    <NavItem>
                      <NavLinkStrap
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="active px-4 text-white-50 d-flex align-items-center">
                        <span>General</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        href="https://demo.uifort.com/bamburgh-react-crypto-application-reactstrap-pro-demo"
                        target="_blank"
                        className="px-4 d-flex text-white-50 align-items-center">
                        <span>Crypto</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        href="https://demo.uifort.com/bamburgh-react-messenger-application-reactstrap-pro-demo"
                        target="_blank"
                        className="px-4 d-flex text-white-50 align-items-center">
                        <span>Messenger</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        href="https://demo.uifort.com/bamburgh-react-commerce-application-reactstrap-pro-demo"
                        target="_blank"
                        className="px-4 d-flex text-white-50 align-items-center">
                        <span>Commerce</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="disabled px-4 d-flex text-white-50 align-items-center disabled">
                        <span>Learning</span>
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center disabled">
                        <span>Monitoring</span>
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center disabled">
                        <span>Fleet Manager</span>
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center disabled">
                        <span>Banking</span>
                      </NavLinkStrap>
                    </NavItem>
                  </Nav>
                </div>
              </div>
              <div className="divider" />
              <div className="card-footer bg-secondary text-center p-3">
                <Button
                  tag="a"
                  href="https://uifort.com/template/bamburgh-react-admin-dashboard-reactstrap-pro"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="rounded-lg text-nowrap font-size-sm text-uppercase shadow-second-sm"
                  color="success">
                  Buy Now
                </Button>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
      <div
        className={clsx('collapse-page-trigger', { 'is-active': collapse })}
        onClick={toggle}
      />
    </>
  );
}
