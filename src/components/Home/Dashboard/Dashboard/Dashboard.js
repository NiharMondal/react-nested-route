import React from 'react';
import { useRouteMatch,Link, Switch, Route } from 'react-router-dom';
import Service from '../Service/Service';
import Topic from '../Topic/Topic';
import './Dashboard.css'
const Dashboard = () => {
  let { path, url } = useRouteMatch();
  
  return (
    <div className="content_wrapper">
      <div className="link_wrapper">
        <h1>Doctors Dashboard</h1>
        <ul>
          <li> <Link to={`${url}/doctor`}>Doctor</Link></li>
          <li> <Link to={`${url}/patients`}>Patients</Link></li>
          <li> <Link to={`${url}/service`}>Service</Link></li>
        </ul>
      </div>
      <div className="topic_wrapper">
        <Switch>
          <Route exact path={path}>
            <Service/>
          </Route>
          <Route path={`${path}/:topicId`}>
            <Topic />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;