import React from 'react';
import { Table } from 'reactstrap';
import {
  Link,
  SmallH2,
  Section
} from '../../components/utils.js';

import classSchedule from './stat547u_schedule.json';
import lectureNotes from './stat547u_lecture_notes.js';

import pset01Instructions from './pset01/stat547u_pset01_instructions.pdf';
import pset01Template from './pset01/stat547u_pset01_template.tex';


const classDates = [
  "07 Jan 2025",
  "09 Jan 2025",
  "14 Jan 2025",
  "16 Jan 2025",
  "21 Jan 2025",
  "23 Jan 2025",
  "28 Jan 2025",
  "30 Jan 2025",
  "04 Feb 2025",
  "06 Feb 2025",
  "11 Feb 2025",
  "13 Feb 2025",
];


const assignments = {
  "assignment1": (
    <span>
      <Link href={ pset01Instructions }>Diagnostic problem set</Link> due on Tues, Jan 14.{ " " }
      (
        <Link href={ pset01Template }>TeX template</Link> and{ " " }
        <Link href="../../math_commands.tex">math_commands.tex</Link> macros file.
      )
    </span>
  ),
  "assignment2": (
    <span>
      <Link href="syllabus.html#final-paper-reading-assignment" inside>Final project intermediate check-in</Link>{ " " }
      due on Tues, Feb 04.
    </span>
  ),
}


function formatDate(inputDateStr) {
  const date = new Date(Date.parse(inputDateStr));
  // Define options for formatting the output
  const options = { weekday: 'short', month: 'short', day: '2-digit' };
  // Format the date to the desired string
  return date.toLocaleDateString('en-US', options);
}


class Stat547UIndex extends React.Component {
  render() {
    let index = 0;

    return (
        <Section id="schedule" first>
          <SmallH2>
            Schedule
          </SmallH2>
          <p>
            Subject to change; check <Link inside href="#announcements">announcements</Link> and Canvas!.
          </p>
          <Table striped hover>
            <thead>
              <tr>
                <th>Class/Date</th>
                <th>Class Topic</th>
                <th>Reading Due</th>
                <th>Resources</th>
              </tr>
            </thead>

            <tbody>
              {classSchedule.map((row) => (
                (row.type === "class") ? (
                  <tr>
                    <td>Class {index += 1} ({formatDate(classDates[index - 1])})</td>
                    <td>
                      {row.topic}
                    </td>
                    <td>
                      <Link href={row.readingUrl}>{row.readingTitle}</Link>
                      { (row.note) ? <div>({row.note})</div> : <span></span> }
                    </td>
                    <td>
                      {
                        (row.lectureNotes) ? 
                        <Link className="btn btn-pdf btn-sm" role="button" href={ lectureNotes[row.lectureNotes] }>Lecture Notes</Link> :
                        <span></span>
                      }
                      {
                        (row.links || []).map((link) => (
                          <Link className="btn btn-info btn-sm" role="button" href={ link.url }>{ link.name }</Link>
                        ))
                      }
                    </td>
                  </tr>
                ) : (row.type === "section") ? (
                  <tr>
                    <td colSpan="4" className="text-center">
                      <em>{row.topic}</em>
                      {(row.assignment) ? <br /> : (<span></span>)}
                      {(row.assignment) ? <span>{assignments[row.assignment]}</span> : (<span></span>)}
                    </td>
                  </tr>
                ) : (<div></div>)
              ))}
            </tbody>
          </Table>
        </Section>
    );
  }
}

export default Stat547UIndex;
