import React from 'react';
import {
  NavLink,
  Outlet,
} from "react-router-dom";
import { H1, Link } from '../components/utils.js';


class NavLinkCustom extends React.Component {
  render() {
    return (
      <NavLink to={ this.props.to } className={({ isActive, _ }) => isActive ? 'text-dark font-weight-bold' : '' }>
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
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 mb-4">
              <ul className="list-unstyled">
                <li>
                  <NavLinkCustom to="/teaching/stat520p/">Course Homepage</NavLinkCustom>
                </li>
                <li>
                  <NavLinkCustom to="/teaching/stat520p/syllabus.html">Syllabus</NavLinkCustom>
                </li>
                <li>
                  <NavLinkCustom to="/teaching/stat520p/papers.html">Special Topics Papers</NavLinkCustom>
                </li>
                <li>
                  <Link href="https://canvas.ubc.ca/courses/135093">Canvas Course Page</Link>
                </li>
                <li>
                  <Link href="https://bayesoptbook.com#download">Textbook</Link>
                </li>
                <li>
                  <Link href="https://github.com/gpleiss/gp_bo_demos">Demos</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 pt-5 mb-lg-4 text-right">
              <ul className="list-unstyled">
                <li>
                  24 Oct 2023 &mdash; 7 Dec 2023
                </li>
                <li>
                  Tuesdays and Thursdays, 1:00 &mdash; 2:30PM
                </li>
                <li>
                  Earth Science Building, Room #4192
                </li>
                <li>
                  <em>
                    (Office hours immediately follow Thursday class, ESB 3142.)
                  </em>
                </li>
              </ul>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}

export default Stat520P;
