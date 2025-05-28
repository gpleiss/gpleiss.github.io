import React from 'react';
import { H1, H2, Header } from '../components/utils.js';
import CvList from '../components/cv_list.js';
import PubItem from '../components/pub_item.js';

// Data
import { publications } from '../data/publications';


class Home extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <H1>Complete List of Publications By Topic</H1>
        </Header>
        <section className="pt-8 pb-8">
          <div className="container">
            <div className="row pt-4 pb-8">
              <div className="col-md-12">
                <H2 id="uq">Uncertainty Quantification</H2>
                <CvList indent>
                  { publications.filter((item) => !!item.tags && item.tags.uq).map((item) => <PubItem {...item } />) }
                </CvList>

                <H2 id="bo">Bayesian Optimization</H2>
                <CvList indent>
                  { publications.filter((item) => !!item.tags && item.tags.bo).map((item) => <PubItem {...item } />) }
                </CvList>

                <H2 id="reliable-nn">Deep Learning</H2>
                <CvList indent>
                  { publications.filter((item) => !!item.tags && item.tags.dl).map((item) => <PubItem {...item } />) }
                </CvList>

                <H2 id="nla">Scalable Gaussian Processes via Numerical Methods</H2>
                <CvList indent>
                  { publications.filter((item) => !!item.tags && item.tags.gp_nla).map((item) => <PubItem {...item } />) }
                </CvList>

                <H2 id="spatiotemporal">Spatiotemporal Modeling</H2>
                <CvList indent>
                  { publications.filter((item) => !!item.tags && item.tags.stm).map((item) => <PubItem {...item } />) }
                </CvList>

                <H2 id="prob-modeling">Probabilistic Modeling</H2>
                <CvList indent>
                  { publications.filter((item) => !!item.tags && item.tags.pm).map((item) => <PubItem {...item } />) }
                </CvList>

                <H2 id="cv">Computer Vision</H2>
                <CvList indent>
                  { publications.filter((item) => !!item.tags && item.tags.cv).map((item) => <PubItem {...item } />) }
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
