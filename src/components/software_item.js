import React from 'react';
import {Link} from '../components/utils.js';


class SoftwareItem extends React.Component {
  render() {
    return <li key={this.props.title} className="mb-4">
      <div className="row">
        <div className="col-md-8">
          <h4 className="h5 font-weight-bold">
            <Link className="link-unstyled" href={this.props.github}>
              {this.props.title}
            </Link>
            {(!! this.props.status) ? <span className="ml-3 badge badge-info p-2 pl-3 pr-3">{this.props.status}</span> : null}
          </h4>
          <div>{this.props.tagline}</div>
          <div className="ml-3 mt-1 mb-1">
            <small className="text-muted">
              Coauthors: {this.props.coauthors.join(', ')}
            </small>
          </div>
        </div>
        <ul className="list-inline col-md-4">
          {!!this.props.report ? 
            <li className="mb-1 list-inline-item">
              <Link className="btn btn-pdf btn-sm" role="button" href={this.props.report}>Technical Report</Link>
            </li>
          : null}
          {!!this.props.github ? 
            <li className="mb-1 list-inline-item">
              <Link className="btn btn-github btn-sm" role="button" href={this.props.github}>Github</Link>
            </li>
          : null}
        </ul>
      </div>
      <div className="p-3 bg-light">
        {this.props.children}
      </div>
    </li>
  }
}


export default SoftwareItem;
