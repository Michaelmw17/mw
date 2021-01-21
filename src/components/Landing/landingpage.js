import React, { Component, lazy, Suspense } from 'react';
import { Grid, Cell } from 'react-mdl';
import Bounce from 'react-reveal/Bounce';
import "animate.css/animate.min.css";
import Pulse from 'react-reveal/Pulse';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

import Fade from 'react-reveal/Fade';



const MyComp = lazy(() => import('../MyComp/myComp'));


class Landing extends Component {
  render() {
    return (
      <Pulse>
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12} tablet={8}>
            <Bounce bottom>
              <Suspense fallback={
                <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
              }>
                          <MyComp />
                      </Suspense>
                    <div className="banner-text">
                      <Fade>
                    <h1>Full Stack Web Developer</h1>
                  <hr/>
                          <p>
                            HTML/CSS | Bootstrap | JavaScript | React | React Native | Node | Express | MongoDB | Git/Github | jQuery | APIs | JSON | AJAX
                            </p>
                        <div className="social-links">
                            <Grid className="demo-grid-3">
                          <Cell col={6} tablet={8}> {/* LinkedIn */}
                          <a href="https://www.linkedin.com/in/michael-watt-6a76961b3/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square fa-4x" aria-hidden="true" />
                          </a>
                        </Cell>
                        <Cell col={6} tablet={8}>
                          {/* Github */}
                          <a href="https://github.com/Michaelmw17/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square fa-4x" aria-hidden="true" />
                          </a>
                        </Cell>
                        <Cell col={6} tablet={8}>
                          {/* Github */}
                          <a href="tel:+61449620082">
                            <i className="fa fa-phone fa-4x" aria-hidden="true" />
                          </a>
                        </Cell>
                        <Cell col={6} tablet={8}>
                          {/* Github */}
                          <a href ="mailto:michaelmw17@outlook.com">
                            <i className="fa fa-envelope fa-4x" aria-hidden="true" />
                          </a>
                        </Cell>
                      </Grid>
                      </div>
                  </Fade>
                </div>
              </Bounce>
            </Cell>
          </Grid>
          </div>
        </Pulse>
    )
  }
}

export default Landing;
