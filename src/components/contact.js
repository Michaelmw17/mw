import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Bounce from 'react-reveal/Bounce';
import "animate.css/animate.min.css";


class Contact extends Component {
  render() {
    return (<Bounce>
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="contact-grid">
          <Cell col={12}>
            <img src={process.env.PUBLIC_URL + '/Images/circle-cropped.png'} alt="Logo" style={{ height: '200px' }}/>
            <div className="header-text">
              <h1>Full Stack Web Developer</h1>
                <hr/>
              <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>
        <div className="my-links">
          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square fa-4x" aria-hidden="true" />
          </a>
          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square fa-4x" aria-hidden="true" />
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
            </div>
          
          </Cell>
        </Grid>
      </div>
      </Bounce>
      
    )
  }
}

export default Contact;
