import React from 'react';
import { H1, Section } from '../components/utils.js';


const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const today = new Date();


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
            <div className="col-sm-12">
              <Section>
                <div>
                  <strong>Last Updated:</strong> { today.getDate() } { monthNames[today.getMonth()] } { today.getFullYear() }
                  <br />
                  More info soon!
                </div>
              </Section>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Stat520P;
