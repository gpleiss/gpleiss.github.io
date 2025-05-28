import React from 'react';
import { Link, Header, H1, SmallH2, SmallH3, Img, Section } from '../components/utils.js';
import { Code } from '../components/code.js';
import { Math } from '../components/math.js';
import { Tooltip, Modal, ModalHeader, ModalBody } from 'reactstrap';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import { faFileAlt } from '@fortawesome/fontawesome-free-solid';

import trajectoriesClean from '../images/averaged_trajectories_clean.png';
import trajectoriesMislabeled from '../images/averaged_trajectories_mislabeled.png';
import mnist from '../images/mnist.png';
import imagenet1 from '../images/imagenet1.png';
import imagenet2 from '../images/imagenet2.png';
import imagenet3 from '../images/imagenet3.png';
import imagenet4 from '../images/imagenet4.png';
import imagenet5 from '../images/imagenet5.png';
import imagenet6 from '../images/imagenet6.png';
import imagenet7 from '../images/imagenet7.png';
import imagenet8 from '../images/imagenet8.png';
import cifar1 from '../images/cifar1.png';
import cifar2 from '../images/cifar2.png';
import cifar3 from '../images/cifar3.png';
import cifar4 from '../images/cifar4.png';
import cifar5 from '../images/cifar5.png';
import cifar6 from '../images/cifar6.png';
import cifar7 from '../images/cifar7.png';
import cifar8 from '../images/cifar8.png';
import webvision1 from '../images/webvision1.png';
import webvision2 from '../images/webvision2.png';
import webvision3 from '../images/webvision3.png';
import webvision4 from '../images/webvision4.png';
import webvision5 from '../images/webvision5.png';
import webvision6 from '../images/webvision6.png';
import webvision7 from '../images/webvision7.png';
import webvision8 from '../images/webvision8.png';

// Mislabeled sample lists
import cifar10List from "../papers/cifar10_high_aum.csv";
import cifar100List from "../papers/cifar100_high_aum.csv";


