import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import "animate.css/animate.min.css";

class Education extends Component  {
  render ()  {
    return (
      <Zoom>
      <Fade>
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
          <ul>{this.props.schoolDescription}</ul>
        </Cell>
        </Grid>
        </Fade>
      </Zoom>
    )
  }
}

export default Education;
