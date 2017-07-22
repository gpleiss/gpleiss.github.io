import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items : [],
      loading: false
    };
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1>Home Area</h1>
        <div className="row">
          <div className="col-md-9">
            <p>
              I am a first year Ph.D. student in the CS department at Cornell University. My research interests
              include machine learning, optimization, and computational sustainability.
            </p>
            <p>
              In the past, I was a web developer, engineer, and choir nerd.
            </p>
            <p>
              The site is a WIP. In the meantime, check out my <a href="http://twitter.com/gpleiss">twitter account
              </a> for burrito recommendations.
            </p>
          </div>
          <div className="col-md-3">
            <img alt="Geoff Pleiss" src="images/me.jpg" style={{width: '100%'}}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
