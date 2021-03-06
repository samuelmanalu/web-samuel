import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import LandingPage from './pages/Landing-Page/LandingPage'
import NavBar from './component/Navbar/Navbar'

ReactDOM.render(
  <Router>
      <div>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={LandingPage} />
      </div>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
