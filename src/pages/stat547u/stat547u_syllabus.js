import React from 'react';
import { Table } from 'reactstrap';
import { Link, SmallH2, SmallH3, Section, AnonFeedback } from '../../components/utils.js';
import papers from './stat547u_papers.json';


class Stat547USyllabus extends React.Component {
  render() {
    const canvas = <Link href="https://canvas.ubc.ca/courses/158224">Canvas</Link>;
    const contactMe = <Link inside href="#contact">contact me</Link>;

    return (
      <div className="col-12">
        <Section first>
          <p>
            This course takes place in the traditional, ancestral and unceded territory of the xʷməθkʷəy̓əm
            (<Link href="https://www.musqueam.bc.ca/">Musqueam</Link>).
            It is important to reflect upon this fact
            as we study, work, and grow on this land.
            (<Link href="https://indigenous.ubc.ca">https://indigenous.ubc.ca</Link>.)
          </p>
        </Section>

        <Section>
          <SmallH2>Course Overview</SmallH2>
          <p>
            <strong>Description.</strong>{ " " }
            The success of neural networks defies classical statistical learning theory.
            While a detailed analysis of neural networks remains theoretically intractable,
            recent analyses of high-dimensional linear regression and infinite-width neural networks
            have shed light on
            <ol>
              <li>why neural networks optimize well, despite the inherent non-convexity of training, and</li>
              <li>why neural networks generalize well, despite their overparameterized nature.</li>
            </ol>
          </p>

          <p>
            This course will be a self-contained exploration of recent theoretical results in the theory of
            neural networks and high-dimensional regression.
            Students will learn from lectures that simplify complex mathematics
            and recent research papers that prove theorems in full technical detail.
            Students will gain familiarity with existing research,
            common problem setups and simplifying assumptions,
            and common techniques used to prove theoretical results.
          </p>

          <p>
            <strong>Learning objectives.</strong>{ " " }
            If we're successful, you will:
          </p>
          <ul>
            <li>articulate the limitations of classical learning theory methods,</li>
            <li>understand why neural network optimize well despite non-convexity,</li>
            <li>understand why high-dimensional linear models generalize despite overparameterization,</li>
            <li>understand how to approximate neural networks with linear models,</li>
            <li>know how to set up high-dimensional asymptotic proofs,</li>
            <li>be fluent with the basic mathematical techniques underpinning neural network theory (linear algebra, probability theory, etc), and</li>
            <li>become familiar with advanced mathematical techniques necessary for proofs (chaining arguments, random matrix theory, etc.), and</li>
            <li>gain confidence at reading theoretical machine learning papers.</li>
          </ul>

          <p>
            <strong>Prerequisites.</strong>{ " " }
            If you are worried that you won't satisfy the following prerequisites, please speak to me after the first class:
          </p>
          <ul>
            <li>one upper-division course in statistics or machine learning (e.g. STAT 460 or CS 540),</li>
            <li>one course in analysis (e.g. MATH 320),</li>
            <li>fluency with linear algebra, and</li>
            <li>(recommended) one upper-division course in probability (e.g. STAT 547C).</li>
          </ul>

          <p>
            <strong>Values.</strong>{ " " }
            This course will be a safe and inclusive learning environment for all.
            If you are treated unfairly or disrespectfully&mdash;whether by another student or myself&mdash;please
            (1) { contactMe } directly (if you feel comfortable), (2) submit an <AnonFeedback />, or (3)
            work with the <Link href="https://ombudsoffice.ubc.ca/how-we-can-help/">UBC ombudsperson office</Link>.
            I also aim to accommodate neurodiversity, mental health, and access needs within the course.
            Please { contactMe } for special accommodation requests
            or take advantage of <Link href="https://senate.ubc.ca/policies-resources-support-student-success/">UBC's student resources</Link>.
          </p>
        </Section>

        <Section>
          <SmallH2>Instructor: Geoff Pleiss</SmallH2>
          <p>
            <strong>About me</strong>.{ " " }
            I am an assistant professor in the stats department.
            My research generally encompasses machine learning, with an emphasis on uncertainty quantification and decision making.
            I work on neural networks&mdash;both from theoretical and methodological perspectives&mdash;
            Bayesian optimization, and spatiotemporal modelling with Gaussian processes.
          </p>
          <p>
            <strong>Office hours.</strong> See { canvas } for details.
            I'll also stick around to chat for ~10 minutes after class.
          </p>
          <p>
            <strong id="contact">How to contact me</strong>.{ " " }
            Send me a message through { canvas }, the UBC Stats Slack (preferred, if you have access), or email (only if you absolutely need to).
            Please note that I will not respond on weekends or after 6 PM on weekdays.
          </p>
        </Section>

        <Section>
          <SmallH2>Learning Activities and Assessment</SmallH2>
          <p>
            Neural network theory is a challenging subject that cannot be learned passively.{ " " }
            <emph>If you plan to just sit through lectures, you will likely not come away with an understanding of the material.</emph>
          </p>
          <p>
            You will learn through the following activities:
          </p>

          <SmallH3>Lecture</SmallH3>
          <p>
            Class is where we will cover most of the technical content in this course.
            I will present the material in self-contained lectures.{ " " }
            <em>Again, you cannot learn the material simply by sitting through lectures.</em>{ " " }
            You are expected to read material before class (see below)
            and to actively participate with questions and comments.
          </p>

          <SmallH3>Readings and written summaries</SmallH3>
          <p>
            Most lectures will have required readings that you are expected to complete <em>before</em> class.
            These readings will be a mix of book chapters and some recent (accessible) research and review papers.
          </p>
          <p>
            To further facilitate your understanding, you are required to write a half-page summary of each reading (to be uploaded to { canvas }).
            Each summary should include exactly 4 paragraphs:
          </p>
          <ol>
            <li><strong>Setting</strong> (problem formulation, assumptions, etc.)</li>
            <li><strong>The Goal and Main Result</strong> (what is trying to be proved, what other papers have already proved, etc.)</li>
            <li><strong>Description of Mathematical Techniques</strong> (what types of math are used to arrive at each theoretical result)</li>
            <li><strong>Points of Confusion</strong> (what were you not able to understand)</li>
          </ol>
          <p>
            You should spend roughly 2 hours on each reading and 1 hour on each written summary.
          </p>

          <SmallH3>Diagnostic assignment</SmallH3>
          <p>
            There will be a single problem set for this course, <em>which is due on { canvas } at the beginning of the second week of class.</em>{ " " }
            This problem set aims to gauge your fluency with linear algebra and probability theory
            while also setting up the material for the first few lectures.
            If you give this diagnostic a reasonable effort, you will be well-prepared for the mathematics in this course.
            If you struggle with it, you will struggle with the rest of the material.
          </p>

          <SmallH3 id="final-paper-reading-assignment">Final paper reading assignment</SmallH3>
          <p>
            The final assessment for this course involves <emph>thoroughly</emph> reading a modern research paper on neural network theory
            and a 30 minute oral examination to assess your understanding.
          </p>
          <p>
            You will select a paper from a <Link inside href="final.html">predetermined list</Link>.
            All of the papers are quite challenging, with advanced mathematical techniques that will not be covered in class.
            You will need to spend significant time on the paper (read: 2+ weeks);
            reading it multiple times
            and researching the background mathematics necessary to understand the paper.
          </p>
          <p>
            During the oral examination, I will ask you about the following aspects of the paper:
            <ui>
              <li>the problem being solved,</li>
              <li>related work (what has been studied before),</li>
              <li>the problem setting,</li>
              <li>the main theoretical results,</li>
              <li>sketches of the proof, and</li>
              <li>limitations of the analysis.</li>
            </ui>
          </p>
          <p>
            To ensure you're on track, there will be a written intermediate check-in assignment,
            in which you are expected to write a 1-page summary of the paper you have chosen.
            It should follow the same format as the written summaries of the readings, with the same 4 paragraphs.
            Each paragraph will be graded on a 2.5-point scale, for a total of 10 points.
            (The rubric will be the same as the written summaries of the readings, with everything scaled by 1.25.)
          </p>
        </Section>

        <Section id="assessment">
          <SmallH2>Assessment</SmallH2>
          <p>
            The grades and weightings target the following scale:
          </p>
          <ul>
            <li>An <tt>A-</tt> represents a cursory understanding of NN theory (e.g. comprehending the lecture material but not the readings).</li>
            <li>An <tt>A</tt> represents an in-depth understanding of NN theory (e.g. comprehending the lecture material and readings to a great extent).</li>
            <li>An <tt>A+</tt> represents that you are ready to perform research on NN theory (e.g. going above and beyond the course materials).</li>
          </ul>

          <Table striped hover>
            <thead>
              <tr>
                <th>Category</th>
                <th>Contribution</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Class participation</td>
                <td>10%</td>
                <td>5%: attending class regularly, 5%: engaging during lecture. (Let me know if you need to miss class.)</td>
              </tr>
              <tr>
                <td>Diagnostic assignment</td>
                <td>15%</td>
                <td>
                  See description above.
                  It will be worth a total of 60 points, scaled to be worth 15% of your final grade.
                </td>
              </tr>
              <tr>
                <td>Reading summaries</td>
                <td>40%</td>
                <td>
                  <p>
                    See description above.
                    There are 6 written summaries,
                    each worth 8 points (2 points per paragraph),
                    for a total of 48 points.
                    Your grade will be <tt>min(40, total_points)</tt>.
                  </p>

                  <p>
                    Each paragraph will be graded on the following scale:
                    (1 points) demonstrates that you skimmed the reading,
                    (2 points) demonstrates that you read the paper/chapter thoroughly.
                  </p>
                </td>
              </tr>
              <tr>
                <td>Final paper reading assignment</td>
                <td>35%</td>
                <td>See description above.
                  The intermediate check-in will be 10 points,
                  and the oral presentation will be 25 points.
                </td>
              </tr>
            </tbody>
          </Table>

          <p>
            Rubrics for all assignments will be available on Canvas.
          </p>

          <SmallH3>Concessions</SmallH3>
          <p>
            Please { contactMe } as soon as possible if you will have trouble completing an assignment on time and/or participating in class.
            I understand the effects of life events, health circumstances (mental or physical), and scheduling,
            and I will work with you to best structure your learning/assessment. 
            Please also refer to <Link href="https://vancouver.calendar.ubc.ca/campus-wide-policies-and-regulations/academic-concession">
              UBC's policies on academic concessions
            </Link>.
          </p>
        </Section>

        <Section>
          <SmallH2>Resources</SmallH2>

          <SmallH3 id="canvas">Canvas</SmallH3>
          <p id="course-canvas">
            We will use { canvas } for 
            1) announcements,
            2) discussions,
            and 3) uploading assignments.
          </p>

