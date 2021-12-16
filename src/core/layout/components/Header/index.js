import React from 'react';

import clsx from 'clsx';

import { connect } from 'react-redux';

import AnimateLoading from '../../../utils/AnimateLoading';

import { setSidebarToggleMobile } from '../../../../redux/reducers/ThemeOptions';

import HeaderDrawer from '../HeaderDrawer';
import HeaderUserbox from '../HeaderUserbox';
import HeaderSearch from '../HeaderSearch';


const Header = (props) => {
  const {
    headerShadow,
    headerBgTransparent,
    sidebarToggleMobile,
    setSidebarToggleMobile
  } = props;
  
  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };

  return (
    <>
      <div
        className={clsx('app-header', {
          'app-header--shadow': headerShadow,
          'app-header--opacity-bg': headerBgTransparent
        })}>
        <AnimateLoading/>
        <div className="app-header--pane">
          <button
            className={clsx(
              'navbar-toggler hamburger hamburger--elastic toggle-mobile-sidebar-btn',
              { 'is-active': sidebarToggleMobile }
            )}
            onClick={toggleSidebarMobile}>
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
          <HeaderSearch />
          <div className="app-header-menu">
            <span className="position-relative">
              Welcome back!
            </span>
          </div>
        </div>
        <div className="app-header--pane">
          <HeaderDrawer />
          <HeaderUserbox />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  headerShadow: state.ThemeOptions.headerShadow,
  headerBgTransparent: state.ThemeOptions.headerBgTransparent,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
