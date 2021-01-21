import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Fade from 'react-reveal/Fade';
import "animate.css/animate.min.css";


class Contact extends Component {
  render() {
    return (<Fade>
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="contact-grid">
          <Cell col={12} tablet={8}>
            <img src={process.env.PUBLIC_URL + '/Images/circle-cropped.png'} alt="Logo" style={{ height: '200px' }}/>
            <div className="header-text">
              <h1>Full Stack Web Developer</h1>
                <hr/>
              <p>
                HTML/CSS | Bootstrap | JavaScript | React | React Native | Node | Express | MongoDB | Git/Github | jQuery | APIs | JSON | AJAX
                </p>
              <div className="my-links">
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
                  </div>
              </Cell>
            </Grid>
          </div>
      </Fade>
    )
  }
}

export default Contact;
