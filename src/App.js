import React from 'react';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/fontawesome-free-brands';

import { Navbar, NavbarToggler, Collapse, NavbarBrand, Nav, NavItem, NavLink,
         UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Home from './pages/home.js';
import FourOhFour from './pages/fourOhFour.js';
import NNCalibration from './pages/nn_calibration.js';
import AUM from './pages/aum.js';
import Research from './pages/research.js';
import Bio from './pages/bio.js';
import Stat520p_2023 from './pages/stat520p.js';
import Stat548_2023 from './pages/stat548.js';

// Assets
import './sass/App.css';
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
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Outlet />,
        children: [
          { index: true, element: <Home /> },
          { path: "index.html", element: <Home /> },
          {
            path: "blog",
            element: <Outlet />,
            children: [
              { path: "aum.html", element: <AUM /> },
              { path: "nn_calibration.html", element: <NNCalibration /> },
            ],
          },
          { path: "bio.html", element: <Bio /> },
          {
            path: "research",
            element: <Outlet />,
            children: [
              { index: true, element: <Research /> },
              { path: "index.html", element: <Research /> },
            ],
          },
          {
            path: "teaching",
            element: <Outlet />,
            children: [
              {
                path: "stat548",
                element: <Outlet />,
                children: [
                  // eslint-disable-next-line
                  { index: true, element: <Stat548_2023 /> },
                  // eslint-disable-next-line
                  { path: "index.html", element: <Stat548_2023 /> },
                ],
              },
              {
                path: "stat520p",
                element: <Outlet />,
                children: [
                  // eslint-disable-next-line
                  { index: true, element: <Stat520p_2023 /> },
                  // eslint-disable-next-line
                  { path: "index.html", element: <Stat520p_2023 /> },
                ],
              },
            ],
          },
        ],
        errorElement: <FourOhFour />,
      },
    ]);

    return (
      <div>
        <div id="app">
          <Navbar color="dark" dark expand="lg">
            <NavbarBrand className="m-0 mr-md-4 ml-md-4 link-unstyled small-caps h3" href="/">
              Geoff Pleiss
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} />
            <Collapse isOpen={this.state.isNavbarOpen} navbar>
              <Nav className="mr-auto ml-md-4" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret href="/research/">
                    Research
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="/research/">Overview</DropdownItem>
                    <div className="dropdown-divider"></div>
                    <DropdownItem href="/research/index.html#uq">Uncertainty Quantification</DropdownItem>
                    <DropdownItem href="/research/index.html#overparam">Overparameterization and Ensemble Methods</DropdownItem>
                    <DropdownItem href="/research/index.html#nla">Numerical Methods for Gaussian Processes</DropdownItem>
                    <DropdownItem href="/research/index.html#approx-inf">Approximate Inference for Gaussian Processes</DropdownItem>
                    <DropdownItem href="/research/index.html#reliable-nn">"Reliable" Deep Learning</DropdownItem>
                    <DropdownItem href="/research/index.html#prob-modeling">Probabilistic Modeling</DropdownItem>
                    <DropdownItem href="/research/index.html#sci-app">Scientific Applications</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret href="/teaching/">
                    Teaching
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="/teaching/stat520p/">STAT 520P (Bayesian Optimization)</DropdownItem>
                    <DropdownItem href="/teaching/stat548/">STAT 548 (PhD Qualifying Course)</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Open Source
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="https://gpytorch.ai" target="_blank">
                      GPyTorch
                    </DropdownItem>
                    <DropdownItem href="https://linear-operator.readthedocs.io" target="_blank">
                      LinearOperator
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Blog
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="/blog/nn_calibration.html">
                      Neural Network Calibration
                    </DropdownItem>
                    <DropdownItem href="/blog/aum.html">
                      Area Under the Margin (AUM)
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="/geoffpleiss_cv.pdf" target="_blank">
                    CV
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/bio.html">
                    Bio
                  </NavLink>
                </NavItem>
                <NavItem className="d-inline d-lg-none">
                  <NavLink href="https://scholar.google.com/citations?user=XO8T-Y4AAAAJ&hl=en&oi=ao" target="_blank">
                    Google Scholar
                  </NavLink>
                </NavItem>
                <NavItem className="d-inline d-lg-none">
                  <NavLink href="http://github.com/gpleiss" target="_blank">
                    Github
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            <Nav navbar className="mr-lg-4 ml-lg-4 d-none d-lg-flex" aria-hidden="true">
              <NavItem className="ml-3">
                <NavLink className="text-white" href="https://scholar.google.com/citations?user=XO8T-Y4AAAAJ&hl=en&oi=ao" target="_blank">
                  <img src={gscholarWhite} style={{width: "36px"}} alt="Google Scholar" />
                </NavLink>
              </NavItem>
              <NavItem className="ml-3">
                <NavLink className="text-white" href="http://github.com/gpleiss" target="_blank">
                  <FontAwesomeIcon icon={faGithub} size="2x" title="Github" />
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </div>

        <RouterProvider router={router} />
      </div>
    );
  }
}

export default App;
