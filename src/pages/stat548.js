import React from 'react';
import { Link, H1, SmallH2, SmallH3, Section } from '../components/utils.js';


//const monthNames = [
  //"January", "February", "March", "April", "May", "June",
  //"July", "August", "September", "October", "November", "December"
//];
//const today = new Date();
//const updated = today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
const updated = "29 August 2023";


class PaperLi extends React.Component {
  render() {

    const venueStr = this.props.venue ? this.props.venue + ', ' + this.props.year : 'ArXiV, ' + this.props.year;

    let bodyStr = '';
    if (!!this.props.children) {
      bodyStr = (
        <p className="font-italic text-secondary">({ this.props.children })</p>
      )
    }
    
    const link = this.props.taken ? (
      <del>{ this.props.title }</del>
    ) : (
      <Link href={ this.props.link }>{ this.props.title }</Link>
    );

    let liClassName = "mb-3";
    if (this.props.taken) {
      liClassName += " text-secondary"
    }

    return (
      <li className={ liClassName }>
        { link }<br />
        <span>{ this.props.authors }</span><br />
        <span>{ venueStr }</span><br />
        <strong>Topics:</strong> { this.props.topics }<br />
        <strong>Style:</strong> { this.props.styl }
        { bodyStr }
      </li>
    )
  }
}


