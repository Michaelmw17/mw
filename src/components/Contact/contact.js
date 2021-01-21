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
              <p> HTML/CSS | Bootstrap | JavaScript | React | React Native | Node | Express | MongoDB | Git/Github | jQuery | APIs | JSON | AJAX </p>
              
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
        {/* <Cell col={2} phone={4}></Cell> */}
                </Grid>
          
                {/* Freecodecamp */}
                {/* <Cell  col={1}><a style={{color: 'black'}}  smooth={true} href = "https://www.google.com/maps/place/Sydney+NSW/data=!4m2!3m1!1s0x6b129838f39a743f:0x3017d681632a850?sa=X&ved=2ahUKEwj56oj83KzsAhWBA3IKHZFTBkAQ8gEwH3oECDAQBA">Sydney NSW</a></Cell>
            <h5>Phone</h5>
            <Cell col={1}><a href="tel:+61449620082"> <i className="fa fa-phone fa-2x" aria-hidden="true"/></a></Cell>
            <h5>Email</h5>
            <Cell col={1}><a href ="mailto:michaelmw17@outlook.com"> <i className="fa fa-envelope fa-2x" aria-hidden="true"/></a></Cell>
            <h5>Site</h5>
            <a href='http://michaelmw17.github.io/mw/'> <i className="fa fa-globe fa-2x" aria-hidden="true"/></a>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/> */}
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
