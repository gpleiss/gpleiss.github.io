import React from 'react';
import {
  //NavLink,
  Outlet,
} from "react-router-dom";
import { H1, H2 } from '../components/utils.js';


//class NavLinkCustom extends React.Component {
  //render() {
    //return (
      //<NavLink to={ this.props.to } className={({ isActive, _ }) => isActive ? 'text-dark font-weight-bold' : '' }>
        //{ this.props.children }
      //</NavLink>
    //);
  //}
//}


class Stat547U extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-gradient-primary pt-10 pb-5 shadow-bottom">
          <div className="container text-center">
            <H1>STAT547U: Topics in Deep Learning Theory</H1>
            <H2 className="text-light">Jan-Feb 2025</H2>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}

export default Stat547U;