          <SmallH3>Readings (required and optional)</SmallH3>
          <p>
            Please see the <Link href="index.html">schedule</Link> for required readings
            and a bibliography of additional papers related to each lecture.
          </p>

          <SmallH3 id="textbook">Other References</SmallH3>
          <ul>
            {papers.filter((row) => (
              (Array.isArray(row.tags)) && (row.tags.length === 1) && (row.tags[0] === "resource")
            )).map((row) => (
              <li>
                "<Link href={row.url}>{row.title}</Link>,"{ " " }
                {row.authors} ({row.year}).
              </li>
            ))}
          </ul>
        </Section>

        <Section>
          <SmallH2>Policies and Values</SmallH2>
          <p>
            UBC provides resources to support student learning and maintaining
            healthy lifestyles but recognizes that crises sometimes arise.
            There are additional resources to access, including those for
            survivors of sexual violence. UBC values respect for the person and
            ideas of all academic community members. Harassment and discrimination
            are not tolerated, nor is suppression of academic freedom. UBC provides
            appropriate accommodation for students with disabilities and religious,
            spiritual and cultural observances. UBC values academic honesty, and students
            are expected to acknowledge the ideas generated by others and to uphold the
            highest academic standards in all of their actions. Details of the policies and
            how to access support are available { " " }
            <Link href="http://senate.ubc.ca/policies-resources-support-student-success">here</Link>.
          </p>
        </Section>
      </div>
    );
  }
}


export default Stat547USyllabus;