class AUM extends React.Component {
  constructor(props) {
    super(props);
		this.toggleTeaserTooltip = this.toggleTeaserTooltip.bind(this);
		this.toggleMarginTooltip = this.toggleMarginTooltip.bind(this);
		this.toggleBibtexModal = this.toggleBibtexModal.bind(this);
    this.state = {
      items: [],
			teaserTooltipOpen: false,
			marginTooltipOpen: false,
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

	toggleTeaserTooltip() {
		this.setState({
			teaserTooltipOpen: !this.state.teaserTooltipOpen
		});
	}

	toggleMarginTooltip() {
		this.setState({
			marginTooltipOpen: !this.state.marginTooltipOpen
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
        <Header>
          <H1>The Area Under the Margin (AUM) Statistic</H1>
        </Header>

        <div className="bg-gradient-light pt-5 pb-4 shadow-bottom">
          <div className="container text-center">
            <div className="row text-center">
              <div className="col-12 offset-lg-1 col-lg-5 mb-2 mb-lg-0">
                <Img src={trajectoriesClean} fluid maxHeight="300px">
									Logits for a correctly-labeled CIFAR10 example.
									The "dog" logit grows much faster than all others,
									resulting in a large positive margin and AUM (green area).
                </Img>
              </div>
              <div className="col-12 col-lg-5 mb-0">
                <Img src={trajectoriesMislabeled} fluid maxHeight="300px">
									Logits for a mislabeled CIFAR10 example.
									The "dog" logit grows slower than the (unobserved) true class logit,
									resulting in a negative margin and AUM (red area).
                </Img>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row mt-5">
            <div className="col-12 col-md-3 order-12">
							<div className="pl-4 pr-4">
                <Section firstMd>
                  <SmallH2 center>Quick Links</SmallH2>
                  <nav className="nav flex-column text-center">
                    <Link className="nav-link mt-0 pt-0 text-truncate" href="https://arxiv.org/abs/2001.10528">
                      <FontAwesomeIcon icon={faFileAlt} />
                      <span className="d-inline-block pl-2">Publication</span>
                    </Link>
                    <Link className="nav-link text-truncate" href="https://github.com/asappresearch/aum">
                      <FontAwesomeIcon icon={faGithub} />
                      <span className="d-inline-block pl-2">Code</span>
                    </Link>
                  </nav>
                </Section>

                <Section>
                  <SmallH2 center>Authors</SmallH2>
                  <ul className="list-unstyled text-center text-dark">
                    <li className="pt-2"><Link inside href="/">Geoff Pleiss</Link></li>
                    <li className="pt-2"><Link href="https://tiiiger.github.io/">Tianyi Zhang</Link></li>
                    <li className="pt-2"><Link href="http://eelenberg.github.io/">Ethan R. Elenberg</Link></li>
                    <li className="pt-2"><Link href="https://www.cs.cornell.edu/~kilian/">Kilian Weinberger</Link></li>
                  </ul>
                </Section>
              </div>
            </div>

            <div className="col-12 order-1 col-md-9">
              <Section first>
                <SmallH2>Motivation</SmallH2>
                <p>
                  Even the most high-power neural network architectures will be prone to error if trained on <strong>mislabeled or highly-ambiguous data</strong>.
                  Some datasets&mdash;especially those that are "weakly-labeled" or annotated by vendor services&mdash;are succeptible to such examples.
                  Even some of the most commonly-used datasets, like MNIST and ImageNet, contain several mislabeled examples:
                </p>

                <div className="text-center">
                  <figure id="example-mislabeled">
                    <div className="row">
                      <div className="col-md-4 col-12 d-inline-block align-middle">
                        <img src={mnist} className="figure-img round fluid" alt="Mislabeled MNIST Samples" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                      <div className="col-md-2 col-6">
                        <img src={imagenet1} className="figure-img round fluid" alt="Mislabeled ImageNet Sample: Beaver" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                      <div className="col-md-2 col-6">
                        <img src={imagenet2} className="figure-img round fluid" alt="Mislabeled ImageNet Sample: Mushroom" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                      <div className="col-md-2 col-6">
                        <img src={imagenet3} className="figure-img round fluid" alt="Mislabeled ImageNet Sample: Sock" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                      <div className="col-md-2 col-6">
                        <img src={imagenet4} className="figure-img round fluid" alt="Mislabeled ImageNet Sample: Lionfish" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                    </div>
                    <figcaption className="figure-caption pt-2">
                      Mislabeled training examples from MNIST and ImageNet.
                      These examples were automatically identified using the AUM statistic.
                    </figcaption>
                  </figure>
                </div>

                <p>
                  Modern neural networks have sufficient capacity to memorize these mislabeled examples.
                  This memorization will hurt generalization, and thus is a bottleneck limiting the performance of these models.
                  To combat this, we wish to <strong>identify and remove samples</strong> that are <em>mislabeled, highly-ambigouous, or otherwise harmful to generalization.</em>
                </p>

                <p>
                </p>
							</Section>

              <Section id="aum">
                <SmallH2>The Area Under the Margin (AUM) Statistic</SmallH2>
								<p>
									Mislabeled samples hurt network generalization, while clean samples help generalization.
									One simple metric that <Link id="margin-paper" href="https://arxiv.org/abs/1810.00113">
										has been shown to be strongly correlated with neural network generalization
									</Link> is the <strong>margin</strong>.
									At epoch <Math inline>t</Math>, the margin of sample <Math inline>{"(\\mathbf x, y)"}</Math> is defined as:
								</p>

								<Tooltip placement="bottom" isOpen={this.state.marginTooltipOpen} target="margin-paper" toggle={this.toggleMarginTooltip}>
									E.g.
									Jiang, Y., Krishnan, D., Mobahi, H. and Bengio, S., 2018. <strong>Predicting the generalization gap in deep networks with margin distributions.</strong> In <em>ICLR</em>, 2019.
								</Tooltip>

								<div className="text-center bg-light border-rounded p-1 mb-3 mt-3">
                  <Math>
                    { "M^{(t)} (\\mathbf x, y) = z_y^{(t)}(\\mathbf x) - \\max_{i \\ne y} z_i^{(t)}(\\mathbf x)" }
                  </Math>
									<small>
										<Math inline>{"(z_i^{(t)}(\\mathbf x)"}</Math> is the model's logit&mdash;pre-softmax output&mdash;corresponding to class <Math inline>i</Math>.)
									</small>
                </div>

                <p>
                  Intuitively, the margin for any given sample is affected by two forces.
								</p>
								<ol>
									<li>its own gradient updates; and</li>
									<li>gradient updates from similar (generalizable) samples.</li>
								</ol>
								<p>
                  If a sample is correctly labeled, these two forces amplify one another to improve the margin.
                  However, these forces are opposed for mislabeled samples.
                  The first force increases the (incorrect) assigned logit while the second force increases the (hidden) ground-truth logit.
                </p>

                <p>
                  We therefore expect that&mdash;<strong>on average</strong>&mdash;a mislabeled sample has a lower margin than a correctly-labeled sample.
                  We capture this by averaging the margin for a given sample over all <Math inline>T</Math> training epochs:
                </p>

								<div className="text-center bg-light border-rounded p-1 mb-3 mt-3">
                  <Math>
                    { "\\text{AUM} (\\mathbf x, y) = \\frac 1 T \\sum_{t=1}^T M^{(t)} (\\mathbf x, y)" }
                  </Math>
								</div>

                <p>
                  This statistic is referred to as the Area Under the Margin, or AUM.
                  It is illustrated in <Link inside href="#aum-teaser" id="teaser-info">plots above</Link>, which plots the logits over time for two training samples.
                  The correctly-labeled sample have large margins, corresponding to a large AUM (green region).
                  The mislabeled sample has a negative margin for most of training, corresponding to a very negative AUM (red region).
                </p>

								<Tooltip placement="bottom" isOpen={this.state.teaserTooltipOpen} target="teaser-info" toggle={this.toggleTeaserTooltip}>
                  The two images taken from CIFAR10, where 40% of training samples are mislabeled.
                  Logits/margins/AUMs come from a ResNet-32 model.
								</Tooltip>
              </Section>

              <Section>
                <SmallH2>Noteworthy Results</SmallH2>

								<SmallH3>CIFAR100</SmallH3>
                <p>
                  We identify 13% of training data that might be mislabeled/ambiguous/harmful to generalization.
                  Simply these data improves error (with a ResNet-32) <strong>from 33.0% to 31.8%</strong>.
                </p>

                <div className="text-center">
                  <figure>
                    <div className="row">
                      <div className="col-md-2 col-3 offset-md-2">
                        <img src={cifar1} className="figure-img round fluid" alt="Mislabeled CIFAR100 Sample: Cloud" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                      <div className="col-md-2 col-3">
                        <img src={cifar2} className="figure-img round fluid" alt="Mislabeled CIFAR100 Sample: Willow Tree" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                      <div className="col-md-2 col-3">
                        <img src={cifar3} className="figure-img round fluid" alt="Mislabeled CIFAR100 Sample: Porcupine" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                      <div className="col-md-2 col-3">
                        <img src={cifar4} className="figure-img round fluid" alt="Mislabeled CIFAR100 Sample: Telephone" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-3 offset-md-2">
                        <img src={cifar5} className="figure-img round fluid" alt="Mislabeled CIFAR100 Sample: Rabbit" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                      <div className="col-md-2 col-3">
                        <img src={cifar6} className="figure-img round fluid" alt="Mislabeled CIFAR100 Sample: Plate" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                      <div className="col-md-2 col-3">
                        <img src={cifar7} className="figure-img round fluid" alt="Mislabeled CIFAR100 Sample: Beetle" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                      <div className="col-md-2 col-3">
                        <img src={cifar8} className="figure-img round fluid" alt="Mislabeled CIFAR100 Sample: Forest" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                    </div>
                    <figcaption className="figure-caption pt-2">
                      Example images from CIFAR100 with large AUM.
                    </figcaption>
                  </figure>
                </div>

								<SmallH3>ImageNet</SmallH3>
                <p>
                  We identify that 2% of ImageNet data is potentially mislabeled.
									(This low number is expected, due to ImageNet's rigorous annotation process.)
                  Removing these data does not significantly change ResNet-50 error.
                </p>

                <div className="text-center">
                  <figure>
                    <div className="row">
                      <div className="col-md-3 col-6">
                        <img src={imagenet5} className="figure-img round fluid" alt="Mislabeled ImageNet Sample: Qual" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                      <div className="col-md-3 col-6">
                        <img src={imagenet6} className="figure-img round fluid" alt="Mislabeled ImageNet Sample: Cannon" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                      <div className="col-md-3 col-6">
                        <img src={imagenet7} className="figure-img round fluid" alt="Mislabeled ImageNet Sample: Bow Tie" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                      <div className="col-md-3 col-6">
                        <img src={imagenet8} className="figure-img round fluid" alt="Mislabeled ImageNet Sample: Coral Fungus" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                    </div>
                    <figcaption className="figure-caption pt-2">
                      Example images from ImageNet with large AUM.
											(See <Link href="#example-mislabeled">the mislabeled images above</Link> for more high-AUM examples.)
                    </figcaption>
                  </figure>
                </div>

								<SmallH3>WebVision-50</SmallH3>
                <p>
                  This dataset is a standard benchmark for "weakly-labeled" learning.
                  We identify and remove 17% of the data, improving accuracy from 21.4% to 19.8% with a ResNet-50 model.
                </p>

                <div className="text-center">
                  <figure>
                    <div className="row">
                      <div className="col-md-3 col-6">
                        <img src={webvision1} className="figure-img round fluid" alt="Mislabeled WebVision50 Sample: Indigo Bunting" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                      <div className="col-md-3 col-6">
                        <img src={webvision2} className="figure-img round fluid" alt="Mislabeled WebVision50 Sample: Tiger Shark" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                      <div className="col-md-3 col-6">
                        <img src={webvision3} className="figure-img round fluid" alt="Mislabeled WebVision50 Sample: Electric Ray" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                      <div className="col-md-3 col-6">
                        <img src={webvision4} className="figure-img round fluid" alt="Mislabeled WebVision50 Sample: Common Newt" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 col-6">
                        <img src={webvision5} className="figure-img round fluid" alt="Mislabeled WebVision50 Sample: Tailed Frog" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                      <div className="col-md-3 col-6">
                        <img src={webvision6} className="figure-img round fluid" alt="Mislabeled WebVision50 Sample: Goldfinch" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                      <div className="col-md-3 col-6">
                        <img src={webvision7} className="figure-img round fluid" alt="Mislabeled WebVision50 Sample: Spotted Salamander" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                      <div className="col-md-3 col-6">
                        <img src={webvision8} className="figure-img round fluid" alt="Mislabeled WebVision50 Sample: European Fire Salamander" style={{maxWidth: "100%", height: "auto", maxHeight: "256px"}}/>
                      </div>
                    </div>
                    <figcaption className="figure-caption pt-2">
                      Example images from WebVision50 with large AUM.
                    </figcaption>
                  </figure>
                </div>

              </Section>


              <Section>
                <SmallH2>Code</SmallH2>
								<p>
                  We offer a simple PyTorch library (written by <Link href="http://www.jshapiro.info/">Josh Shapiro</Link>) for computing the AUM statistic:
                </p>
                <Code className="shell text-center shadow-subtle pl-4 pr-4 pt-0 pb-0 mb-3 mt-3" style={{fontSize: "1.25em"}}>{`
pip install aum
                `}</Code>
                <p>
                  This module provides a wrapper around standard PyTorch datasets, as well a as a mechanism for recording the AUM statistic from classification logits.
                  It can be incorporated into any PyTorch classififer in ~10 lines of code.
                </p>

                <Code className="python shadow-subtle pl-4 pr-4 pt-0 pb-0 mb-3 mt-3">{`
model.train()
for batch in loader:
    inputs, targets, sample_ids = batch
    logits = model(inputs)
    records = aum_calculator.update(logits, targets, sample_ids)
    # ...
                `}</Code>
              </Section>

              <Section id="list_of_mislabeled_examples">
								<SmallH2>List of Mislabeled Examples in CIFAR</SmallH2>
                The following are list of highly-suspicious/low-quality samples identified in the CIFAR dataset.
                It countains the training set index, the assigned-class label, as well as the AUM score.
                <ul>
                  <li><Link href={cifar10List}>List of mislabeled CIFAR10 training data</Link></li>
                  <li><Link href={cifar100List}>List of mislabeled CIFAR100 training data</Link></li>
                </ul>
              </Section>

              <Section>
                <SmallH2>FAQ</SmallH2>
                <p className="mb-1">
                  <strong>How do i determine which samples are mislabeled from the AUM statistic?</strong>
                </p>
                <p className="ml-4">
									AUM provides a ranking of all training points (lower = more likely to be mislabeled).
									To learn an AUM value that separates clean and mislabeled data, we provide a method of <strong>threshold samples</strong> (described in Section 3 of <Link href="https://arxiv.org/abs/2001.10528">the paper</Link>).
									Alternatively, if you have access to a clean validation set, you can run a grid search to find the optimal AUM threshold.
                </p>
              </Section>

              <Section>
                <SmallH2>References</SmallH2>
                <blockquote className="text-center mt-2 mb-3">
                  Pleiss, G., Zhang, T., Elenberg, E. R., & Weinberger, K. Q. <strong>Identifying Mislabeled Data using the Area Under the Margin Ranking.</strong> In <em>Neural Information Processing Systems</em> (2020).
                </blockquote>
                <ul>
                  <li><Link href="https://arxiv.org/abs/2001.10528">Paper on ArXiV</Link></li>
                  <li><button className="btn btn-link p-0" type="button" onClick={this.toggleBibtexModal}>BibTeX</button></li>
                  <li><Link href="https://github.com/asappresearch/aum">Code</Link> (written by <Link href="http://www.jshapiro.info/">Josh Shaprio</Link>)</li>
                </ul>

				        <Modal size="lg" isOpen={this.state.bibtexModalOpen} toggle={this.toggleBibtexModal}>
									<ModalHeader toggle={this.toggleBibtexModal}>BibTeX</ModalHeader>
									<ModalBody>
										<pre>{`
@inproceedings{pleiss2020identifying,
  title={Identifying Mislabeled Data using the Area Under the Margin Ranking},
  author={Pleiss, Geoff and Zhang, Tianyi and Elenberg, Ethan R. and Weinberger, Kilian Q.},
  booktitle={Neural Information Processing Systems},
  year={2020}
}
										`}</pre>
									</ModalBody>
								</Modal>
              </Section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AUM;
