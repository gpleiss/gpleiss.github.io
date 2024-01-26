import React from 'react';
import { H2, H3 } from '../components/utils.js';
import CvList from '../components/cv_list.js';
import PubItem from '../components/pub_item.js';

// Assets
import densenetJournal from '../papers/DenseNet_Journal.pdf';
import hydrometeorologyJournal from '../papers/Hydrometeorology_Journal.pdf';
import thesis from '../papers/gpleiss_thesis.pdf';


class Home extends React.Component {
  render() {
    return (
      <div>
        <section className="pt-8 pb-8">
          <div className="container">
            <div className="row pt-4 pb-8">  
              <div className="col-md-12">
                <H2>Complete List of Publications by Topic</H2>

                <H3 id="uq">Uncertainty Quantification</H3>
                <CvList indent>
                  <PubItem title="Sharp Calibrated Gaussian Processes"
                    authors={[
                      "Alexandre Capone",
                      "Sandra Hirche",
                      "Geoff Pleiss",
                    ]}
                    arxiv="https://arxiv.org/abs/2302.11961"
                    pdf="https://arxiv.org/pdf/2302.11961.pdf"
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

                <H3 id="overparam">Overparameterization and Ensemble Methods</H3>
                <CvList indent>
                  <PubItem title="Pathologies of Predictive Diversity in Deep Ensembles"
                    authors={[
                      "Taiga Abe",
                      "E. Kelly Buchanan",
                      "Geoff Pleiss",
                      "John P. Cunningham",
                    ]}
                    isNew
                    award="featured paper"
                    arxiv="https://arxiv.org/abs/2302.00704"
                    pdf="https://arxiv.org/pdf/2302.00704.pdf"
                    conference="TMLR"
                    year="2024"
                  />
                  <PubItem title="The Best Deep Ensembles Sacrifice Predictive Diversity"
                    authors={[
                      "Taiga Abe*",
                      "E. Kelly Buchanan*",
                      "Geoff Pleiss",
                      "John P. Cunningham",
                    ]}
                    award="Most Surprising Result Award"
                    pdf="https://openreview.net/pdf?id=6sBiAIpkUiO"
                    conference="NeurIPS &quot;I Can&#39;t Believe It&#39;s Not Better&#33;&quot; Workshop"
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
                  <PubItem title="Snapshot Ensembles: Train 1, get M for free"
                    authors={[
                      "Gao Huang*", 
                      "Yixuan Li*",
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

                <H3 id="nla">Numerical Methods for Gaussian Processes and Machine Learning</H3>
                <CvList indent>
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
                  <PubItem title="Preconditioning for Scalable Gaussian Process Hyperparameter Optimization"
                    authors={[
                      "Jonathan Wenger",
                      "Geoff Pleiss",
                      "Philipp Hennig",
                      "John P. Cunningham",
                      "Jacob R. Gardner",
                    ]}
                    arxiv="https://arxiv.org/abs/2107.00243"
                    pdf="https://arxiv.org/pdf/2107.00243.pdf"
                    github="https://github.com/cornellius-gp/gpytorch"
                    award="long oral"
                    conference="ICML"
                    year="2022"
                    talk="https://slideslive.com/38983179/preconditioning-for-scalable-gaussian-process-hyperparameter-optimization?ref=search-presentations-geoff+pleiss"
                  />
                  <PubItem title="Bias-Free Scalable Gaussian Processes via Randomized Truncations"
                    authors={[
                      "Andres Potapczynski*",
                      "Luhuan Wu*",
                      "Dan Biderman*",
                      "Geoff Pleiss",
                      "John P. Cunningham"
                    ]}
                    arxiv="https://arxiv.org/abs/2102.06695"
                    pdf="https://arxiv.org/pdf/2102.06695"
                    conference="ICML"
                    github="https://github.com/cunningham-lab/RTGPS"
                    year="2021"
                    talk="https://slideslive.com/38959632/biasfree-scalable-gaussian-processes-via-randomized-truncations?ref=search-presentations-geoff+pleiss"
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
                </CvList>

                <H3 id="approx-inf">Approximate Inference for Gaussian Processes</H3>
                <CvList indent>
                  <PubItem title="Variational Nearest Neighbor Gaussian Processes"
                    authors={[
                      "Luhuan Wu",
                      "Geoff Pleiss",
                      "John P. Cunningham",
                    ]}
                    arxiv="https://arxiv.org/abs/2202.01694"
                    pdf="https://arxiv.org/pdf/2202.01694"
                    conference="ICML"
                    year="2022"
                    github="https://docs.gpytorch.ai/en/latest/examples/04_Variational_and_Approximate_GPs/VNNGP.html"
                    talk="https://slideslive.com/38983939/vnngp-variational-nearest-neighbor-gaussian-process?ref=search-presentations-geoff+pleiss"
                  />
                  <PubItem title="Scalable Cross Validation Losses for Gaussian Process Models"
                    authors={[
                      "Martin Jankowiak",
                      "Geoff Pleiss"
                    ]}
                    arxiv="https://arxiv.org/abs/2105.11535"
                    pdf="https://arxiv.org/pdf/2105.11535.pdf"
                    techReport
                    year="2021"
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
                    talk="https://slideslive.com/38928016/parametric-gaussian-process-regressors?ref=search-presentations-geoff+pleiss"
                    year="2020"
                  />	
                </CvList>

                <H3 id="reliable-nn">"Reliable" Deep Learning</H3>
                <CvList indent>
                  <PubItem title="Identifying Mislabeled Data using the Area Under the Margin Ranking"
                    authors={[
                      "Geoff Pleiss",
                      "Tianyi Zhang",
                      "Ethan R. Elenberg",
                      "Kilian Q. Weinberger"
                    ]}
                    website="/blog/aum.html"
                    arxiv="https://arxiv.org/abs/2001.10528"
                    pdf="https://arxiv.org/pdf/2001.10528.pdf"
                    github="https://github.com/asappresearch/aum"
                    talk="https://slideslive.com/38936900/identifying-mislabeled-data-using-the-area-under-the-margin-ranking?ref=speaker-27667-latest"
                    conference="NeurIPS"
                    year="2020"
                  />	
                  <PubItem title="Pseudo-lidar++: Accurate depth for 3d object detection in autonomous driving."
                    authors={[
                      "Yurong You*",
                      "Yan Wang*",
                      "Wei-Lun Chao*",
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
                  <PubItem title="Convolutional Networks with Dense Connectivity"
                    authors={[
                      "Gao Huang*",
                      "Zhuang Liu*",
                      "Geoff Pleiss",
                      "Laurens van der Maaten",
                      "Kilian Q. Weinberger",
                    ]}
                    pdf={densenetJournal}
                    conference="Pattern Analysis and Machine Intelligence"
                    github="https://github.com/gpleiss/efficient_densenet_pytorch"
                    year="2019"
                  />	
                  <PubItem title="Deep Feature Interpolation for Image Content Changes"
                    authors={[
                      "Paul Upchurch*",
                      "Jacob R. Gardner*",
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
                </CvList>

                <H3 id="prob-modeling">Probabilistic Modeling</H3>
                <CvList indent>
                  <PubItem title="Rectangular Flows for Manifold Learning"
                    authors={[
                      "Anthony L. Caterini*",
                      "Gabriel Loaiza-Ganem*",
                      "Geoff Pleiss",
                      "John P. Cunningham"
                    ]}
                    arxiv="https://arxiv.org/abs/2106.01413"
                    pdf="https://arxiv.org/pdf/2106.01413.pdf"
                    conference="NeurIPS"
                    year="2021"
                    github="https://github.com/layer6ai-labs/rectangular-flows"
                    talk="https://slideslive.com/38966976/rectangular-flows-for-manifold-learning-proceedings-of-neural-information-processing-systems?ref=search-presentations-geoff+pleiss"
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
                    github="https://github.com/cunningham-lab/cb_and_cc"
                    year="2020"
                    talk="https://slideslive.com/38942667/uses-and-abuses-of-the-crossentropy-loss-case-studies-in-modern-deep-learning?ref=search-presentations-geoff+pleiss"
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
                </CvList>

                <H3 id="sci-app">Scientific Applications</H3>
                <CvList indent>
                  <PubItem title="Harnessing Interpretable and Unsupervised Machine Learning to Address Big Data From Modern X-Ray Diffraction"
                    authors={[
                      "Jordan Venderley",
                      "Michael Matty",
                      "Krishnanand Mallayya",
                      "Matthew Krogstad",
                      "Jacob Ruff",
                      "Geoff Pleiss",
                      "Varsha Kishore",
                      "David Mandrus",
                      "Daniel Phelan",
                      "Lekhanath Poudel",
                      "Andrew Gordon Wilson",
                      "Kilian Q. Weinberger",
                      "Puspa Upreti",
                      "Michael R. Norman",
                      "Stephan Rosenkranz",
                      "Ray Osborn",
                      "Eun-Ah Kim",
                    ]}
                    arxiv="https://arxiv.org/abs/2008.03275"
                    pdf="https://arxiv.org/pdf/2008.03275.pdf"
                    conference="Proceedings of the National Academy of Sciences"
                    year="2022"
                  />
                  <PubItem title="Hierarchical Inducing Point Gaussian Process for Inter-domain Observations"
                    authors={[
                      "Luhuan Wu*",
                      "Andrew Miller*",
                      "Lauren Anderson",
                      "Geoff Pleiss",
                      "David Blei",
                      "John P. Cunningham"
                    ]}
                    arxiv="https://arxiv.org/abs/2103.00393"
                    pdf="https://arxiv.org/pdf/2103.00393.pdf"
                    github="https://github.com/cunningham-lab/hipgp"
                    conference="AISTATS"
                    year="2021"
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
