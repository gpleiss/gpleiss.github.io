import React from 'react';
import { Table } from 'reactstrap';
import {
  Link,
  SmallH2,
  Section
} from '../../components/utils.js';

import paperData from './stat547u_papers.json';


class Stat547UPapers extends React.Component {
  render() {
    return (
      <div className="col-12">
        <Section first>
          <SmallH2>
            Final Paper Presentation Assignment
          </SmallH2>
          <p>
            You will choose one of the following papers to read in-depth throughout the course.
            At the end of the semster, you will have a 30 minute oral examination on your understanding of the paper.
            (I will post a list of specific questions to prepare later in the semester.)
            See <Link inside href="syllabus.html#final-paper-reading-assignment">the syllabus</Link>{ " " }
            for a detailed description of the assignment.
          </p>
          <p>
            If you have a paper in mind that is not on this list, chat with me!
          </p>
          <Table striped hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Topics</th>
                <th>Authors</th>
                <th>Venue</th>
                <th>Link</th>
              </tr>
            </thead>

            <tbody>
              {paperData.filter((row) => row.final).sort((rowA, rowB) => (rowA.tags < rowB.tags) ? -1 : 1).map((row) => (
                <tr key={ row.id }>
                  <td>
                    { row.title }
                  </td>
                  <td>
                    { row.tags }
                  </td>
                  <td>
                    { row.authors }
                  </td>
                  <td>
                    { row.venue }, { row.year }
                  </td>
                  <td>
                    <Link className="btn btn-pdf btn-sm" role="button" href={ row.url }>PDF</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Section>
      </div>
    );
  }
}


export default Stat547UPapers;
