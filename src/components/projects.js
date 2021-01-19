import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle alt='basketball' style={{color: '#fff', height: '176px', background: 'url(https://agr2020xman.github.io/Project_1-Basketball-News/img/basketball-removebg-preview.png'}} ></CardTitle>
            <CardText>
              Welcome to the Basket News web app! Are you a fan of the NBA or have a
                        favourite player? Basket News brings all this useful information,
                        want to keep up to date on this seasons player statistics? Do
                        you want to easily pull up some news archives about your athlete 
                        into one place. Don't believe us? Just try it out and you'll
                        never need to search anywhere else for your NBA stats or news!
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/Michaelmw17">GitHub</a></Button>
              <Button colored><a href="https://github.com/AGr2020Xman/Project_1-Basketball-News">Github App</a></Button>
              <Button colored><a href="https://agr2020xman.github.io/Project_1-Basketball-News/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://business-advertisement-portal.herokuapp.com/assets/images/202a200d-dc06-4960-a219-348c189ab453_200x200.png) center / cover'}} ></CardTitle>
            <CardText>
              Advertisement portal is made by 4 students currently completing a
                    certification in full stack web development from the University of Sydney.
                    We are creating this website to meet our requirements and also help the end-users as
                    well. We thought about small-to-medium enterprises (SME’s) that have a product-based business model. They have
                    taken a huge blow as COVID-19 has bought about a recession, forcing people to reduce their expenses. The
                    Business Advertisement Portal came into existence with the thought of helping these SME’s.
                    Almost all of the current advertisement channels are revenue oriented, by providing a free service.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/Michaelmw17">GitHub</a></Button>
              <Button colored><a href="https://github.com/prabhm512/business-advertisement-portal">Github App</a></Button>
              <Button colored><a href="https://business-advertisement-portal.herokuapp.com/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          {/* <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://via.placeholder.com/150) center / cover'}} >React Project #3 </CardTitle>
            <CardText>
              Coming Soon...
            </CardText>
            <CardActions border>
             <Button colored><a href="https://github.com/Michaelmw17">GitHub</a></Button>
              <Button colored><a href="#">Github App</a></Button>
              <Button colored><a href="#">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card> */}
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff',  height: '176px', background: 'url(https://avatars1.githubusercontent.com/u/68934942?s=460&u=6b540953a024c11773443fa56301c2db879e842d&v=4) center / cover'}} ></CardTitle>
            <CardText>
              Michael's Github account 
            </CardText>
            <CardActions border>
            <Button colored><a href="https://github.com/Michaelmw17">GitHub</a></Button>
            <Button colored><a href="https://michaelmw17.github.io/">Portfolio</a></Button>
              <Button colored><a href="https://github.com/Michaelmw17?tab=repositories">Github Repositories</a></Button>
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://via.placeholder.com/150'}} >React Project #2</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
      )
    } else if(this.state.activeTab === 3) {
      return (
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://via.placeholder.com/150'}} >React Project #2</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Projects</Tab>
          <Tab>Github</Tab>
          {/* <Tab>Future</Tab> */}
          {/* <Tab>Coming soon</Tab> */}
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
