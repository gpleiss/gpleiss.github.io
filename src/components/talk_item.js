import React from 'react';
import {Link} from '../components/utils.js';


class TalkItem extends React.Component {
  render() {
    return <li key={this.props.title} className="mb-4">
      <div className="row">
        <div className="col-md-10">
          <h4 className="h5 font-weight-bold">
            <span className="mr-3 badge badge-info p-2 pl-3 pr-3" style={{width: "150px"}}>{this.props.date}</span>
            <Link className="link-unstyled" href={this.props.href}>
              {this.props.title}
            </Link>
          </h4>
          <div className="ml-3 font-italic">{this.props.tagline}</div>
        </div>
        <div className="col-md-2">
          <Link className="btn btn-github btn-sm" role="button" href={this.props.href}>Video</Link>
        </div>
      </div>
    </li>
  }
}


export default TalkItem;
