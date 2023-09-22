import React from 'react';
import { Link, H2 } from '../components/utils.js';


class ProspectiveMember extends React.Component {
  render() {
    return (
      <div>
        <div className="container py-8 pt-md-10">
          <div className="row">
            <div className="col-12">
              <section>
                <H2>How to Apply</H2>
                <dl className="row">
                  <dt className="col-lg-3">
                    Prospective MSc/PhD students:
                  </dt>
                  <dd className="col-lg-9">
                    <p>
                      Applications go through the <Link href="https://www.stat.ubc.ca/graduate-admissions">UBC stats department</Link>. Mention me as a potential advisor.
                    </p>
                    <p>
                      You can also apply to the <Link href="https://www.cs.ubc.ca/students/grad/admissions">UBC CS department</Link> if you would prefer to take CS courses/fulfil CS degree requirements.
                      (I will also have the ability to be the primary advisor for CS students.)
                      Again, mention me as a potential advisor.
                    </p>
                  </dd>
                  <dt className="col-lg-3 mt-3">
                    Prospective postdocs:
                  </dt>
                  <dd className="col-lg-9 mt-lg-3">
                    Applications go through <Link href="https://vectorinstitute.bamboohr.com/jobs/view.php?id=136">Vector's post-doctoral fellowship.</Link> Mention me as a potential advisor.
                  </dd>
                </dl>
              </section>
              <section className="mt-5">
                <H2>Should I Contact You?</H2>
                <p>
                  You may email me directly to start a conversation and let me know that you are interested.
                  However, I will only respond if I think you are a good candidate, so you'll need to give me enough information to work with.
                </p>
                <p>
                  Tell me about your prior research experience and your current research interests.
                  Most importantly, <em>please let me know why you want to specificity work with me</em>.
                  I prefer substance over flattery.
                  If you say "I wish to join your esteemed lab to work on important problems in machine learning," then I will likely not respond.
                  If you say "I am interested in uncertainty quantification for neural networks. I admire your recent studies of ensemble methods, and I have a few follow up research ideas..." then I'll be interested in following up with you!
                </p>
                <p>
                  You should include "[Potential Pleiss lab member]" in your email subject. (That will let me know that you've read the information on this page!)
                </p>
              </section>
              <section className="mt-5">
                <H2>Are There Internship, Undergraduate, or Visiting Student Opportunities?</H2>
                <p>
                  I will likely hire undergraduates directly through UBC's internal programs.
                  Look out for postings this winter.
                  It doesn't hurt to contact me about other opportunities, but again I won't respond unless you pique my interest.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default ProspectiveMember;
