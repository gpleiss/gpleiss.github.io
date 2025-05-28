import React from 'react';
import {H3, Link} from '../components/utils.js';


class Student extends React.Component {
  render() {
    const role = this.props.roles && this.props.roles.length > 0 ? this.props.roles[0] : null;
    const studentLink = this.props.website ? <Link href={this.props.website}>{this.props.name}</Link> : this.props.name;
    const roleType = role ? <div>{role.type}{!!role.status ? ' ' + role.status : ''}</div> : null;
    const univDept = role ? <div>{role.university}{!!role.department ? ' ' + role.department : ''}</div> : null;
    const cosupervisors = (role && role.cosupervisors ? role.cosupervisors : []).map((cosupervisor, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 ? ', ' : ''}
          <Link href={cosupervisor.link} key={cosupervisor.name}>{cosupervisor.name}</Link>
        </React.Fragment>
    ));
    const cosupervisorLine = cosupervisors.length ? <div className="text-muted">(co-sup. by {cosupervisors})</div> : null;
    return (
      <li className="col-sm-6 col-md-4 mb-4 text-center" key={this.props.name}>
        <picture className="d-inline-block mb-2">
          <img className="rounded-circle img-thumbnail" alt={this.props.name} src={this.props.image} style={{width: '100%', maxWidth: '175px'}}></img>
        </picture>
        <H3 center small>{studentLink}</H3>
        {roleType}
        {univDept}
        {cosupervisorLine}
      </li>
    )
  }
}

export default Student;
