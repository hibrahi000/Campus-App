import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import CampusPage from './CampusPage';
import EditCampus from './EditCampusPage';

const app = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/campusDetail" component={CampusPage} />
        <Route path="/editCampus" component={EditCampus} />
      </Switch>
    </div>
  </Router>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
