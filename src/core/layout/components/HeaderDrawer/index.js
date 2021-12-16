import React, { useEffect } from 'react';
import clsx from 'clsx';
import { connect, useSelector, useDispatch, shallowEqual } from 'react-redux';
import { setHeaderDrawerToggle } from '../../../../redux/reducers/ThemeOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Badge,Button, UncontrolledTooltip} from 'reactstrap';
import * as actions from '../../../../redux/actions/UserActions';
import empty from '../../../assets/images/svg/icons/General/Empty.svg';
import { toast, Zoom } from 'react-toastify';
import SVG from 'react-inlinesvg';
import { Bell } from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';

const HeaderDots = (props) => {
  const dispatch = useDispatch();
  const { headerDrawerToggle, setHeaderDrawerToggle } = props;
  
  const { notifications } = useSelector(
    ({ UserReducer }) => ({
      notifications: UserReducer.notifications
    }), shallowEqual
  );

  const toogleHeaderDrawer = () => {
    setHeaderDrawerToggle(!headerDrawerToggle);
  };

  useEffect(() => {
    // dispatch(actions.getNotifications());
  }, [dispatch]);

  const deleteNotification = () => {
    toast.success('response.message', { 
      containerId: 'B', transition: Zoom 
    }); 
  };

  const deleteAllNotifications = () => {
    toast.success('response.message', { 
      containerId: 'B', transition: Zoom 
    });
  };

  return (
    <>
      <div className="d-flex align-items-center popover-header-wrapper">
        <span className="d-inline-block pr-2">
          <Button
            onClick={toogleHeaderDrawer}
            color="neutral-success"
            className="bg-neutral-success text-success font-size-lg p-0 d-inline-block shadow-none border-0 text-center d-44 rounded position-relative">
            <span>
              <Badge color="success" className="badge-circle">
                New notifications
              </Badge>
              <Bell />
            </span>
          </Button>
          <div className="app-drawer-content">
            <Button
              onClick={toogleHeaderDrawer}
              className="close-drawer-btn btn btn-sm"
              id="CloseDrawerTooltip">
              <div
                className={clsx('navbar-toggler hamburger hamburger--elastic', {
                  'is-active': headerDrawerToggle
                })}>
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </div>
            </Button>
            <UncontrolledTooltip target="CloseDrawerTooltip" placement="left">
              Close drawer
            </UncontrolledTooltip>
            <div className="vh-100 shadow-overflow">
              <PerfectScrollbar>
                <div className="p-4">
                  <div className="text-center font-weight-bold font-size-lg mb-0 text-black">
                    Notifications
                  </div>
                  {Array.isArray(notifications) && notifications.length >  0 ? <>
                    <div className="text-center">
                      <button 
                        className="btn-link-warning btn btn-link text-center"
                        onClick={()=>{deleteAllNotifications()}}>
                        <span>Clear all</span>
                      </button>
                    </div>
                    {notifications.map(n => <>
                      <div className="card rounded p-4 bg-secondary">
                        <div className="card-tr-actions z-over">
                          <button className="btn-transition-none btn-pill d-30 btn-icon p-0 btn btn-neutral-danger" onClick={()=>deleteNotification()}><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg></button>
                        </div>
                        <div className="task-wrapper">
                          <div className="task-item">
                            <div className="align-box-row">
                              <div>
                                <div className="bg-neutral-warning text-warning text-center font-size-xl btn-icon d-50 rounded-circle mb-3 mb-sm-0 align-self-center">
                                  <FontAwesomeIcon icon={['fas', 'bullhorn']}  />
                                </div>
                              </div>
                              <div className="pl-0 pl-sm-3">
                                <b>Happy Eid-El-Maulud Celebration</b>
                                <p className="text-black-50 mt-1 mb-0 font-size-sm">
                                  May the birth of the Holy Prophet Muhammad (SAW) bring lasting peace and blessings to our dear nation.
                                </p>
                                <small className="line-height-xs text-uppercase text-muted">
                                  Nov 12, 11:25am
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="divider my-3" />
                    </>
                    )}
                  </> : 
                    <div className="d-flex align-items-center justify-content-center vh-100">
                      <div className="text-center p-4 p-lg-5">
                        <div className="avatar-icon-wrapper rounded-circle m-0">
                          <div className="d-inline-flex justify-content-center text-warning d-70">
                            <SVG src={empty} />
                          </div>
                        </div>
                        <p className="font-weight-bold font-size-sm line-height-sm m-auto text-black-50 px-4" 
                        style={{maxWidth:'374px',lineHeight: '1.3em'}}>
                          Your most recent notifications will show up here when you start transacting.
                        </p>
                      </div>
                    </div>
                  }
                </div>
              </PerfectScrollbar>
            </div>
          </div>

          <div
            onClick={toogleHeaderDrawer}
            className={clsx('app-drawer-overlay', {
              'is-active': headerDrawerToggle
            })}
          />
        </span>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  headerDrawerToggle: state.ThemeOptions.headerDrawerToggle
});

const mapDispatchToProps = (dispatch) => ({
  setHeaderDrawerToggle: (enable) => dispatch(setHeaderDrawerToggle(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDots);

