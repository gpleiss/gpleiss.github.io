import React from 'react'; import { Link, H2 } from '../components/utils.js';
import CvList from '../components/cv_list.js';
import PubItem from '../components/pub_item.js';
import SoftwareItem from '../components/software_item.js';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/fontawesome-free-solid';

// Assets
import meImg from '../images/me.jpg';
import densenetJournal from '../papers/DenseNet_Journal.pdf';
import hydrometeorologyJournal from '../papers/Hydrometeorology_Journal.pdf';
import thesis from '../papers/gpleiss_thesis.pdf';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items : [],
      loading: false
    };
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div>
        <div className="container pt-10 pb-8">
          <div className="row">
            <div className="col-sm-12">
              <picture className="text-center float-md-right pl-md-5 d-none d-md-inline">
                <img className="rounded img-thumbnail" alt="Geoff Pleiss" src={meImg} style={{width: '100%', maxWidth: '300px'}}></img>
              </picture>
              <H2 noMb>Geoff Pleiss</H2>
              <p className="mb-5 text-muted font-italic">
                Postdoctoral Research Scientist<br />
                <Link className="text-muted" href="https://zuckermaninstitute.columbia.edu/">Zuckerman Institute</Link>,{" "}
                <Link className="text-muted" href="http://stat.columbia.edu/">Columbia University</Link><br />
                <FontAwesomeIcon icon={faEnvelopeSquare} size="1.5x" title="Email: " className="mr-3" />
                gmp2162 &lt;at&gt; columbia.edu
              </p>
              <picture className="text-center float-md-right d-block d-md-none mb-5">
                <img className="rounded img-thumbnail" alt="Geoff Pleiss" src={meImg} style={{width: '100%', maxWidth: '300px'}}></img>
              </picture>
              <p>
                My research interests intersect deep learning and Bayesian machine learning, with an emphasis on how to make learning algorithms more scalable, robust, and reliable.
                In particular, my work focuses on reliable uncertainty estimates from neural networks and efficient Gaussian process inference.
              </p>
              <p>
                I received my Ph.D. from the CS department at Cornell University in August 2020.
                I was advised by <Link href="http://kilian.cs.cornell.edu/">Kilian Weinberger</Link> and also worked closely with Andrew Gordon Wilson.
              </p>
              <p>
                I co-created and maintain the <Link href="http://gpytorch.ai">GPyTorch</Link> Gaussian process library with <Link href="https://jacobrgardner.github.io/">Jake Gardner</Link>.
              </p>
              <div className="clearfix" />
            </div>
          </div>
        </div>

        <section className="pt-10 pb-8 bg-light">
          <div className="container">
            <div className="row pt-4 pb-8 bg-light">  
              <div className="col-md-12">
                <H2>Publications</H2>
                <CvList className="list-unstyled">
                  <PubItem title="Bias-Free Scalable Gaussian Processes via Randomized Truncations"
                    authors={[
                      "Andres Potapczynski",
                      "Luhuan Wu",
                      "Dan Biderman",
                      "Geoff Pleiss",
                      "John P. Cunningham"
                    ]}
                    arxiv="https://arxiv.org/abs/2102.06695"
                    pdf="https://arxiv.org/pdf/2102.06695"
                    underSubmission
                    year="2021"
                  />	
                  <PubItem title="Hierarchical Inducing Point Gaussian Process for Inter-domain Observations"
                    authors={[
                      "Luhuan Wu",
                      "Andrew Miller",
                      "Lauren Anderson",
                      "Geoff Pleiss",
                      "David Blei",
                      "John P. Cunningham"
                    ]}
                    arxiv="https://arxiv.org/abs/2103.00393"
                    pdf="https://arxiv.org/pdf/2103.00393.pdf"
                    conference="AISTATS"
                    year="2021"
                  />	
                  <PubItem title="Uses and Abuses of the Cross-Entropy Loss: Case Studies in Modern Deep Learning"
                    authors={[
                      "Elliott Gordon-Rodriguez",
                      "Gabriel Loaiza-Ganem",
                      "Geoff Pleiss",
                      "John P. Cunningham"
                    ]}
                    arxiv="https://arxiv.org/abs/2011.05231"
                    pdf="https://arxiv.org/pdf/2011.05231.pdf"
                    conference="NeurIPS &quot;I Can&#39;t Believe It&#39;s Not Better&#33;&quot; Workshop"
                    year="2020"
                  />	
                  <PubItem title="A Scalable and Flexible Framework for Gaussian Processes via Matrix-Vector Multiplication"
                    authors={[
                      "Geoff Pleiss",
                    ]}
                    pdf={thesis}
                    thesis
                    year="2020"
                  />	
                  <PubItem title="Fast Matrix Square Roots with Applications to Gaussian Processes and Bayesian Optimization"
                    authors={[
                      "Geoff Pleiss",
                      "Martin Jankowiak",
                      "David Eriksson",
                      "Anil Damle",
                      "Jacob R. Gardner"
                    ]}
                    arxiv="https://arxiv.org/abs/2006.11267"
                    pdf="https://arxiv.org/pdf/2006.11267.pdf"
                    github="https://arxiv.org/pdf/2102.06695"
                    talk="https://slideslive.com/38936908/fast-matrix-square-roots-with-applications-to-gaussian-processes-and-bayesian-optimization?ref=speaker-27667-latest"
                    conference="NeurIPS"
                    year="2020"
                  />	
                  <PubItem title="Identifying Mislabeled Data using the Area Under the Margin Ranking"
                    authors={[
                      "Geoff Pleiss",
                      "Tianyi Zhang",
                      "Ethan R. Elenberg",
                      "Kilian Q. Weinberger"
                    ]}
                    arxiv="https://arxiv.org/abs/2001.10528"
                    pdf="https://arxiv.org/pdf/2001.10528.pdf"
                    github="https://github.com/asappresearch/aum"
                    talk="https://slideslive.com/38936900/identifying-mislabeled-data-using-the-area-under-the-margin-ranking?ref=speaker-27667-latest"
                    conference="NeurIPS"
                    year="2020"
                  />	
                  <PubItem title="Deep Sigma Point Processes"
                    authors={[
                      "Martin Jankowiak",
                      "Geoff Pleiss",
                      "Jacob R. Gardner",
                    ]}
                    arxiv="https://arxiv.org/abs/2002.09112"
                    pdf="https://arxiv.org/pdf/2002.09112.pdf"
                    github="https://github.com/cornellius-gp/gpytorch/blob/master/examples/05_Deep_Gaussian_Processes/Deep_Sigma_Point_Processes.ipynb"
                    conference="UAI"
                    year="2020"
                  />	
                  <PubItem title="Parametric Gaussian Process Regressors"
                    authors={[
                      "Martin Jankowiak",
                      "Geoff Pleiss",
                      "Jacob R. Gardner",
                    ]}
                    arxiv="https://arxiv.org/abs/1910.07123"
                    pdf="https://arxiv.org/pdf/1910.07123.pdf"
                    github="https://github.com/cornellius-gp/gpytorch/blob/master/examples/04_Variational_and_Approximate_GPs/Approximate_GP_Objective_Functions.ipynb"
                    conference="ICML"
                    year="2020"
                  />	
                  <PubItem title="Pseudo-lidar++: Accurate depth for 3d object detection in autonomous driving."
                    authors={[
                      "Yurong You",
                      "Yan Wang",
                      "Wei-Lun Chao",
                      "Divyansh Garg",
                      "Geoff Pleiss",
                      "Bharath Hariharan",
                      "Mark Campbell",
                      "Kilian Q. Weinberger"
                    ]}
                    arxiv="https://arxiv.org/abs/1906.06310"
                    pdf="https://arxiv.org/pdf/1906.06310.pdf"
                    github="https://github.com/mileyan/Pseudo_Lidar_V2"
                    conference="ICLR"
                    year="2020"
                  />	
                  <PubItem title="Exact Gaussian Processes on a Million Data Points"
                    authors={[
                      "Ke Alexander Wang*",
                      "Geoff Pleiss*",
                      "Jacob R. Gardner",
                      "Stephen Tyree",
                      "Kilian Q. Weinberger",
                      "Andrew Gordon Wilson",
                    ]}
                    arxiv="https://arxiv.org/abs/1903.08114"
                    pdf="https://arxiv.org/pdf/1903.08114"
                    conference="NeurIPS"
                    year="2019"
                    github="https://github.com/cornellius-gp/gpytorch/blob/master/examples/01_Simple_GP_Regression/Simple_MultiGPU_GP_Regression.ipynb"
                  />	
                  <PubItem title="Convolutional Networks with Dense Connectivity"
                    authors={[
                      "Gao Huang",
                      "Zhuang Liu",
                      "Geoff Pleiss",
                      "Laurens van der Maaten",
                      "Kilian Q. Weinberger",
                    ]}
                    pdf={densenetJournal}
                    conference="Pattern Analysis and Machine Intelligence"
                    github="https://github.com/gpleiss/efficient_densenet_pytorch"
                    year="2019"
                  />	
                  <PubItem title="Potential Predictability of Regional Precipitation and Discharge Extremes Using Synoptic-Scale Climate Information via Machine Learning"
                    authors={[
                      "James Knighton",
                      "Geoff Pleiss",
                      "Elizabeth Carter",
                      "Steven Lyon",
                      "M Todd Walter",
                      "Scott Steinschneider",
                    ]}
                    pdf={hydrometeorologyJournal}
                    conference="Journal of Hydrometeorology"
                    year="2019"
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
                  <PubItem title="Constant-Time Predictive Distributions for Gaussian Processes"
                    authors={[
                      "Geoff Pleiss",
                      "Jacob R. Gardner",
                      "Kilian Q. Weinberger",
                      "Andrew Gordon Wilson",
                    ]}
                    conference="ICML"
                    year="2018"
                    arxiv="https://arxiv.org/abs/1803.06058"
                    pdf="https://arxiv.org/pdf/1803.06058.pdf"
                    github="https://github.com/cornellius-gp/gpytorch"
                  />	
                  <PubItem title="Product Kernel Interpolation for Scalable Gaussian Processes"
                    authors={[
                      "Jacob R. Gardner",
                      "Geoff Pleiss",
                      "Ruihan Wu",
                      "Kilian Q. Weinberger",
                      "Andrew Gordon Wilson",
                    ]}
                    conference="AISTATS"
                    year="2018"
                    arxiv="https://arxiv.org/abs/1802.08903"
                    pdf="https://arxiv.org/pdf/1802.08903.pdf"
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
                    website="/nn_calibration"
                    arxiv="https://arxiv.org/abs/1706.04599"
                    pdf="https://arxiv.org/pdf/1706.04599.pdf"
                    github="https://github.com/gpleiss/temperature_scaling"
                    talk="https://vimeo.com/238242536"
                  />	
                  <PubItem title="Deep Feature Interpolation for Image Content Changes"
                    authors={[
                      "Paul Upchurch",
                      "Jacob R. Gardner",
                      "Geoff Pleiss",
                      "Robert Pless",
                      "Noah Snavely",
                      "Kavita Bala",
                      "Kilian Q. Weinberger"
                    ]}
                    conference="CVPR"
                    year="2017"
                    arxiv="https://arxiv.org/abs/1611.05507"
                    pdf="https://arxiv.org/pdf/1611.05507.pdf"
                    github="https://github.com/paulu/deepfeatinterp"
                  />	
                  <PubItem title="Snapshot Ensembles: Train 1, get M for free"
                    authors={[
                      "Gao Huang", 
                      "Yixuan Li",
                      "Geoff Pleiss",
                      "Zhuang Liu",
                      "John Hopcroft",
                      "Kilian Q. Weinberger"
                    ]}
                    conference="ICLR"
                    year="2017"
                    arxiv="https://arxiv.org/abs/1704.00109"
                    pdf="https://arxiv.org/pdf/1704.00109.pdf"
                    github="https://github.com/gaohuang/SnapshotEnsemble"
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
                <H2 className="text-light">Open Source</H2>
                <CvList>
                  <SoftwareItem title="GPyTorch"
                    status="v1.4 Release"
                    coauthors={[
                      "Jacob R. Gardner"
                    ]}
                    tagline="A implementation of gaussian process models in PyTorch, designed for speed, modularity, and prototyping."
                    website="https://gpytorch.ai"
                    github="https://github.com/cornellius-gp/GPyTorch"
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
