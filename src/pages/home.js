import React from 'react';
import { Link, H2 } from '../components/utils.js';
import CvList from '../components/cv_list.js';
import PubItem from '../components/pub_item.js';
import SoftwareItem from '../components/software_item.js';

// Assets
import meImg from '../images/me.jpg';


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
      <div className="container">
        <div className="row pt-10">
          <div className="col-sm-9">
            <p>
              I am a fifth-year Ph.D. student in the <Link href="http://www.cs.cornell.edu/">CS department at Cornell University</Link>,
							studying machine learning under <Link href="https://www.cs.cornell.edu/~kilian/">Prof. Kilian Weinberger</Link>.
							My research interests are:
            </p>
            <ul>
              <li>Calibrated uncertainty in ML</li>
              <li>Combining Bayesian ML with deep learning</li>
              <li>Scalable Gaussian processes</li>
              <li>Fairness in ML</li>
              <li>ML in health care</li>
            </ul>
            <p>
							I hold a B.S. in engineering from <Link href="http://olin.edu">Olin College of Engineering</Link> in Needham, MA.
            </p>
          </div>
          <div className="col-sm-3 text-center text-sm-right">
            <img alt="Geoff Pleiss" src={meImg} style={{width: '100%', maxWidth: '250px'}}></img>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-sm-12">
            <div className="jumbotron bg-light mb-0 pt-4">
              <H2>News</H2>
              <ul className="m-0">
                <li>
                  <Link href="https://gpytorch.ai">GPyTorch 0.3</Link> (beta release) is now available!
                </li> 
                <li>
                  I gave a presentation about GPyTorch at Uber's Bayesian Optimization Symposium on May 3rd.
                </li> 
              </ul>
            </div>
          </div>
        </div>

        <div className="row pt-8">  
          <div className="col-md-12">
						<H2>Publications</H2>
						<CvList className="list-unstyled">
						  <PubItem title="Exact Gaussian Processes on a Million Data Points"
                authors={[
                  "Ke Alexander Wang",
                  "Geoff Pleiss*",
                  "Jacob R. Gardner",
                  "Stephen Tyree",
                  "Kilian Q. Weinberger",
                  "Andrew Gordon Wilson",
                ]}
                arxiv="https://arxiv.org/abs/1903.08114"
                pdf="https://arxiv.org/pdf/1903.08114"
                year="2019"
                underSubmission
                github="https://github.com/cornellius-gp/gpytorch/blob/master/examples/01_Simple_GP_Regression/Simple_MultiGPU_GP_Regression.ipynb"
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

        <div className="row pt-8">  
          <div className="col-md-12">
						<H2>Open Source</H2>
						<CvList>
              <SoftwareItem title="GPyTorch"
                status="Beta Release"
                coauthors={[
                  "Jacob R. Gardner"
                ]}
                tagline="A implementation of gaussian process models in PyTorch, designed for speed, modularity, and prototyping."
                website="https://gpytorch.ai"
                github="https://github.com/cornellius-gp/GPyTorch"
              >
                <p>
                  GPyTorch is a GPU-accelerated Gaussian process library, written in PyTorch.
                  It combines the latest techniques in scalable GPs with an intuitive and modular interface.
                  It is designed for both expert GP researchers and non-expert practicioners.
                </p>
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
                <p>
                  Most implementations of DenseNets create many intermediate outputs.
                  Without proper management, the memory needed to store these outputs grows quadratically with network depth.
                  This implementation uses shared-memory allocations to store intermediate outputs.
                </p>
              </SoftwareItem>
						</CvList>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
