import React from 'react';
import { Table } from 'reactstrap';
import { Link, SmallH2, SmallH3, Section, AnonFeedback } from '../components/utils.js';


function formatAuthorName(authorName) {
  const names = authorName.trim().split(' ');
  const firstNames = names.slice(0, -1).map((firstName) => firstName[0] + '.');
  return firstNames.join('') + ' ' + names[names.length - 1].replace('~', ' ');
}


class Citation extends React.Component {
  render() {
    const _title = <Link href="{ this.props.url }">{ this.props.title }</Link>;

    const authors = this.props.authors.split(',').map((authorName) => formatAuthorName(authorName)).join(', ').trim();
    const title = this.props.book ? <em>{ _title }</em> : <span>"{ _title }"</span>;
    const venue = this.props.venue ? <span>In { this.props.venue }, </span> : <span></span>;

    return <span>
      { authors }. { title }. { venue }{ this.props.year }.
    </span>
  }
}


class Stat520PSyllabus extends React.Component {
  render() {
    const textbook = <Link inside href="#textbook">textbook</Link>;
    const contactMe = <Link inside href="#contact">contact me</Link>;

    return (
      <div className="col-12">
        <Section>
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
            <strong>Description</strong>.
            Bayesian optimization (BO) is a well-established probabilistic approach to <em>blackbox optimization</em>:
            the process of optimizing functions that (1) lack an explicit mathematical form and (2) are often expensive to evaluate.
            While its origins trace back to <Link href="https://www.semanticscholar.org/paper/A-versatile-stochastic-model-of-a-function-of-and-Kushner/c8b0970010ee5752d6307f2b008280e2bcac5e63">1962</Link>,
            BO gained popularity in 2012 when a <Link href="Practical Bayesian optimization of machine learning algorithms">seminal paper</Link> noted its efficacy at hyperparameter tuning for machine learning models.
            Recently, an explosion of developments have made BO a promising approach for challenging design problems,
            ranging from <Link href="https://arxiv.org/abs/2001.01793">nuclear fusion control</Link> to <Link href="https://arxiv.org/abs/2201.11872">drug discovery</Link>.
          </p>

          <p>
            This graduate-level topics course aims to provide
            (1) a rigorous technical introduction of BO,
            (2) a survey of recent research developments in the field,
            and
            (3) the skills needed to utilize BO methods in practice.
            The first half of the course will be focused on
            technical foundations, basic algorithms, implementation, and theory
            (see <Link inside href="#part1-topics">below</Link> for topics).
            The second half of the course will explore special topics from recent literature,
            such as high-dimensional optimization, latent-space optimization, grey-box optimization, and/or mixed-feature spaces 
            (see <Link inside href="#part2-topics">below</Link> for potential topics).
          </p>

          <p>
            <strong>Learning objectives</strong>.
            If we're successful, you will:
          </p>
          <ul>
            <li>understand the technical foundations underpinning BO,</li>
            <li>know the current limitations and challenges of using BO,</li>
            <li>feel confident using BO software, and</li>
            <li>be able to apply BO to real-world problems, and</li>
            <li>(optional) be prepared to perform research in BO methodology.</li>
          </ul>

          <p>
            <strong>Prerequisites</strong>.
            If you are worried that you won't satisfy the following prerequisites, please speak to me after the first class:
          </p>
          <ul>
            <li>one upper-division course in statistics or machine learning (e.g. STAT 460 or CS 540),</li>
            <li>fluency with Bayes theorem and Gaussian distributions, and</li>
            <li>experience with Python.</li>
          </ul>

          <p>
            <strong>Values</strong>.
            This course will be safe and inclusive learning environment for all.
            I expect everyone to abide by the <Link href="../../code_of_conduct.html">code of conduct</Link>.
            If you are treated unfairly or disrespectfully&mdash;whether by another student or myself&mdash;please
            (1) { contactMe } directly (if you feel comfortable), (2) submit an <AnonFeedback />, or (3)
            work with the <Link href="https://ombudsoffice.ubc.ca/how-we-can-help/">UBC ombudsperson office</Link>.
            I also aim to accommodate neurodiversity, mental health, and access needs within the course.
            Please { contactMe } for requests with special accommodation requests,
            or take advantage of <Link href="https://senate.ubc.ca/policies-resources-support-student-success/">UBC's student resources</Link>.
          </p>
        </Section>

        <Section>
          <SmallH2>Instructor: Geoff Pleiss</SmallH2>
          <p>
            <strong>About me</strong>.
            I am a new assistant professor in the stats department.
            My research generally encompasses Gaussian processes/spatiotemporal modeling,
            Bayesian optimization, and "reliable" deep learning.
            <br />
            <small>(This is my first course, so please be nice!)</small>
          </p>
          <p>
            <strong>Office hours</strong> will be held in my office (ESB 3142):
          </p>
          <ul>
            <li>immediately after class Thursdays (2:30&mdash;3:30 PM) and</li>
            <li>by appointment.</li>
          </ul>
          <p>
            I'll also stick around to chat for ~10 minutes after class on Tuesdays.
          </p>
          <p>
            <strong id="contact">How to contact me</strong>.
            Send me a message through the <Link inside href="#course-slack">Slack</Link> (preferred) or email (only if you absolutely need to).
            Please note that I will not respond on weekends or after 6PM on weekdays. 
          </p>
        </Section>

        <Section>
          <SmallH2>Learning Activities</SmallH2>
          <p>You will learn through the following activities:</p>
          <ul>
            <li>
              <strong>Attending/participating in class</strong>.
              <p>
                Class is where we will cover most of the technical content in this course.
                We will also have lively discussions on cool applications, current limitations, etc.
              </p>
            </li>
            <li>
              <strong>Reading textbook chapters</strong> (first half of the course).
              <p>
                The textbook chapters will help to solidify the technical foundations that I will cover in lecture.
              </p>
            </li>
            <li>
              <strong>Reading current research papers</strong> (second half of the course).
              <p>
                The research papers will give you a flavor of the current limitations/possibilities of Bayesian optimization.
              </p>
            </li>
            <li id="diagnostic-pset">
              <strong>Completing a diagnostic problem set.</strong>
              <p>
                There will be a single problem set on Gaussian distributions that will be due <em>at the end of the first week of class</em>.
                It will ensure that you are comfortable with the properties of Gaussian distributions,
                which will be at the center of all the technical content we will discuss throughout this course.
                If you have experience with Bayesian statistics, this problem set will (hopefully) be a nice review.
                If you struggle with this problem set, you may have difficulty with the rest of the material in this course.
              </p>
              <p>
                <small>
                  (I realize that it's tough having an assignment due within the first week.
                  I will release the problem set before the first of class to give you a head start.
                  I will also provide extensions with no late penalty, provided that you { contactMe } first.)
                </small>
              </p>
            </li>
            <li id="short-coding-exercise">
              <strong>Completing a short coding exercise.</strong>
              <p>
                You will have a short coding exercise to help get you familiar 
                with <Link href="https://ax.dev">AX</Link> and/or <Link href="https://botorch.org">BoTorch</Link>,
                the predominant software libraries for Bayesian optimization application and research.
                The exercise will ensure that you can apply what you learn in class to real-world problems.
              </p>
            </li>
            <li>
              <strong>Completing a final assessment,</strong> which will take one of two flavors:
            </li>
          </ul>

          <div id="final-assessment">
            <SmallH3 id="research-project">Final Assessment Option 1: Research Project</SmallH3>
            <p>
              This option is best for students who (1) want to apply Bayesian optimization to a research project/application area,
              or (2) are interested in Bayesian optimization methodology/theory research.
              Expect about 4 weeks to start and complete a project.
              You may work alone or in pairs, and you should contact me before selecting a topic.
            </p>
            <p>
              <strong>Double dipping is encouraged!</strong> (If
              Bayesian optimization fits into your existing research or another class project,
              then please use that research/course project as your final for this course!)
              The deliverables for this option are:
            </p>
            <Table striped hover>
              <thead>
                <tr>
                  <th>Deliverable</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Project proposal.</td>
                  <td>9 Nov 2023.</td>
                </tr>
                <tr>
                  <td>15-minute final presentation.</td>
                  <td>During exams period (after 7 Dec 2023). Exact date TBD.</td>
                  {/* FILLIN */}
                </tr>
                <tr>
                  <td>Code repository and/or written proofs.</td>
                  <td>During exams period (after 7 Dec 2023). Exact date TBD.</td>
                  {/* FILLIN */}
                </tr>
              </tbody>
            </Table>
            <p>
              Note that there is no final report due.
              However, if your project is theoretical in nature, you should expect to turn in a document with your primary theorems/proofs.
              More information to follow!
              {/* FILLIN */}
            </p>

            <SmallH3 id="topics-presentation">Final Assessment Option 2: Topics Paper Presentation and Reviews</SmallH3>
            <p>
              For students who don't want to complete a research project, or who simply want to learn as much about BO as possible,
              you instead have the option of a final assessment geared more towards learning about current research topics.
            </p>
            <p>
              In the second half of the course, each class will focus on 1-2 current BO papers.
              1-2 students (who choose this final assessment option) will lead the class, giving a 30-60 minute presentation on the selected papers.
              All other students (except those doing final projects) will be responsible for writing a review/reflection on one of the papers
              before the start of each class.
            </p>
            <Table striped hover id="topics-presentation-deliverables">
              <thead>
                <tr>
                  <th>Deliverable</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>One 30-60 minute presentation on 1-2 current BO papers.</td>
                  <td>Between Nov 14 to Dec 7.</td>
                  {/* FILLIN */}
                </tr>
                <tr>
                  <td>6-7 reflections/reviews on current BO papers.</td>
                  <td>Every class from Nov 14 to Dec 7.</td>
                </tr>
                <tr>
                  <td>An additional coding exercise.</td>
                  <td>TBD.</td>
                  {/* FILLIN */}
                </tr>
              </tbody>
            </Table>
            <p>
              More information to follow!
              {/* FILLIN */}
            </p>
          </div>
        </Section>


        <Section>
          <SmallH2>Course Outline</SmallH2>

          <SmallH3>Part 1: Introduction to Bayesian Optimization (7-8 courses)</SmallH3>
          <p>
            <strong>Dates</strong>. 20 Oct 2023 &mdash; 12 or 14 Nov 2023.
          </p>
          <p>
            <strong>Class format</strong>.
            I will give lectures on foundational material.
            There will be assigned readings from the { textbook }, which should
            ideally be completed before each class.  I trust that you will complete the
            readings on whatever timeline supports your schedule and learning style.  Please note that
            if you fall behind in the readings you may have trouble engaging with the research papers covered
            in the second half of the course.
          </p>
          <p>
            <strong>Assignments</strong>.
            Beyond readings, there will also be (1) the <Link inside href="#diagnostic-pset">diagnostic problem set</Link> and
            (2) a <Link inside href="#short-coding-exercise">short coding exercise</Link>.
            Additionally, those of you choosing the <Link inside href="#research-project">research project option</Link> for
            final assessment will submit your project proposal.
          </p>

          <p id="part1-topics">
            <strong>Topics</strong> will include:
          </p>
          <ol>
            <li>Introduction to blackbox/Bayesian optimization (1 class)</li>
            <li>Gaussian processes as surrogate models (2 classes)</li>
            <li>Bayesian decision and optimization theory (1 class)</li>
            <li>Acquisition functions (1 class)</li>
            <li>Computational considerations (1 class)</li>
            <li>Introduction to bandits/Bayesian optimization theory (1 class)</li>
          </ol>

          <SmallH3>Part 2: Current Topics in Bayesian Optimization Research (6-7 courses)</SmallH3>
          <p>
            <strong>Dates</strong>. 14 or 19 Nov 2023 &mdash; 7 Dec 2023.
          </p>

          <p>
            <strong>Class format</strong>.
            For the second half of the course, the classroom will be flipped.
            We will be discussing 1-2 current research papers each class.
            Each student (who isn't choosing the <Link inside href="#research-project">research project option</Link> for their final assessment)
            will be responsible for leading at least one of the topics classes.
            The class will consist of 30-minute presentations on one of the papers,
            followed by 15 minute discussions.
            (See <Link inside href="#topics-presentation">above</Link> for more details.)
          </p>
          <p>
            <small>
              (Details and scheduling for this portion of the class will be ironed out after everyone chooses their final assessment preference.)
            </small>
          </p>
          <p>
            <strong>Assignments</strong>.
            For the students who aren't leading a particular class, you will be responsible for reading the papers before the class starts.
            Furthermore, you will also have to <Link inside href="#topics-presentation-deliverables">
              write a conference/journal-style review
            </Link> of at least one of the papers presented each class.
            (Students who choose the research project option will be exempt from writing reviews.)
          </p>
          <p id="part2-topics">
            <strong>Topics</strong> will include:
          </p>
          <ul>
            <li>Local/high dimensional optimization</li>
            <li>Latent space/generative model-based optimization</li>
            <li>Mixed-space optimization</li>
            <li>Multi-objective optimization</li>
            <li>Constrained optimization</li>
            <li>Preference learning</li>
            <li>Non-myopic decision making</li>
            <li>Cost aware Bayesian optimization</li>
            <li>"Greybox" optimization</li>
            <li>Generalizations of Bayesian optimization</li>
          </ul>
          <p>
            Specific paper recommendations for each topic will be posted soon!
            {/* FILLIN */}
          </p>

        </Section>

        <Section id="assessment">
          <SmallH2>Assessment</SmallH2>
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
                <td>5%</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <Link inside href="#diagnostic-pset">
                    Diagnostic problem set
                  </Link>
                </td>
                <td>10%</td>
                <td>See description above.</td>
              </tr>
              <tr>
                <td>
                  <Link inside href="#short-coding-exercise">
                    Short coding exercise
                  </Link>
                </td>
                <td>15%</td>
                <td>See description above.</td>
              </tr>
              <tr>
                <td>
                  <Link inside href="#final-assessment">
                    Final assessment
                  </Link>
                </td>
                <td>60%</td>
                <td>
                  See description above. 
                  {/* FILLIN */} 
                  Specific grading breakdown TBD.
                </td>
              </tr>
            </tbody>
          </Table>

          <p>
            {/* FILLIN */} 
            Rubrics will be released before each assignment is due.
          </p>

          <SmallH3>Concessions</SmallH3>
          <p>
            Please { contactMe } as soon as possible if you will have trouble completing an assignment on time and/or participating in class.
            I understand the effects of life events, health circumstances (mental or physical), and scheduling,
            and I will work with you to best structure your learning/assessment. 
            Please also refer to <Link href="https://vancouver.calendar.ubc.ca/campus-wide-policies-and-regulations/academic-concession">
              UBC's policies on academic concession.
            </Link>.
          </p>
        </Section>

        <Section>
          <SmallH2>Resources</SmallH2>

          <SmallH3 id="textbook">Primary Textbook</SmallH3>
          <p>
            We will be following the brand-new textbook <Link href="https://bayesoptbook.com#download">Bayesian Optimization</Link> written 
            by <Link href="https://www.cse.wustl.edu/~garnett/">Roman Garnett</Link>. It
            is available as a free PDF online, or (for those of you who are old-school) available
            as a hardcover book from <Link href="https://www.amazon.ca/Bayesian-Optimization-Roman-Garnett/dp/110842578X">Amazon</Link>.
          </p>

          <SmallH3 id="slack">Slack Workspace</SmallH3>
          <p id="course-slack">
            We will have a Slack workspace for this course, which you will be invited to before the first day of class.
            I will communicate most announcements through the Slack rather than through email.
            There will be public channels for questions, discussions, project ideas, etc.
            Please post all non-personal questions to public channels&mdash;your fellow classmates might be able to answer them for you!
          </p>

          <SmallH3 id="textbook">Optional References</SmallH3>
          <ul>
            <li>
              <Citation
                authors="C. E. Rasmussen, C. Williams" 
                link="https://gaussianprocess.org/gpml/chapters/"
                title="Gaussian processes for machine learning"
                venue="MIT Press"
                year="2006"
                book
              />
            </li>
            <li>
              <Citation
                authors="A. Gelman, J. Carlin, H. Stern, D. Dunson, A. Vehtari, D. Rubin" 
                link="http://www.stat.columbia.edu/~gelman/book/BDA3.pdf"
                title="Bayesian data analysis, 3rd edition"
                venue="CRC Press"
                year="2013"
                book
              />
            </li>
            <li>
              Helpful review papers, including:
              <ul>
                <li>
                  <Citation
                    authors="J. Snoek, H. Larochelle, R. P. Adams"
                    link="https://arxiv.org/pdf/1206.2944.pdf"
                    title="Practical Bayesian optimization of machine learning algorithms"
                    venue="NeurIPS"
                    year={ 2012 }
                  />
                </li>
                <li>
                  <Citation
                    authors="B. Shahriari, K. Swersky, Z. Wang, R. P. Adams, N. De~Freitas"
                    link="https://www.cs.ox.ac.uk/people/nando.defreitas/publications/BayesOptLoop.pdf"
                    title="Taking the human out of the loop: A review of Bayesian optimization"
                    year={ 2015 }
                  />
                </li>
                <li>
                  <Citation
                    authors="I. Dewancker, M. McCourt, S. Clark."
                    link="https://static.sigopt.com/b/20a144d208ef255d3b981ce419667ec25d8412e2/static/pdf/SigOpt_Bayesian_Optimization_Primer.pdf"
                    title="Bayesian optimization primer"
                    year={ 2015 }
                  />
                </li>
              </ul>
            </li>
            <li>
              <Link href="https://ax.dev">AX</Link> and <Link href="https://botorch.org">BoTorch</Link> software libraries.
            </li>
          </ul>
        </Section>
      </div>
    );
  }
}

export default Stat520PSyllabus;
