import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/fontawesome-free-brands';

import { Link as ExternalLink } from './components/utils.js'
import Home from './pages/home.js';
import NNCalibration from './pages/nn_calibration.js';

const historyOptions = {
  queryKey : false
};

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <header className="navbar navbar-expand bg-dark text-light flex-column flex-md-row">
            <a className="navbar-brand m-0 mr-md-4 ml-md-4 link-unstyled small-caps h3" href="http://geoffpleiss.com">Geoff Pleiss</a>
            <ul className="navbar-nav m-0 mr-md-4 ml-md-4 flex-row ml-md-auto d-none d-md-flex">
              <li className="ml-3">
                <ExternalLink href="http://github.com/gpleiss">
                  <FontAwesomeIcon icon={faGithub} className="text-white" size="2x" title="Github" />
                </ExternalLink>
              </li>
              <li className="ml-3">
                <ExternalLink href="https://scholar.google.com/citations?user=XO8T-Y4AAAAJ&hl=en&oi=ao">
                  <img src="/images/gscholar-white.png" style={{width: "36px"}} alt="Google Scholar" />
                </ExternalLink>
              </li>
              <li className="ml-3">
                <ExternalLink href="http://instagram.com/gpleiss">
                  <FontAwesomeIcon icon={faInstagram} className="text-white" size="2x" title="Instagram" />
                </ExternalLink>
              </li>
            </ul>
          </header>

          <div>
            <Route exact path='/' component={ Home }/>
            <Route path="/nn_calibration" component={ NNCalibration }/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
