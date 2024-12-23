import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/fontawesome-free-brands';

import { Navbar, NavbarToggler, Collapse, NavbarBrand, Nav, NavItem, NavLink,
         UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Home from './pages/home.js';
import ProspectiveMember from './pages/prospective_member.js';
import FourOhFour from './pages/fourOhFour.js';
import NNCalibration from './pages/nn_calibration.js';
import AUM from './pages/aum.js';
import Research from './pages/research.js';
import Bio from './pages/bio.js';
import Stat547U_2025 from './pages/stat547u/stat547u.js';
import Stat547UIndex_2025 from './pages/stat547u/stat547u_index.js';
import Stat547UFinal_2025 from './pages/stat547u/stat547u_final.js';
import Stat547USyllabus_2025 from './pages/stat547u/stat547u_syllabus.js';
import Stat520P_2023 from './pages/stat520p/stat520p.js';
import Stat520PIndex_2023 from './pages/stat520p/stat520p_index.js';
import Stat520PPapers_2023 from './pages/stat520p/stat520p_papers.js';
import Stat520PSyllabus_2023 from './pages/stat520p/stat520p_syllabus.js';
import Stat548 from './pages/stat548.js';

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
          {
            index: true,
            element: <Home />
          },
          {
            path: "index.html",
            element: <Navigate to="/" />
          },
          {
            path: "prospective_member.html",
            element: <ProspectiveMember />
          },
          {
            path: "blog",
            element: <Outlet />,
            children: [
              { path: "aum.html", element: <AUM /> },
              { path: "nn_calibration.html", element: <NNCalibration /> },
            ],
          },
          {
            path: "bio.html",
            element: <Bio />
          },
          {
            path: "research",
            element: <Outlet />,
            children: [
              { index: true, element: <Research /> },
              { path: "index.html", element: <Navigate to="/research/" /> },
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
                  { index: true, element: <Stat548 /> },
                  // eslint-disable-next-line
                  { path: "index.html", element: <Navigate to="/teaching/stat548/" /> },
                ],
              },
              {
                path: "stat547u",
                // eslint-disable-next-line
                element: <Stat547U_2025 />,
                children: [
                  // eslint-disable-next-line
                  { index: true, element: <Stat547UIndex_2025 /> },
                  // eslint-disable-next-line
                  { path: "index.html", element: <Navigate to="/teaching/stat547u/" /> },
                  // eslint-disable-next-line
                  { path: "syllabus.html", element: <Stat547USyllabus_2025 /> },
                  // eslint-disable-next-line
                  { path: "final.html", element: <Stat547UFinal_2025 /> },
                ],
              },
              {
                path: "stat520p",
                // eslint-disable-next-line
                element: <Stat520P_2023 />,
                children: [
                  // eslint-disable-next-line
                  { index: true, element: <Stat520PIndex_2023 /> },
                  // eslint-disable-next-line
                  { path: "index.html", element: <Navigate to="/teaching/stat520p/" /> },
                  // eslint-disable-next-line
                  { path: "syllabus.html", element: <Stat520PSyllabus_2023 /> },
                  // eslint-disable-next-line
                  { path: "papers.html", element: <Stat520PPapers_2023 /> },
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
                    <DropdownItem href="/research/#uq">Uncertainty Quantification</DropdownItem>
                    <DropdownItem href="/research/#bo">Bayesian Optimization</DropdownItem>
                    <DropdownItem href="/research/#reliable-nn">Deep Learning</DropdownItem>
                    <DropdownItem href="/research/#nla">Scalable Gaussian Processes via Numerical Methods</DropdownItem>
                    <DropdownItem href="/research/#spatiotemporal">Spatiotemporal Modeling</DropdownItem>
                    <DropdownItem href="/research/#prob-modeling">Probabilistic Modeling</DropdownItem>
                    <DropdownItem href="/research/#cv">Computer Vision</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret href="/teaching/">
                    Teaching
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="/teaching/stat547u/">(2025) STAT 547U (Topics in Deep Learning Theory)</DropdownItem>
                    <DropdownItem href="https://ubc-stat.github.io/stat-406/">(2024) STAT 406 (Methods for Statistical Learning)</DropdownItem>
                    <DropdownItem href="/teaching/stat520p/">(2023) STAT 520P (Bayesian Optimization)</DropdownItem>
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
