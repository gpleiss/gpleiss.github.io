import React from 'react';
import { Link, H1, SmallH2, Img, InfoBlock, Section } from '../components/utils.js';
import { Code } from '../components/code.js';
import { Math } from '../components/math.js';
import { Tooltip, Modal, ModalHeader, ModalBody } from 'reactstrap';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import { faFileAlt, faVideo } from '@fortawesome/fontawesome-free-solid';

// Assets
import cifarUncal from '../images/cifar_uncal.png';
import cifarTemp from '../images/cifar_temp.png';


class NNCalibration extends React.Component {
  constructor(props) {
    super(props);
		this.toggleNiculescuTooltip = this.toggleNiculescuTooltip.bind(this);
		this.toggleBibtexModal = this.toggleBibtexModal.bind(this);
    this.state = {
      items: [],
			niculescuTooltipOpen: false,
			modalOpen: false,
      loading: false,
    };
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(state) {
    this.setState(state);
  }

	toggleNiculescuTooltip() {
		this.setState({
			niculescuTooltipOpen: !this.state.niculescuTooltipOpen
		});
	}

	toggleBibtexModal() {
		this.setState({
			bibtexModalOpen: !this.state.bibtexModalOpen
		});
	}

  render() {
    return (
      <div>
        <div className="bg-gradient-primary pt-10 pb-5 shadow-bottom">
          <div className="container text-center">
            <H1>Calibrating Neural Networks</H1>
          </div>
        </div>

        <div className="bg-gradient-light pt-5 pb-4 shadow-bottom" id="reliability-diagrams">
          <div className="container text-center">
            <div className="row text-center">
              <div className="col-12 offset-lg-1 col-lg-5 mb-2 mb-lg-0">
                <Img src={cifarUncal} maxWidth="300px" maxHeight="300px">
                  An uncalibrated neural network, before temperature scaling.
                  The reliability diagram indicates miscalibration.
                </Img>
              </div>
              <div className="col-12 col-lg-5 mb-0">
                <Img src={cifarTemp} maxWidth="300px" maxHeight="300px">
                  Neural network after temperature scaling.
                  The reliability diagram indicates a well-calibrated network.
                </Img>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row mt-3">
            <div className="col-12">
              <InfoBlock>
                <p className="mb-0 text-center">
                  In recent years, the confidence estimates of neural networks have become <em>increasingly miscalibrated</em>.
                  However, we can remidy this miscalibration with an extremely simple post-processing step called <strong><Link inside href="#temperature-scaling">temperature scaling</Link></strong>.
                </p>
              </InfoBlock>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-3 order-12">
							<div className="pl-4 pr-4">
                <Section firstMd>
                  <SmallH2 center>Quick Links</SmallH2>
                  <nav className="nav flex-column text-center">
                    <Link className="nav-link mt-0 pt-0 text-truncate" href="https://arxiv.org/abs/1706.04599">
                      <FontAwesomeIcon icon={faFileAlt} />
                      <span className="d-inline-block pl-2">Publication</span>
                    </Link>
                    <Link className="nav-link text-truncate" href="https://github.com/gpleiss/temperature_scaling">
                      <FontAwesomeIcon icon={faGithub} />
                      <span className="d-inline-block pl-2">Code</span>
                    </Link>
                    <Link className="nav-link text-truncate" href="https://vimeo.com/238242536">
                      <FontAwesomeIcon icon={faVideo} />
                      <span className="d-inline-block pl-2">Video</span>
                    </Link>
                  </nav>
                </Section>

                <Section>
                  <SmallH2 center>Authors</SmallH2>
                  <ul className="list-unstyled text-center text-dark">
                    <li><Link href="https://scholar.google.com/citations?user=0gp5M-kAAAAJ&hl=en">Chuan Guo</Link></li>
                    <li className="pt-2"><Link inside href="/">Geoff Pleiss</Link></li>
                    <li className="pt-2"><Link href="https://scholar.google.com/citations?user=a7drwRMAAAAJ&hl=en">Yu Sun</Link></li>
                    <li className="pt-2"><Link href="https://www.cs.cornell.edu/~kilian/">Kilian Weinberger</Link></li>
                  </ul>
                </Section>
              </div>
            </div>

            <div className="col-12 order-1 col-md-9">
              <Section first>
                <SmallH2>Motivation</SmallH2>
                <p>
                  Neural networks output "confidence" scores along with predictions in classification. 
                  Ideally, these confidence scores should match the true correctness likelihood. 
                  For example, if we assign 80% confidence to 100 predictions, then we'd expect that 80% of the predictions are actually correct. 
                  If this is the case, we say the network is <strong>calibrated</strong>.
                  Modern neural networks tend to be very poorly calibrated.
                  We find that this is a result of recent architectural trends, such as increased network capacity and less regularization.
                </p>

                <p>
                  There is a surprisingly simple recipe to fix this problem: <strong>Temperature Scaling</strong> is
                  a post-processing technique which can almost perfectly restore network calibration.  <em>It
                  requires no additional training data, takes a millisecond to perform, and can be implemented in 2 lines of code.</em>
                </p>

                <p>
                  A simple way to visualize calibration is plotting accuracy as
                  a function of confidence (known as a <strong><a
                      href="http://www.datascienceassn.org/sites/default/files/Predicting%20good%20probabilities%20with%20supervised%20learning.pdf"
                      id="cite-niculescu2005predicting">reliability
                      diagram</a></strong>). 
                  Since confidence should reflect accuracy, we'd like for the plot to be an identity function. 
                  In the <Link inside href="#reliability-diagrams">reliability diagram above</Link> on the left, we see that a DenseNet
                  trained on CIFAR-100 is extremely overconfident.
                  However, after applying temperature scaling, the network becomes very well calibrated.
                </p>

								<Tooltip placement="bottom" isOpen={this.state.niculescuTooltipOpen} target="cite-niculescu2005predicting" toggle={this.toggleNiculescuTooltip}>
									Niculescu-Mizil, A., & Caruana, R. <strong>Predicting good probabilities with supervised learning</strong>. In <em>International Conference on Machine Learning</em>, 2005.
								</Tooltip>
							</Section>

              <Section id="temperature-scaling">
                <SmallH2>What is Temperature Scaling?</SmallH2>
								<p>
                  For classification problems, the neural network output a vector known as the <strong>logits</strong>.
                  The logits vector is passed through a softmax function to get class probabilities.
                  Temperature scaling simply divides the logits vector by a learned scalar parameter, i.e. 
								</p>
								<div className="text-center bg-light border-rounded p-1 mb-3 mt-3">
                  <Math> 
                    { "P( \\hat \\mathbf y ) = \\frac{e^{\\mathbf z / T}}{\\sum_j e^{z_j / T}}" }
                  </Math>
								</div>
								<p>
                  where <Math inline>{"\\hat y"}</Math> is the prediction, where <Math inline>{"\\mathbf z"}</Math> is the logit, and <Math inline>{"T"}</Math> is the learned parameter.
									We learn this parameter on a validation set, where <Math inline>{"T"}</Math> is chosen to minimize negative log likelihood. 
                  Intuitively, temperature scaling simply softens the neural network outputs. 
                  This makes the network slightly less confident, which makes the confidence scores reflect true probabilities. 
                </p>
              </Section>

              <Section>
                <SmallH2>References</SmallH2>
								<p>
									This work is introduced in:
                </p>
                <blockquote className="text-center mt-2 mb-3">
                  Guo, C., Pleiss, G., Sun, Y. and Weinberger, K.Q.  <strong>On Calibration of Modern Neural Networks</strong>. In <em>International Conference on Machine Learning</em>, 2017.
                </blockquote>	
                <ul>
                  <li><Link href="https://arxiv.org/abs/1706.04599">Paper on ArXiV</Link></li>
                  <li><button className="btn btn-link p-0" type="button" onClick={this.toggleBibtexModal}>BibTeX</button></li>
                  <li><Link href="https://vimeo.com/238242536">Video of ICML talk</Link></li>
                </ul>

				        <Modal size="lg" isOpen={this.state.bibtexModalOpen} toggle={this.toggleBibtexModal}>
									<ModalHeader toggle={this.toggleBibtexModal}>BibTeX</ModalHeader>
									<ModalBody>
										<pre>{`
@inproceedings{guo2017calibration,
  title={On calibration of modern neural networks},
  author={Guo, Chuan and Pleiss, Geoff and Sun, Yu and Weinberger, Kilian Q},
  journal={ICML},
  year={2017}
}	
										`}</pre>
									</ModalBody>
								</Modal>
              </Section>

              <Section>
                <SmallH2>Code</SmallH2>
								<p>
                  Temperature scaling can be added incredibly easily to any model.
                  In PyTorch for example, add the following to a model after training:
                </p>
                <Code className="python shadow-subtle pl-4 pr-4 pt-0 pb-0 mb-3 mt-3">{`
class Model(torch.nn.Module):
    def __init__(self):
        # ...
        self.temperature = torch.nn.Parameter(torch.ones(1))

    def forward(self, x):
        # ...
        # logits = final output of neural network
        return logits / self.temperature
                `}</Code>
                <p>
                  Then simply optimize the <code>self.temperature</code> parameter with a few iterations of gradient descent.
                  For a more complete example, check out this <Link href="https://github.com/gpleiss/temperature_scaling">PyTorch temperature scaling example on Github</Link>.
                </p>
              </Section>

              <Section>
                <SmallH2>FAQ</SmallH2>
                <p className="mb-1">
                  <strong>Does temperature scaling work for regression?</strong>
                </p> 
                <p className="ml-4">
                  Temperature scaling only works for classification. 
                  On regression probles, networks tend to output only point predictions, so there is no measure of uncertainty to calibrate. 
                </p>

                <p className="mb-1">
                  <strong>Can temperature scaling be used to detect adversarial examples?</strong>
                </p> 
                <p className="ml-4">
                  Temperature scaling works when the test distribution is the same as the training distribution.
                  Since adversarial examples don't belong to the training distribution, temperature scaling is not guarenteed to produce a calibrated probability on these samples.
                </p>

                <p className="mb-1">
                  <strong>Why is temperature scaling a post-processing step? Can you find the temperature during training?</strong>
                </p> 
                <p className="ml-4">
                  The temperature parameter can't be adjusted at training time. 
                  The network would simply learn to make the temperature as low as possible, so that it can be very confident on the training examples. 
                  (This is why miscalibration occurs in the first place.)
                </p>
              </Section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NNCalibration;
