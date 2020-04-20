import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/fontawesome-free-brands';

import { Navbar, NavbarToggler, Collapse, NavbarBrand, Nav, NavItem, NavLink,
         UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Home from './pages/home.js';
import NNCalibration from './pages/nn_calibration.js';

// Assets
import './App.css';
import gscholarWhite from './images/gscholar-white.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      isNavbarOpen: false
    };
  }

  toggleNavbar() {
    this.setState({
      isNavbarOpen: !this.state.isNavbarOpen
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand className="m-0 mr-md-4 ml-md-4 link-unstyled small-caps h3" href="/">
              Geoff Pleiss
            </NavbarBrand>
						<NavbarToggler onClick={this.toggleNavbar} />
						<Collapse isOpen={this.state.isNavbarOpen} navbar>
							<Nav className="mr-auto ml-md-4" navbar>
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										Projects
									</DropdownToggle>
									<DropdownMenu>
										<DropdownItem href="/nn_calibration">
											Neural Network Calibration
										</DropdownItem>
										<DropdownItem href="https://github.com/cornellius-gp/gpytorch" target="_blank">
											Efficient Gaussian Processes
										</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										Software
									</DropdownToggle>
									<DropdownMenu>
										<DropdownItem href="https://gpytorch.ai" target="_blank">
                      GPyTorch
										</DropdownItem>
										<DropdownItem href="https://github.com/gpleiss/efficient_densenet_pytorch" target="_blank">
                      Efficient DenseNets
										</DropdownItem>
										<DropdownItem href="https://github.com/gpleiss/temperature_scaling" target="_blank">
                      Temperature Scaling
										</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
                <NavItem>
                  <NavLink href="https://gpytorch.ai" target="_blank">
                    GPyTorch
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/geoff_pleiss_cv.pdf" target="_blank">
                    CV
                  </NavLink>
                </NavItem>
							</Nav>
						</Collapse>
            <Nav navbar className="m-0 mr-md-4 ml-md-4 ml-auto d-none d-md-flex">
              <NavItem className="ml-3">
                <NavLink className="text-white" href="http://github.com/gpleiss" target="_blank">
                  <FontAwesomeIcon icon={faGithub} size="2x" title="Github" />
                </NavLink>
              </NavItem>
              <NavItem className="ml-3">
                <NavLink className="text-white" href="https://scholar.google.com/citations?user=XO8T-Y4AAAAJ&hl=en&oi=ao" target="_blank">
                  <img src={gscholarWhite} style={{width: "36px"}} alt="Google Scholar" />
                </NavLink>
              </NavItem>
              <NavItem className="ml-3">
                <NavLink className="text-white" href="http://instagram.com/gpleiss" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} size="2x" title="Instagram" />
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>

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
