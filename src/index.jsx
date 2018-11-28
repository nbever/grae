import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './fonts/badges/style.scss';

import Welcome from './Welcome';

const Site = () => {

  return (
    <Router>
      <Switch>
        <Route component={Welcome} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Site />, document.getElementById('app'));
