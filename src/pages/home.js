import React from 'react';
import { Link, H1, H2 } from '../components/utils.js';
import CvList from '../components/cv_list.js';
import PubItem from '../components/pub_item.js';
import SoftwareItem from '../components/software_item.js';
import Student from '../components/student.js';
import TalkItem from '../components/talk_item.js';
import bio from '../components/bio.js';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/fontawesome-free-solid';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

// Data
import { students } from '../data/students';
import { publicationsDict } from '../data/publications';

// Assets
import meImg from '../images/me.jpg';
import cv from '../pdfs/geoffpleiss_cv.pdf';
import researchStatement from '../pdfs/geoffpleiss_research_statement.pdf';
import teachingStatement from '../pdfs/geoffpleiss_teaching_statement.pdf';
import deiStatement from '../pdfs/geoffpleiss_dei_statement.pdf';


class Home extends React.Component {
  constructor(props) {
    super(props);
		this.toggleShortBioModal = this.toggleShortBioModal.bind(this);
    this.state = {
      items : [],
			shortBioModalOpen: false,
      loading: false
    };
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(state) {
    this.setState(state);
  }

	toggleShortBioModal() {
		this.setState({
			shortBioModalOpen: !this.state.shortBioModalOpen
		});
	}

  render() {
    const picture = (
      <picture className="d-inline-block mb-md-4 ml-md-5">
        <img className="rounded img-thumbnail" alt="Geoff Pleiss" src={meImg} style={{width: '100%', maxWidth: '275px'}}></img>
      </picture>
    );

    const introText = (
      <span>
        I am an assistant professor in the {" "}
        <Link className="text-muted" href="http://stat.ubc.ca/">Department of Statistics</Link>{" "}
        at the University of British Columbia,
        where I am an inaugural member of {" "}
        <Link className="text-muted" href="http://caida.ubc.ca/">CAIDA's</Link> {" "}
        <Link className="text-muted" href="http://caida.ubc.ca/aim-si">AIM-SI</Link> (AI Methods for Scientific Impact) cluster.
        I am also a <Link className="text-muted" href="https://cifar.ca/ai/canada-cifar-ai-chairs/">Canada CIFAR AI Chair</Link>{" "}
        and a faculty member at the {" "}
        <Link className="text-muted" href="http://vectorinstitue.ai/">Vector Institute</Link>.
      </span>
    );

    const homePagePublicationIds = [
      "doumont2026we",
      "zhou2025asymmetric",
      "dern2025theoretical",
      "maus2024approximation",
      "abe2022deep",
      "gardner2018gpytorch",
      "pleiss2017fairness",
      "guo2017calibration",
    ]

    return (
      <div>
        <div className="container py-8 pt-md-10">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-8">
              <H1 mb="0" className="text-center text-md-left">Geoff Pleiss</H1>

              <div className="col-12 d-md-none text-center my-3">{ picture }</div>

              <div className="row mx-0 mb-5 text-muted font-italic text-center text-md-left">
                <div className="col-12 col-xl-12 px-md-0 mt-3">
                  Assistant Professor,{" "}
                  <Link className="text-muted" href="http://stat.ubc.ca/">UBC Department of Statistics</Link>
                  <br />
                  CIFAR AI Chair,{" "}
                  <Link className="text-muted" href="http://vectorinstitute.ai/">Vector Institute</Link>
                  <br />
                  <FontAwesomeIcon icon={faEnvelopeSquare} size="1x" title="Email: " className="mr-3" />
                  geoff.pleiss &lt;at&gt; stat.ubc.ca
                </div>
              </div>

              <p className="d-none d-xl-block" aria-hidden="true">{ introText }</p>
            </div>

            <div className="col-md-6 col-xl-4 d-none d-md-block text-md-right" aria-hidden="true">{ picture }</div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <p className="d-xl-none">{ introText }</p>
              <p>
                My research interests intersect deep learning and probablistic modeling.
                More specifically, I'm interested in heuristic and approximate notions of uncertainty from machine learning models,
                and how they can inform reliable and optimal downstream decisions within the contexts of experimental design and scientific discovery.
                Major focuses of my work include:
              </p>
              <ol>
                <li>neural network uncertainty quantification,</li>
                <li>Bayesian optimization,</li>
                <li>Gaussian processes, and</li>
                <li>ensemble methods.</li>
              </ol>
              <p>
                I am also an active open source contributior.
                Most notably, I co-created and maintain the <Link href="http://gpytorch.ai">GPyTorch</Link> Gaussian process library with <Link href="https://jacobrgardner.github.io/">Jake Gardner</Link>.
              </p>
              <p>
                Previously, I was a postdoc at Columbia University with <Link href="https://stat.columbia.edu/~cunningham/">John P. Cunningham</Link>.
                I received my Ph.D. from the CS department at Cornell University in 2020
                where I was advised by <Link href="http://kilian.cs.cornell.edu/">Kilian Weinberger</Link> and
                also worked closely with <Link href="https://cims.nyu.edu/~andrewgw/">Andrew Gordon Wilson</Link>.
              </p>
            </div>
            <div className="col-md-12">
              <ul className="list-inline mt-2">
                <li className="list-inline-item mt-2">
                  <Link className="btn btn-light" role="button" href={cv}>CV</Link>
                </li>
                <li className="list-inline-item mt-2">
                  <button className="btn btn-light" onClick={this.toggleShortBioModal}>Short Bio</button>
                </li>
                <li className="list-inline-item mt-2">
                  <Link className="btn btn-light" role="button" href={researchStatement}>Research Statement</Link>
                </li>
                <li className="list-inline-item mt-2">
                  <Link className="btn btn-light" role="button" href={teachingStatement}>Teaching Statement</Link>
                </li>
                <li className="list-inline-item mt-2">
                  <Link className="btn btn-light" role="button" href={deiStatement}>DEI Statement</Link>
                </li>
              </ul>
              <Modal size="lg" isOpen={this.state.shortBioModalOpen} toggle={this.toggleShortBioModal}>
                <ModalHeader className="ml-3 mr-3" toggle={this.toggleShortBioModal}>Short Bio</ModalHeader>
                <ModalBody>
                  <p className="m-3">{ bio }</p>
                </ModalBody>
              </Modal>
            </div>
          </div>
        </div>

        <section className="pt-10 pb-8 bg-light">
          <div className="container">
            <H2 className="mb-1" mb="0">Current Students and Interns</H2>
            <ul className="mt-5 list-unstyled row">
              {
                students.filter((student) => !!student.current).map((student) => <Student {...student} />)
              }
            </ul>
            <div className="clearfix"></div>
            <hr className="mt-4 mb-5" />
            <div className="row">
              <div className="col-sm-12">
                <p>
                  <strong>Interested in joining my lab?</strong>
                {/*
                  I am looking for prospective M.S. students, Ph.D students, and postdocs with research interests similar to my own.
                  While I am open to strong students with any ML/stats interests,
                  I am particularly hoping to hire lab members interested in theoretical or applied work on Bayesian optimization or neural network uncertainty quantification.
                </p>
                <p>
                */}
                  {' '}
                  See the <Link inside href="/prospective_member.html">page on joining my lab</Link> for information on how to apply/contact me.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-10 pb-8">
          <div className="container">
            <div className="row pt-4 pb-8">
              <div className="col-md-12">
                <H2 className="mb-1" mb="0">Recent and Selected Publications</H2>
                <p className="mb-5">
                  <small className="font-italic">For a full list of publications, please see my <Link href={cv}>CV</Link> or my <Link href="https://scholar.google.com/citations?user=XO8T-Y4AAAAJ&hl=en&oi=ao">Google Scholar</Link> page.</small>
                </p>

                <CvList className="list-unstyled">
                  { homePagePublicationIds.map((id) => <PubItem {...publicationsDict[id] } />) }
                </CvList>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-8 pb-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <H2 className="mb-1" mb="0">Recent and Selected Talks</H2>
                <div className="mb-5"></div>
                <CvList>
                  <TalkItem
                    title="Ensembles in the Age of Overparameterization: Promises and Pathologies"
                    tagline="Recent empirical and theoretical work characterizing ensembles of neural networks."
                    date="Oct. 2024"
                    href="https://www.youtube.com/watch?v=LINT01z05Bs"
                  />
                  <TalkItem
                    title="Troubling Trajectories for Uncertainty Quantification and Decision Making with Neural Networks"
                    tagline="A discussion of uncertainty quantification and my recent work on neural network ensembles."
                    date="Dec. 2023"
                    href="https://www.youtube.com/watch?v=703FzYv-j9o&ab_channel=VectorInstitute"
                  />
                  <TalkItem
                    title="Bridging The Gap Between Deep Learning and Probabilistic Modeling"
                    tagline="A talk connecting my Gaussian process and neural network research."
                    date="Spring 2022"
                    href="https://www.youtube.com/watch?v=TUV4oEY33pE&ab_channel=CUEngineeringAcademics"
                  />
                </CvList>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-8 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <H2 className="mb-1" mb="0">Selected Open Source</H2>
                <p className="mb-5">
                  <small className="font-italic">For a full list of respositories I actively contribute to, please see my <Link href="https://github.com/gpleiss">Github</Link> page.</small>
                </p>
                <CvList>
                  <SoftwareItem title="GPyTorch"
                    status="v1.14 Release"
                    coauthors={[
                      "Jacob R. Gardner"
                    ]}
                    tagline="A implementation of Gaussian processes in PyTorch, designed for speed, modularity, and prototyping."
                    website="https://gpytorch.ai"
                    github="https://github.com/cornellius-gp/GPyTorch"
                  >
                  </SoftwareItem>
                  <SoftwareItem title="CoLA (Compositional Linear Algebra)"
                    status="Beta Release"
                    coauthors={[
                      "Andres Potapczynski",
                      "Marc Anton Finzi",
                    ]}
                    tagline="A library for structured linear algebra operations in JaX and PyTorch."
                    website="https://cola.readthedocs.io/"
                    github="https://github.com/wilson-labs/cola"
                  >
                  </SoftwareItem>
                  <SoftwareItem title="LinearOperator"
                    status="v0.6 Release"
                    coauthors={["Max Balandat"]}
                    tagline="A library for structured linear algebra operations in PyTorch."
                    website="https://linear-operator.readthedocs.io/en/latest/"
                    github="https://github.com/cornellius-gp/linear_operator"
                  >
                  </SoftwareItem>
                  {/*
                    <SoftwareItem title="Area Under the Margin (AUM)"
                      coauthors={[
                        "Josh Shapiro"
                      ]}
                      tagline="A Python package for computing the AUM statistic with PyTorch models."
                      github="https://github.com/asappresearch/aum"
                    >
                    </SoftwareItem>
                    <SoftwareItem title="Memory-Efficient DenseNets (PyTorch)"
                      coauthors={[
                        "Danlu Chen",
                        "Gao Huang"
                      ]}
                      tagline="A PyTorch implementation of DenseNets, optimized to save GPU memory."
                      github="https://github.com/gpleiss/efficient_densenet_pytorch"
                      report="https://arxiv.org/pdf/1707.06990.pdf"
                    >
                    </SoftwareItem>
                  */}
                </CvList>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
