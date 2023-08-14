import React from 'react';
import { Section } from '../components/utils.js';


class FourOhFour extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Section>
                Page not found.
              </Section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FourOhFour;
