import React from 'react';
import { Table } from 'reactstrap';
import { Link, SmallH2, Section } from '../components/utils.js';


class Stat520PIndex extends React.Component {
  render() {
    const textbook = <Link href="https://bayesoptbook.com#download">Textbook</Link>;

    return (
      <div className="col-12">
        <Section id="announcements">
          <SmallH2>
            Announcements
          </SmallH2>
          <ul>
            <li>The <Link inside href="syllabus.html">syllabus</Link> is now posted.</li>
            <li>The first class will be on Tuesday, 24 Oct 2023.</li>
            <li>
              The diagnostic problem <Link href="../../stat520p_pset1.pdf">has been released</Link>.
              (<Link href="../../stat520p_pset1.tex">TeX template</Link>.)
              It will be due on Tuesday, Oct 31.
            </li>
          </ul>
        </Section>

        <Section id="schedule">
          <SmallH2>
            Schedule
          </SmallH2>
          <p>
            Subject to change; check <Link inside href="#announcements">announcements</Link> and Slack!.
          </p>
          <Table striped hover>
            <thead>
              <tr>
                <th>Class/Date</th>
                <th>Class Topic</th>
                <th>Reading Due</th>
                <th>Assignment Due</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Class 1 (Tues, Oct 24)</td>
                <td>Introduction, course logistics</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>Class 2 (Thurs, Oct 26)</td>
                <td>Gaussian processes</td>
                <td>{ textbook } Ch. 1-2</td>
                <td></td>
              </tr>

              <tr>
                <td>Class 3 (Tues, Oct 31)</td>
                <td>Gaussian processes and kernels</td>
                <td>{ textbook } Ch. 3, 9.1 (optional)</td>
                <td>
                  <Link href="../../stat520p_pset1.pdf">Diagonstic problem set</Link> (<Link href="../../stat520p_pset1.tex">TeX template</Link>)
                </td>
              </tr>

              <tr>
                <td>Class 4 (Thurs, Nov 2)</td>
                <td>Decision theory and optimization theory</td>
                <td>{ textbook } Ch. 5-6</td>
                <td></td>
              </tr>

              <tr>
                <td>Class 5 (Tues, Nov 7)</td>
                <td>Acquisition functions</td>
                <td>{ textbook } Ch. 7</td>
                <td></td>
              </tr>

              <tr>
                <td>Class 6 (Thurs, Nov 9)</td>
                <td>Implementation details</td>
                <td>{ textbook } Ch. 8, 9.2</td>
                <td></td>
              </tr>

              <tr>
                <td>Class 7 (Tues, Nov 14)</td>
                <td>Theory</td>
                <td>{ textbook } Ch. 10</td>
                <td></td>
              </tr>

              <tr>
                <td>Class 8 (Thurs, Nov 16)</td>
                <td>Summary and/or Special Topic (TBD)</td>
                <td>TBD</td>
                <td></td>
              </tr>

              <tr>
                <td>Class 9 (Tues, Nov 21)</td>
                <td>Special Topic (TBD)</td>
                <td>TBD</td>
                <td></td>
              </tr>

              <tr>
                <td>Class 10 (Thurs, Nov 23)</td>
                <td>Special Topic (TBD)</td>
                <td>TBD</td>
                <td></td>
              </tr>

              <tr>
                <td>Class 11 (Tues, Nov 28)</td>
                <td>Special Topic (TBD)</td>
                <td>TBD</td>
                <td></td>
              </tr>

              <tr>
                <td>Class 12 (Thurs, Nov 30)</td>
                <td>Special Topic (TBD)</td>
                <td>TBD</td>
                <td></td>
              </tr>

              <tr>
                <td>Class 13 (Tues, Dec 5)</td>
                <td>Special Topic (TBD)</td>
                <td>TBD</td>
                <td></td>
              </tr>

              <tr>
                <td>Class 14 (Thurs, Dec 7)</td>
                <td>Special Topic (TBD)</td>
                <td>TBD</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Section>
      </div>
    );
  }
}

export default Stat520PIndex;
