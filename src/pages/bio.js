import React from 'react';
import bio from '../components/bio.js';


class Bio extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-8 offset-md-2">
              { bio }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
