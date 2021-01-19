import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Zoom from 'react-reveal/Zoom';
import "animate.css/animate.min.css";

class Experience extends Component {
  render() {
    return (
      <Zoom>
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear} / {this.props.titleName}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.jobName} </h4>
          <p>{this.props.jobDescription}</p>
        </Cell>
        </Grid>
      </Zoom>
    )
  }
}

export default Experience;
