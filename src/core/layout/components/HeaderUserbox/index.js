import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Badge,
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';
import { Settings, UserCheck, LogOut } from 'react-feather';
import { Link } from 'react-router-dom';
import avatar7 from '../../../assets/images/svg/icons/General/avatar.svg';

const HeaderUserbox = () => {
  return (
    <>
      <div className="app-drawer-wrapper">
        <UncontrolledDropdown className="position-relative ml-2">
          <DropdownToggle
            color="link"
            className="p-0 text-left d-flex btn-transition-none align-items-center">
            <div className="d-block p-0 avatar-icon-wrapper">
              <Badge color="success" className="badge-circle p-top-a">
                Online
              </Badge>
              <div className="avatar-icon rounded">
                <img src={avatar7} alt="..." />
              </div>
            </div>
            <span className="pl-1 pl-xl-3">
              <FontAwesomeIcon
                icon={['fas', 'angle-down']}
                className="opacity-5"
              />
            </span>
          </DropdownToggle>
          <DropdownMenu right className="dropdown-menu-lg overflow-hidden p-0">
            <ListGroup flush className="text-left bg-transparent">
              <ListGroupItem className="rounded-top">
                <Nav pills className="nav-neutral-primary flex-column">
                  <NavItem>
                    <Link to="/logout" className="nav-link">
                      <div className="nav-link-icon">
                        <LogOut />
                      </div>
                      <span>Log out</span>
                    </Link>
                  </NavItem>
                </Nav>
              </ListGroupItem>
            </ListGroup>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </>
  );
};

export default HeaderUserbox;
