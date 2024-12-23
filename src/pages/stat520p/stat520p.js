import React from 'react';
import {
  NavLink,
  Outlet,
} from "react-router-dom";
import {
  Nav,
  NavItem,
} from "reactstrap";
import { H1, H2, Link } from '../../components/utils.js';


class NavLinkCustom extends React.Component {
  render() {
    return (
      <NavLink to={ this.props.to } className="nav-link" active={({ isActive, _ }) => isActive}>
        { this.props.children }
      </NavLink>
    );
  }
}


class Stat520P extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-gradient-primary pt-10 pb-5 shadow-bottom">
          <div className="container text-center">
            <H1>STAT520P: Bayesian Optimization</H1>
            <H2 className="text-light">Oct-Dec 2023</H2>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 pt-5 mb-5">
              <Nav tabs>
                <NavItem>
                  <NavLinkCustom to="/teaching/stat520p/">Course Homepage</NavLinkCustom>
                </NavItem>
                <NavItem>
                  <NavLinkCustom to="/teaching/stat520p/syllabus.html">Syllabus</NavLinkCustom>
                </NavItem>
                <NavItem>
                  <NavLinkCustom to="/teaching/stat520p/papers.html">Special Topics Papers</NavLinkCustom>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" href="https://canvas.ubc.ca/courses/135093">Canvas Course Page</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" href="https://bayesoptbook.com#download">Textbook</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" href="https://github.com/gpleiss/gp_bo_demos">Demos</Link>
                </NavItem>
              </Nav>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}

export default Stat520P;
