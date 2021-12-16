import React from 'react';
import { LogOut } from 'react-feather';
import { Link } from 'react-router-dom';
import { UncontrolledTooltip } from 'reactstrap';

const SidebarFooter = () => {
  return (
    <div className="app-sidebar--footer">
      <ul>
        <li>
          <Link
            to="/logout"
            className="btn btn-sm btn-transition-none px-2 mx-2"
            id="CryptoTooltip">
            <LogOut className="mr-2" />
            <UncontrolledTooltip
              target="CryptoTooltip"
              container=".app-sidebar--footer">
              Logout
            </UncontrolledTooltip>
            <span className="text-white">Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarFooter;
