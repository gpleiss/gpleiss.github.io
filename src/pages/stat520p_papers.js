import React from 'react';
import { Table } from 'reactstrap';
import { Link, Section, SmallH2 } from '../components/utils.js';
import paperData from '../data/stat520p_2023_potential_papers.json';


class Stat520PPapers extends React.Component {
  render() {
    return (
      <div className="col-12">
        <Section first>
          <SmallH2>
            Special Topics Papers
          </SmallH2>
          <p>
            The following is a list of suggested papers top cover in the second half of the course.
            I am also open to other paper recommendations!
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
              {paperData.map((row) => (
                <tr>
                  <td>
                    { row["Paper"] }
                  </td>
                  <td>
                    { row["Tags"] }
                  </td>
                  <td>
                    { row["Authors"] }
                  </td>
                  <td>
                    { row["Venue"] || "ArXiV" }, { row["Date"] }
                  </td>
                  <td>
                    <Link className="btn btn-pdf btn-sm" role="button" href={ row["URL"] }>PDF</Link>
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

export default Stat520PPapers;
