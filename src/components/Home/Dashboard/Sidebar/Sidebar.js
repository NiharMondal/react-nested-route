import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Sidebar = () => {
  let { path,url } = useRouteMatch();
  return (
    <div>
      <nav className="sidebar">
        <ul className="list_Wrapper">
          <Link to={`${url}/prescription`}>
          <li className="side_link">
            Prescription
          </li>
          </Link>
          <Link to="/doctor">
          <li className="side_link">
            Doctor
          </li>
          </Link>
          <Link to="/patients">
          <li className="side_link">
            Patients
          </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;