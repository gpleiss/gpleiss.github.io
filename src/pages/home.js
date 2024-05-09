import React from 'react';
import { Link, H2 } from '../components/utils.js';
import CvList from '../components/cv_list.js';
import PubItem from '../components/pub_item.js';
import SoftwareItem from '../components/software_item.js';
import TalkItem from '../components/talk_item.js';
import bio from '../components/bio.js';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/fontawesome-free-solid';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

// Assets
import meImg from '../images/me.jpg';


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

    return (
      <div>
        <div className="container py-8 pt-md-10">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-8">
              <H2 noMb className="text-center text-md-left">Geoff Pleiss</H2>

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
                Previously, I was a postdoc at Columbia University with <Link href="https://stat.columbia.edu/~cunningham/">John P. Cunningham</Link>.
                I received my Ph.D. from the CS department at Cornell University in August 2020.
                where I was advised by <Link href="http://kilian.cs.cornell.edu/">Kilian Weinberger</Link> and
                also worked closely with <Link href="https://cims.nyu.edu/~andrewgw/">Andrew Gordon Wilson</Link>.
              </p>
              <p>
                My research interests intersect deep learning and probablistic modeling.
                Major focuses of my work include:
              </p>
              <ol>
                <li>neural networks,</li>
                <li>uncertainty quantification,</li>
                <li>probabilistic modeling, and</li>
                <li>Bayesian optimization.</li>
              </ol>
              <p>
                More specifically, some recent interests include
              </p>
              <ol>
                <li>"reliable" neural networks,</li>
                <li>ensemble methods, and</li>
                <li>Gaussian processes.</li>
              </ol>
              <p>
                I am also an active open source contributior.
                Most notably, I co-created and maintain the <Link href="http://gpytorch.ai">GPyTorch</Link> Gaussian process library with <Link href="https://jacobrgardner.github.io/">Jake Gardner</Link>.
              </p>
            </div>
            <div className="col-md-12">
              <ul className="list-inline mt-2">
                <li className="list-inline-item mt-2">
                  <Link className="btn btn-light" role="button" href="/geoffpleiss_cv.pdf">CV</Link>
                </li>
                <li className="list-inline-item mt-2">
                  <button className="btn btn-light" onClick={this.toggleShortBioModal}>Short Bio</button>
                </li>
                <li className="list-inline-item mt-2">
                  <Link className="btn btn-light" role="button" href="/geoffpleiss_research_statement.pdf">Research Statement</Link>
                </li>
                <li className="list-inline-item mt-2">
                  <Link className="btn btn-light" role="button" href="/geoffpleiss_teaching_statement.pdf">Teaching Statement</Link>
                </li>
                <li className="list-inline-item mt-2">
                  <Link className="btn btn-light" role="button" href="/geoffpleiss_dei_statement.pdf">DEI Statement</Link>
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
          <div className="clearfix"></div>
          <hr className="mt-4 mb-5" />
          <div className="row">
            <div className="col-sm-12">
              <p>
                <strong>Interested in joining my lab?</strong> I
                am looking for prospective M.S. students, Ph.D students, and postdocs with research interests similar to my own.
                While I am open to strong students with any ML/stats interests, I am particularly hoping to hire lab members for the following research topics:
              </p>
              <ul>
                <li>Bayesian optimization,</li>
                <li>spatiotemporal modeling, and</li>
                <li>neural network uncertainty quantification.</li>
              </ul>
              See the <Link inside href="/prospective_member.html">page on joining my lab</Link> for information on how to apply/contact me.
            </div>
          </div>
        </div>

        <section className="pt-10 pb-8 bg-light">
          <div className="container">
            <div className="row pt-4 pb-8">  
              <div className="col-md-12">
                <H2 className="mb-1" noMb>Recent and Selected Publications</H2>
                <p className="mb-5">
                  <small className="font-italic">For a full list of publications, please see my <Link href="/geoffpleiss_cv.pdf">CV</Link> or my <Link href="https://scholar.google.com/citations?user=XO8T-Y4AAAAJ&hl=en&oi=ao">Google Scholar</Link> page.</small>
                </p>
                
                <CvList className="list-unstyled">
                  <PubItem title="Layerwise proximal replay: A proximal point method for online continual learning."
                    authors={[
                      "Jinsoo Yoo",
                      "Yunpeng Liu",
                      "Frank Wood",
                      "Geoff Pleiss",
                    ]}
                    isNew
                    arxiv="https://arxiv.org/abs/2402.09542"
                    pdf="https://arxiv.org/pdf/2402.09542.pdf"
                    conference="ICML"
                    year="2024"
                  />
                  <PubItem title="A Sober Look at LLMs for Material Discovery: Are They Actually Good for Bayesian Optimization Over Molecules?"
                    authors={[
                      "Agustinus Kristiadi",
                      "Felix Strieth-Kalthoff",
                      "Marta Skreta",
                      "Pascal Poupart",
                      "Al\u00E1n Aspuru-Guzik",
                      "Geoff Pleiss",
                    ]}
                    isNew
                    arxiv="https://arxiv.org/abs/2402.05015"
                    pdf="https://arxiv.org/pdf/2402.05015.pdf"
                    conference="ICML"
                    year="2024"
                  />
                  <PubItem title="Large-Scale Gaussian Processes via Alternating Projection"
                    authors={[
                      "Kaiwen Wu",
                      "Jonathan Wenger",
                      "Hadyn Jones",
                      "Geoff Pleiss",
                      "Jacob R. Gardner",
                    ]}
                    isNew
                    arxiv="https://arxiv.org/abs/2310.17137"
                    pdf="https://arxiv.org/pdf/2310.17137.pdf"
                    conference="AISTATS"
                    year="2024"
                  />
                  <PubItem title="Pathologies of Predictive Diversity in Deep Ensembles"
                    authors={[
                      "Taiga Abe",
                      "E. Kelly Buchanan",
                      "Geoff Pleiss",
                      "John P. Cunningham",
                    ]}
                    award="featured paper"
                    arxiv="https://arxiv.org/abs/2302.00704"
                    pdf="https://arxiv.org/pdf/2302.00704.pdf"
                    isNew
                    conference="TMLR"
                    year="2024"
                  />
                  <PubItem title="CoLA: Exploiting Compositional Structure for Automatic and Efficient Numerical Linear Algebra"
                    authors={[
                      "Andres Potapczynski*",
                      "Marc Anton Finzi*",
                      "Geoff Pleiss",
                      "Andrew Gordon Wilson",
                    ]}
                    arxiv="https://arxiv.org/abs/2309.03060"
                    pdf="https://arxiv.org/pdf/2309.03060.pdf"
                    github="https://github.com/wilson-labs/cola"
                    conference="NeurIPS"
                    year="2023"
                  />
                  <PubItem title="Posterior and Computational Uncertainty in Gaussian Processes"
                    authors={[
                      "Jonathan Wenger",
                      "Geoff Pleiss",
                      "Marvin Pf\u00f6rtner",
                      "Philipp Hennig",
                      "John P. Cunningham",
                    ]}
                    arxiv="https://arxiv.org/abs/2205.15449"
                    pdf="https://arxiv.org/pdf/2205.15449.pdf"
                    github="https://github.com/JonathanWenger/itergp"
                    conference="NeurIPS"
                    year="2022"
                  />
                  <PubItem title="Deep Ensembles Work, But Are They Necessary?"
                    authors={[
                      "Taiga Abe*",
                      "E. Kelly Buchanan*",
                      "Geoff Pleiss",
                      "Richard Zemel",
                      "John P. Cunningham",
                    ]}
                    arxiv="https://arxiv.org/abs/2202.06985"
                    pdf="https://arxiv.org/pdf/2202.06985.pdf"
                    github="https://github.com/cellistigs/interp_ensembles"
                    talk="https://www.youtube.com/watch?v=703FzYv-j9o&ab_channel=VectorInstitute"
                    conference="NeurIPS"
                    year="2022"
                  />
                  <PubItem title="The Limitations of Large Width in Neural Networks: A Deep Gaussian Process Perspective"
                    authors={[
                      "Geoff Pleiss",
                      "John P. Cunningham"
                    ]}
                    arxiv="https://arxiv.org/abs/2106.06529"
                    pdf="https://arxiv.org/pdf/2106.06529.pdf"
                    conference="NeurIPS"
                    github="https://github.com/gpleiss/limits_of_large_width"
                    talk="https://slideslive.com/38967621/the-limitations-of-large-width-in-neural-networks-a-deep-gaussian-process-perspective?ref=search-presentations-geoff+pleiss"
                    year="2021"
                  />
                  <PubItem title="GPyTorch: Blackbox Matrix-Matrix Gaussian Process Inference with GPU Acceleration"
                    authors={[
                      "Jacob R. Gardner*",
                      "Geoff Pleiss*",
                      "David Bindel",
                      "Kilian Q. Weinberger",
                      "Andrew Gordon Wilson",
                    ]}
                    arxiv="https://arxiv.org/abs/1809.11165"
                    pdf="https://arxiv.org/pdf/1809.11165.pdf"
                    award="spotlight"
                    conference="NeurIPS"
                    year="2018"
                    talk="https://www.videoken.com/embed/QcFGBPNh24E?tocitem=101"
                    github="https://github.com/cornellius-gp/gpytorch"
                  />	
                  <PubItem title="On Fairness and Calibration"
                    authors={[
                      "Geoff Pleiss*",
                      "Manish Raghavan*",
                      "Felix Wu",
                      "Jon Kleinberg",
                      "Kilian Q. Weinberger",
                    ]}
                    conference="NeurIPS"
                    year="2017"
                    arxiv="https://arxiv.org/abs/1709.02012"
                    pdf="https://arxiv.org/pdf/1709.02012.pdf"
                    github="https://github.com/gpleiss/equalized_odds_and_calibration"
                  />	
                  <PubItem title="On Calibration of Modern Neural Networks"
                    authors={[
                      "Chuan Gao*",
                      "Geoff Pleiss*",
                      "Yu Sun*",
                      "Kilian Q. Weinberger",
                    ]}
                    conference="ICML"
                    year="2017"
                    website="/blog/nn_calibration.html"
                    arxiv="https://arxiv.org/abs/1706.04599"
                    pdf="https://arxiv.org/pdf/1706.04599.pdf"
                    github="https://github.com/gpleiss/temperature_scaling"
                    talk="https://vimeo.com/238242536"
                  />	
                </CvList>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-8 pb-5 bg-medium text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <H2 className="mb-1 text-light" noMb>Recent and Selected Talks</H2>
                <div className="mb-5"></div>
                <CvList>
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

        <section className="pt-8 pb-5 bg-dark text-light">
          <div className="container">
            <div className="row">  
              <div className="col-md-12">
                <H2 className="mb-1 text-light" noMb>Selected Open Source</H2>
                <p className="mb-5">
                  <small className="font-italic">For a full list of respositories I actively contribute to, please see my <Link href="https://github.com/gpleiss">Github</Link> page.</small>
                </p>
                <CvList>
                  <SoftwareItem title="GPyTorch"
                    status="v1.11 Release"
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
                  {/*
                    <SoftwareItem title="LinearOperator"
                      status="v0.5 Release"
                      coauthors={["Max Balandat"]}
                      tagline="A library for structured linear algebra operations in PyTorch."
                      website="https://linear-operator.readthedocs.io/en/latest/"
                      github="https://github.com/cornellius-gp/linear_operator"
                    >
                    </SoftwareItem>
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
