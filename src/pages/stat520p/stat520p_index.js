import React from 'react';
import { Table } from 'reactstrap';
import { Link, SmallH2, Section } from '../../components/utils.js';

import pset01Instructions from './pset01/stat520p_pset1.pdf';
import pset01Template from './pset01/stat520p_pset1.tex';


class Stat520PIndex extends React.Component {
  render() {
    const textbook = <Link href="https://bayesoptbook.com#download">Textbook</Link>;

    return (
      <div className="col-12">
        { /*
        <Section id="announcements">
          <SmallH2>
            Announcements
          </SmallH2>
          <ul>
            <li>
              Topics paper presentations will start on Tuesday, November 21.
              If you are not presenting (and not doing a final project), you will need to read each paper
              before class and write a short review. (See <Link href="https://canvas.ubc.ca/courses/135093">Canvas</Link> for details.)
            </li>
          </ul>
        </Section>
        */ }

        <Section id="schedule" first>
          <SmallH2>
            Schedule
          </SmallH2>
          <p>
            Subject to change; check <Link inside href="#announcements">announcements</Link> and Canvas!.
          </p>
          <Table striped hover>
            <thead>
              <tr>
                <th>Class/Date</th>
                <th>Class Topic</th>
                <th>Reading Due</th>
                <th>Assignment Due</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Class 1 (Tues, Oct 24)</td>
                <td>Introduction, course logistics</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>Class 2 (Thurs, Oct 26)</td>
                <td>
                  Gaussian processes<br />
                  (<Link href="../../mvn_cheat_sheet.pdf">Cheat sheet on multivariate Gaussians</Link>)
                </td>
                <td>{ textbook } Ch. 1-2</td>
                <td></td>
              </tr>

              <tr>
                <td>Class 3 (Tues, Oct 31)</td>
                <td>
                  Gaussian processes and kernels<br />
                  (<Link href="https://github.com/gpleiss/gp_bo_demos/blob/main/kernel_demo.ipynb">
                    Jupyter demo
                   </Link>, David Duvenaud's <Link href="https://www.cs.toronto.edu/~duvenaud/cookbook/">kernel cookbook</Link>)
                </td>
                <td>{ textbook } Ch. 3, 9.1 (optional)</td>
                <td>
                  <Link href={ pset01Instructions }>Diagonstic problem set</Link>{ " " }
                  (
                    <Link href={ pset01Template }>TeX template</Link> and{ " " }
                    <Link href="../../math_commands.tex">math_commands.tex</Link> macros file)
                </td>
              </tr>

              <tr>
                <td>Class 4 (Thurs, Nov 2)</td>
                <td>Decision theory and optimization theory</td>
                <td>{ textbook } Ch. 5</td>
                <td></td>
              </tr>

              <tr>
                <td>
                  Class 5 (Tues, Nov 7)
                  (<Link href="https://github.com/gpleiss/gp_bo_demos/blob/main/1d_bo_demo.ipynb">
                    Jupyter demo
                   </Link> on BDT acquisition functions)
                </td>
                <td>Acquisition functions</td>
                <td>{ textbook } Ch. 6-7</td>
                <td>Project proposal (for those choosing the project final asssessment option)</td>
              </tr>

              <tr>
                <td>
                  Class 6 (Thurs, Nov 9)
                  (<Link href="https://github.com/gpleiss/gp_bo_demos/blob/main/1d_bo_ucb_demo.ipynb">
                    Jupyter demo
                   </Link> on UCB, <Link href="https://github.com/gpleiss/gp_bo_demos/blob/main/1d_bo_ts_demo.ipynb">
                    Jupyter demo
                   </Link> on Thompson sampling
                  )
                </td>
                <td>Acquisition functions</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td colspan="4" className="text-center"><em>No Class on Nov 14</em><br />(Reading Week)</td>
              </tr>

              <tr>
                <td>Class 7 (Thurs, Nov 16)</td>
                <td>Implementation details</td>
                <td>{ textbook } Ch. 8, 9.2</td>
                <td>Short coding assignment</td>
              </tr>

              <tr>
                <td>Class 8 (Tues, Nov 21)</td>
                <td>
                  Special Topic (Multi-Objective BO)
                </td>
                <td>
                  <Link href="https://arxiv.org/abs/2109.10964">
                    Multi-Objective Bayesian Optimization over High-Dimensional Search Spaces
                  </Link>
                </td>
                <td></td>
              </tr>

              <tr>
                <td>Class 9 (Thurs, Nov 23)</td>
                <td>
                  Special Topic (Local BO)
                </td>
                <td>
                  <Link href="https://arxiv.org/abs/1910.01739">
                    Scalable Global Optimization via Local Bayesian
                  </Link>
                </td>
                <td></td>
              </tr>

              <tr>
                <td>Class 10 (Tues, Nov 28)</td>
                <td>
                  Special Topic (Mixed-Space BO)
                </td>
                <td>
                  <Link href="https://arxiv.org/abs/2210.10199">
                    Bayesian Optimization over Discrete and Mixed Spaces via Probabilistic Reparameterization
                  </Link>
                </td>
                <td></td>
              </tr>

              <tr>
                <td>Class 11 (Thurs, Nov 30)</td>
                <td>
                  Special Topic (Causal BO)
                </td>
                <td>
                  <Link href="https://arxiv.org/abs/2005.11741">
                    Causal Bayesian Optimization
                  </Link>
                </td>
                <td></td>
              </tr>

              <tr>
                <td>Class 12 (Tues, Dec 5)</td>
                <td>
                  Special Topic (Preference BO)
                </td>
                <td>
                  <Link href="https://arxiv.org/abs/1112.5745">
                    Bayesian Active Learning for Classification and Preference Learning
                  </Link>
                </td>
                <td></td>
              </tr>

              <tr>
                <td>Class 13 (Thurs, Dec 7)</td>
                <td>
                  Special Topic (Cost-Aware BO)
                </td>
                <td>
                  <Link href="https://proceedings.mlr.press/v45/Xia15.html">
                    Budgeted Bandit Problems with Continuous Random Costs
                  </Link>
                </td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Section>
      </div>
    );
  }
}

export default Stat520PIndex;