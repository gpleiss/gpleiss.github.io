import * as _ from 'lodash';
import React from 'react';
import {Link} from '../components/utils.js';


class PubItem extends React.Component {
  render() {
    // Add note to author list?
    var note = '';
    for (var author of this.props.authors) {
      if (author.indexOf('*') > -1) {
        note = '* ' + (this.props.note || 'Authors contributed equally');
        break;
      }
    }

    return <li key={this.props.title} className="row mb-4">
      <div className="col-md-8">
        <h4 className="h5 font-weight-bold">
          <Link className="link-unstyled" href={this.props.arxiv}>
            {this.props.title}
          </Link>
        </h4>
        <div>
          <ul className="list-inline ml-3 mt-1">
            {this.props.authors.map(function(author) {
              if (_.includes(author, 'Geoff Pleiss')) {
                return <li className="list-inline-item list-inline-item-comma" key={author}><strong>{author}</strong></li>;
              } else {
                return <li className="list-inline-item list-inline-item-comma" key={author}>{author}</li>;
              }
            })}
          </ul>
          {!!note ? <small className="ml-3 text-muted">{note}</small> : null}
        </div>
        <div className="mt-1 ml-3">&#8212; In {this.props.conference}, {this.props.year}</div>
      </div>
      <div className="col-md-4">
        <ul className="list-inline">
          {!! this.props.pdf ? 
            <li className="mb-1 list-inline-item">
              <Link className="btn btn-pdf btn-sm" role="button" href={this.props.pdf}>PDF</Link>
            </li>
          : null}
          {!! this.props.github ? 
            <li className="mb-1 list-inline-item">
              <Link className="btn btn-github btn-sm" role="button" href={this.props.github}>Github</Link>
            </li>
          : null}
          {!! this.props.talk ? 
            <li className="mb-1 list-inline-item">
              <Link className="btn btn-talk btn-sm" role="button" href={this.props.talk}>Talk</Link>
            </li>
          : null}
        </ul>
      </div>
    </li>
  }
}


export default PubItem;