class Stat548 extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-gradient-primary pt-10 pb-5 shadow-bottom">
          <div className="container text-center">
            <H1>STAT548 PhD Qualifying Course Papers</H1>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Section>
                <div>
                  <strong>Published:</strong> 10 August 2023
                  <br />
                  <strong>Last Updated:</strong> { updated }
                </div>
              </Section>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <Section>
                <p>
                  If you are interested in a qualifying paper with me,
                  please email me to schedule a one-on-one meeting.
                  The subject line of your email should start with "[Qualifying Paper]" to ensure I don't accidentally miss it.
                  Come to the meeting prepared to discuss:
                </p>
                <ul>
                  <li>your background,</li>
                  <li>your long-term research interests (it's okay if these are not yet well-defined),</li>
                  <li>the specific paper you are interested in and the reasons for your interest,</li>
                  <li>your planned submission date for your report (typically 4-6 weeks after we meet), and</li>
                  <li>initial ideas for a mini-project based on the paper.</li>
                </ul>
                <p>
                  To ensure a productive meeting, please spend some time reviewing the paper before we meet.
                </p>
              </Section>
            </div>

            <div className="col-sm-12">
              <Section>
                <SmallH2>What to Expect From Me as a Supervisor</SmallH2>
                <p>
                  The qualifying papers I've listed below are representative of my research interests,
                  which broadly encompass many sub-areas of machine learning:
                </p>
                <ol className="my-3">
                  <li>Gaussian processes,</li>
                  <li>Bayesian optimization,</li>
                  <li>neural networks, and</li>
                  <li>ensemble methods.</li>
                </ol>
                <p>
                  Within the realm of neural networks, my primary focus includes uncertainty quantification,
                  robustness under covariate shift, theoretical models of overparameterization/fine-tuning, and connections to Bayesian inference.
                  I'm also open to supervising qualifying papers on generative models (though you'll need to propose your own paper).
                </p>

                <p>
                  In general, I aim to supervise projects (and students) who are interested in either theoretical or methodological projects.
                  Consider which research style you would like to pursue under my supervision.
                  (In either case, expect to do both math and coding!)
                  I'm also happy to work with students who want to relate/apply/extend one of the qualifying papers to a specific subject domain.
                </p>
              </Section>

              <Section>
                <SmallH2>Timeline and Deliverables</SmallH2>
                <p>
                  The final report for your qualifying paper will comprise two parts:
                  (1) an extended review demonstrating your comprehension and critical evaluation of the paper, and
                  (2) a mini-research project.
                  Part 1 (the extended review) should take 2-3 weeks, and Part 2 (the project) should take 3-4 weeks.
                </p>

                <SmallH3>Part 1: The Extended Review</SmallH3>
                <p>
                  The extended review should be divided into three sections:
                </p>
                <ol>
                  <li className="mb-3">
                    <strong>Publication-style review (roughly 2 pages)</strong><br />
                    <p>
                      Write a review of the paper as if you were on the program committee for a conference/journal.
                      This exercise will help you think critically about the paper,
                      and it will prepare you for future reviewing tasks.
                      Your review should include the following:
                    </p>
                    <ul>
                      <li>A 1-paragraph summary of the paper in your own words.</li>
                      <li>A paragraph with high-level comments on the paper's strengths/weaknesses/relation to other work.</li>
                      <li>4 paragraphs covering each of the following dimensions (taken from NeurIPS guidelines):
                        <ol>
                          <li><em>Originality:</em> Are the tasks or methods new? Is the work a novel combination of well-known techniques? (This can be valuable!) Is it clear how this work differs from previous contributions? Is related work adequately cited.</li>
                          <li><em>Quality:</em> Is the submission technically sound? Are claims well supported (e.g., by theoretical analysis or experimental results)? Are the methods used appropriate? Is this a complete piece of work or work in progress? Are the authors careful and honest about evaluating both the strengths and weaknesses of their work.</li>
                          <li><em>Clarity:</em> Is the submission clearly written? Is it well organized? (If not, please make constructive suggestions for improving its clarity.) Does it adequately inform the reader? (Note that a superbly written paper provides enough information for an expert reader to reproduce its results.)</li>
                          <li><em>Significance:</em> Are the results important? Are others (researchers or practitioners) likely to use the ideas or build on them? Does the submission address a difficult task in a better way than previous work? Does it advance the state of the art in a demonstrable way? Does it provide unique data, unique conclusions about existing data, or a unique theoretical or experimental approach?</li>
                        </ol>
                      </li>
                      <li>A list of more than 2 questions you have for the authors.</li>
                    </ul>
                  </li>

                  <li className="mb-3">
                    <strong>Technical/methodological summary (roughly 3 pages)</strong><br />
                    <p>
                      This section should exhibit your grasp of the paper's technical content.
                      Expect to review some related literature,
                      as you should be able to contextualize the paper within the broader subfield.
                      Address the following prompts in your summary:
                    </p>
                    <ul>
                      <li>
                        <em>Theory papers:</em> Provide a concise overview of primary technical outcomes and major proof techniques.
                        Explain assumptions and their rationale.
                        Relate to existing results and potential relaxations.
                        Highlight innovative proof techniques.
                      </li>
                      <li>
                        <em>Methodological papers:</em> Explain the proposed methodology and its theoretical properties.
                        Discuss computational complexity.
                        Identify crucial aspects and potential bottlenecks.
                        Mention alternative methods that could also be appplied to the given problem.
                      </li>
                    </ul>
                  </li>

                  <li className="mb-3">
                    <strong>Mini-project proposal (roughly 1-2 pages)</strong><br />
                    <p>
                      This section should demonstrate your ability to think creatively about research.
                      Brainstorm a generalization, extension, or novel application of the paper's content.
                      Dreaming too big is better than dreaming too small:  
                      aim for a project with potential for publication or inclusion in your thesis.
                      (I'll help you scope whatever you come up with into a 3-4 week mini-project.)
                    </p>
                    <p>
                      Your proposal should
                      (1) describe the area of opportunity,
                      (2) propose a method/approach,
                      (3) identify expected technical challenges/bottlenecks, and 
                      (4) predict potential impact.
                    </p>
                  </li>
                </ol>

                <SmallH3>Part 2: The (Mini) Project</SmallH3>
                <p>
                  After completing a draft of your extended review, we'll meet one-on-one to define a 3-4 week project based on your proposal.
                  You will turn in a 4+ page report along with associated code and data.
                  The content of the project will depend on the style of the paper
                </p>
                <ul>
                  <li>
                    <em>Theory papers:</em> If you choose a paper that is
                    purely theoretical in nature, I will expect a predominantly
                    mathematical project (extending the paper's theorems to a
                    novel setting, apply the paper's proof techniques to a
                    different problem, etc).
                  </li>
                  <li>
                    <em>Methodological papers:</em> Expect a mix of theory and
                    coding, as well as getting your hands dirty with some
                    real-world data.  (If you want to use a language other than
                    Python, you will need a really convincing argument!)
                  </li>
                </ul>
                <p>
                  <strong>Workflow expectations:</strong> My research approach tends to be highgly iterative, and I anticipate the same for our mini-projects.
                  Initial project ideas will likely require modification to be fruitful. Be prepared to pivot or adjust your project, perhaps more than once.
                </p>
                <p>
                  In my opinion, a good researcher knows when to "fail fast."
                  Most research ideas don't work, so figure out the fastest way to evaluate whether your ideas are likely to be dead ends.
                  Design a minimal experiment/derivation for quick evaluation.
                  If results seem promising in a week or two, continue pursuing the idea. Otherwise, adapt or pivot.
                </p>
                <p>
                  I expect you to check in with me at least once (ideally more) over the course of your project.
                  Share (1) early results indicating your approach's viability and (2) your plan to pivot or adapt based on those results.
                  Slack communication is preferred, but I'm always happy to meet in person if you want to bounce ideas off of each other.
                </p>
                <p>
                  <strong>Formatting:</strong> Submit the report as a GitHub repository, using the template
                  at <Link href="https://github.com/ben-br/qp-template/">https://github.com/ben-br/qp-template/</Link>.  The
                  template includes a LATEX style file that should be used for the report.
                  (Detailed instructions for usage can be found in the repository’s README file.)
                  Ensure that the experimental results are reproducible.
                  Write reusable/documented/well-commented Python code, and publish the code in a GitHub repo that I have access to.
                  I should easily install and run your experiments.
                </p>
              </Section>

              <Section>
                <SmallH2>What I am Looking For</SmallH2>
                <SmallH3>Official Assessment</SmallH3>
                <p>
                  As outlined in the <Link href="https://www.stat.ubc.ca/sites/default/files/reportcard.pdf">assessment form</Link>, your evaluation will be based on:
                  (1) your overall comprehension,
                  (2) your ability to "go beyond," and
                  (3) your work habits/reporting/communication skills.
                  The extended review should showcase your understanding,
                  while the mini-research project should demonstrate your creative thinking and ability to "go beyond."
                </p>

                <SmallH3>Unofficial Assessment</SmallH3>
                <p>
                  The qualifying paper also gives me the chance to gauge your research potential and our compatibility in a mentor-mentee dynamic.
                  I will not judge you based on how good your project results are.
                  Rather, I will evaluate you on the following:
                </p>
                <ul>
                  <li>shared research interests,</li>
                  <li>strong technical proficiency (or an ability to quickly acquire new skills),</li>
                  <li>capacity to "fail fast" (as described in the project details),</li>
                  <li>independence and proactivity,</li>
                  <li>effective communication of when assistance is needed,</li>
                  <li>receptiveness to feedback, and</li>
                  <li>awareness of the societal and ethical implications of machine learning research.</li>
                </ul>
              </Section>

              <Section>
                <SmallH2>Qualifying Papers (updated { updated })</SmallH2>
                <p>
                  If a paper is crossed out, then it is no longer available.
                </p>
                <ol>
                  <PaperLi
                    title="Matérn Gaussian Processes on Graphs"
                    authors="V. Borovitskiy, I. Azangulov, A. Terenin, P. Mostowsky, M.P. Deisenroth, N. Durrande"
                    venue="AISTATS"
                    year="2021"
                    link="https://arxiv.org/abs/2010.15538"
                    topics="Gaussian processes, kernels"
                    styl="Methodological"
                  >
                  </PaperLi>
                  <PaperLi
                    title="The Behavior and Convergence of Local Bayesian Optimization"
                    authors="K. Wu, K. Kim, R. Garnett, J.R. Gardner"
                    year="2023"
                    link="https://arxiv.org/abs/2305.15572"
                    topics="Bayesian optimization"
                    styl="Theoretical"
                  >
                  </PaperLi>
                  <PaperLi
                    title="Bayesian Optimization with Conformal Prediction Sets"
                    authors="S. Stanton, W. Maddox, A.G. Wilson"
                    venue="AISTATS"
                    year="2023"
                    link="https://arxiv.org/abs/2210.12496"
                    topics="Bayesian optimization, conformal prediction"
                    styl="Methodological"
                  >
                  </PaperLi>
                  <PaperLi
                    title="Prediction-Powered Inference"
                    authors="A. Angelopoulos, S. Bates, C. Fannjiang, M.I. Jordan, T. Zrnic"
                    year="2023"
                    link="https://arxiv.org/abs/2301.09633"
                    topics="Uncertainty quantification, neural networks, conformal prediction"
                    styl="Methodological"
                  >
                  </PaperLi>
                  <PaperLi
                    title="Generalization Properties of Learning with Random Features"
                    authors="A. Rudi, L. Rosasco"
                    venue="NeurIPS"
                    year="2017"
                    link="https://arxiv.org/abs/1602.04474"
                    topics="Kernels, neural networks"
                    styl="Theoretical"
                  >
                    Although this paper is about kernel machines more generally,
                    I am interested in applying some of its techniques to neural network ensembles.
                    You should consider this paper if you are interested in deep learning theory.
                  </PaperLi>
                  <PaperLi
                    title="Fine-Tuning can Distort Pretrained Features and Underperform Out-of-Distribution"
                    authors="A. Kumar, A. Raghunathan, R. Jones, T. Ma, P. Liang"
                    venue="ICLR"
                    year="2022"
                    link="https://arxiv.org/abs/2202.10054"
                    topics="Neural networks, pretraining, covariate shift"
                    styl="Theoretical, methodological"
                  >
                  </PaperLi>
                </ol>
              </Section>

              <Section>
                <SmallH2>
                  Useful Resources/Advice
                </SmallH2>
                  <p>
                    Many of these links have been shared by other faculty members as well:
                  </p>
                  <ul>
                    <li>Nancy Heckman's <Link href="http://ugrad.stat.ubc.ca/~nancy/writing/">page on technical writing,</Link></li>
                    <li>Harry Joe's <Link href="http://www.stat.ubc.ca/~harry/papers/">page on mathematical writing and typesetting in LaTeX,</Link></li>
                    <li>Trevor Campbell's <Link href="https://docs.google.com/presentation/d/13vwchlzQAZjjfiI3AiBC_kM-syI6GJKzbuZoLxgy1a4/edit">talk on "How to Explain Things,"</Link></li>
                    <li>Knuth, Larrabee, and Roberts <Link href="http://www.jmlr.org/reviewing-papers/knuth_mathematical_writing.pdf">on mathematical writing,</Link></li>
                    <li>"Getting Started with Git": <Link href="https://git-scm.com/book/en/v2">Chapters 1 and 2</Link>, and</li>
                    <li>my <Link href="../../git_wizard.pdf">talk on "How to Be a Git Wizard"</Link> (if git still scares you after reading the above resource).</li>
                  </ul>
              </Section>

              <Section>
                <p>
                  <small>
                    Many parts of this document were derived/adapted/copied from Ben, Trevor, Marie, and Daniel. Thanks all!
                  </small>
                </p>
              </Section>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Stat548;
