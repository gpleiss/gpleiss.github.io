import * as _ from 'lodash';
import React from 'react';
import {Link} from '../components/utils.js';


function processAuthor(author) {
  author = author.replaceAll("\\\"o", "ö")
  author = author.replaceAll("\\\"u", "ü")
  author = author.replaceAll("\\`a", "á")
  author = author.replaceAll("\\`e", "é")
  author = author.replaceAll("\\^o", "ô")
  return author
}


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

    return <li key={this.props.id} className="row mb-4">
      <div className="col-md-9">
        <h4 className="h5 font-weight-bold">
          {this.props.isnew ? <span className="badge badge-danger mr-2">NEW</span> : null}
          <Link inside className="link-unstyled" href={this.props.website}>
            {this.props.title.replaceAll("{", "").replaceAll("}", "").replaceAll("$", "")}
          </Link>
          {this.props.award ? <span className="h6 pl-2 text-muted text-uppercase">[{this.props.award}]</span> : null}
        </h4>
        <div>
          <ul className="list-inline ml-3 mt-1">
            {this.props.authors.map(function(author) {
              if (_.includes(author, 'Geoff Pleiss')) {
                return <li className="list-inline-item list-inline-item-comma" key={author}><strong>{author}</strong></li>;
              } else {
                return <li className="list-inline-item list-inline-item-comma" key={author}>{processAuthor(author)}</li>;
              }
            })}
          </ul>
          {!!note ? <small className="ml-3 text-muted">{note}</small> : null}
        </div>
        { this.props.type === "submission" ?
          <div className="mt-1 ml-3 font-italic">&#8212; Under Submission</div> :
          this.props.techReport ?
            <div className="mt-1 ml-3">&#8212; <span className="font-italic">Tech Report</span>, {this.props.year}</div> :
            <div className="mt-1 ml-3">&#8212; In {this.props.booktitle || this.props.journal}, {this.props.year}</div>
        }
      </div>
      <div className="col-md-3">
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
