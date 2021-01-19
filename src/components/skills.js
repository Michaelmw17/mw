import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Zoom from 'react-reveal/Zoom';
import "animate.css/animate.min.css";

class Skills extends Component {
  render() {
    return (
      <Zoom>
      <Grid>
          <Cell col={1}>
            <div>
            <Grid style={{ display: 'flex' }}>{this.props.skill}
            </Grid>
            </div>
        </Cell>
        </Grid>
      </Zoom>
    )
  }
}

export default Skills;
