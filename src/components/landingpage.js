import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Bounce from 'react-reveal/Bounce';
import "animate.css/animate.min.css";
import Zoom from 'react-reveal/Zoom';

class Landing extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <Bounce>
              <img src={process.env.PUBLIC_URL + '/Images/circle-cropped.png'} alt="Logo" style={{ height: '200px', paddingTop: '50px' }}/>
              <div className="banner-text">
                <Zoom>
              <h1>Full Stack Web Developer</h1>
            <hr/>
            <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>
          <div className="social-links">
          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
                    </a>
          
          {/* Freecodecamp */}
          {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a> */}

          {/* Youtube */}
          {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a> */}
                  </div>
                </Zoom>
            </div>
            </Bounce>
          </Cell>
        </Grid>
        </div>
        
    )
  }
}

export default Landing;
