import React, { Component, lazy, Suspense } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from '../Education/education';
import Experience from '../Experience/experience';
import Skills from '../Skills/skills';
import Bounce from 'react-reveal/Bounce';
import "animate.css/animate.min.css";
import Zoom from 'react-reveal/Zoom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const MyComp = lazy(() => import('../MyComp/myComp'));


class Resume extends Component {
  render() {
    return(
      <div>
        <Bounce>
        <Grid>
            <Cell col={4} phone={12} tablet={6} className='firstHeader'>
              <Zoom>
                <div style={{ textAlign: 'center' }}>
                  
                  {/* <img lazy='loading' src={process.env.PUBLIC_URL + '/Images/circle-cropped.jpg'} alt="Logo" style={{ height: '200px' }}/> */}
                  <Suspense fallback={
                      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
                    
                  }>
                    <MyComp />
                </Suspense>
            </div>
            <h2 style={{paddingTop: '2rem'}}>Michael</h2>
            <h4 style={{color: 'grey'}}>Full Stacked Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                <p>
                  Front End Web Developer leveraging my background in Business. Trained at the University of Sydney Coding Bootcamp and earned a Certificate in Full Stack Web Development. Known as an innovative problem-solver passionate about developing apps, focused on mobile-first design and development. Thriving on the problem solving aspects of web design. Excited to grow and become a valuable asset, leveraging my skills in the future as part of a quality-driven team with the addition of my attention to detail in order to build better experiences on the web.
                  <br></br>
                  Have extensive experience in customer service and business administration having worked in retail and hospitality for over four years. In my roles in hospitality I collaborate effectively with the team and am proactive about implementing systems improvements.
                  <br></br>
                  When I’m not designing or developing, I enjoy going to the gym, playing games with friends and an active sociable individual who enjoys meeting new people and connections.
                  <br></br>
                  I am an organised and open minded person with creative ideas, motivated to use my skills and knowledge. My technical expertise, customer service and systems experience will add value to any web team. I’m excited to leverage my skills as part of a quality-driven team. 
                  </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Location</h5>
            <Cell  col={1}><a style={{color: 'black'}}  href = "https://www.google.com/maps/place/Sydney+NSW/data=!4m2!3m1!1s0x6b129838f39a743f:0x3017d681632a850?sa=X&ved=2ahUKEwj56oj83KzsAhWBA3IKHZFTBkAQ8gEwH3oECDAQBA">Sydney NSW</a></Cell>
            <h5>Phone</h5>
            <Cell col={1}><a href="tel:+61449620082"> <i className="fa fa-phone fa-2x" aria-hidden="true"/></a></Cell>
            <h5>Email</h5>
            <Cell col={1}><a href ="mailto:michaelmw17@outlook.com"> <i className="fa fa-envelope fa-2x" aria-hidden="true"/></a></Cell>
            <h5>Site</h5>
            <a href='http://michaelmw17.github.io/mw/'> <i className="fa fa-globe fa-2x" aria-hidden="true"/></a>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              </Zoom>
              </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2020}
              endYear={2021}
              schoolName="University of Sydney"
                schoolDescription="I'm currently studying at The University of Sydney to become a Full-stack Web Developer.  
                I have learned Html, CSS, Javascript, Bootstrap, jQuery, API's, Node, Express, MySQL, NoSQL, MongoDB."
                />
              <Education
                id="educationTafe"
                  startYear={2015}
                  endYear={2017}
                  schoolName="TAFE NSW"
                  schoolDescription="Certificate IV in Business | TAFE, Sydney 2016. ~ Certificate II and III in Business | TAFE, Northern Beaches 2015. 
                  ~ Certificate II, Skills for work and training | TAFE, Crows Nest."/>
                  
              <hr style={{ borderTop: '3px solid #e22947' }} />

              <h2>Experience</h2>
            <Experience
                  startYear={2019}
                  endYear={'Current'}
                    jobName="Club York"
                  titleName="Bartender"
                  jobDescription=" York Bar City Bowling Club is an inner city club, eatery and bar
                  that welcomes club members through the doors to experience our food
                  and warm atmosphere. 
                  ~ Managed the beverage service and customer requests. 
                  ~ Maintained stock, managing and restocking pre-shift, reported on
                    loss or damage.
                    Handled cash, credit card and EFT facilities. 
                    ~ Participated in team meetings and other work-related meetings. 
                    ~ Ensured licensing laws and legislative requirements were adhered
                    to. 
                    ~ Ensuring Workplace Health and Safety procedures and processes are
                    adhered to." />
              <Experience
                startYear={2016}
                endYear={2019}
                jobName="Rhythm boat Sydney Harbour Cruises"
                titleName="Bartender"
                jobDescription="Rhythm boat Sydney Harbour Cruises 
                are famous for musical, comedy and variety shows on their dinner cruises as well as a popular wedding, party and function venue.
                ~ Prepared the outlet for the delivery of a range of functions,
                events and services from set up, running and pack down.
                ~ Handled cash, credit card and EFT facilities.
                ~ Assisted with beverage and food service. " />
              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Harris Farm's Market"
                titleName="Store Attendant"
                jobDescription="Harris Farm Markets is an Australian grocery chain with 25 different
                locations in New South Wales.
                The supermarkets specialise in fruit, vegetables, delicatessen and
                other grocery items.
                    ~ Assisted customers both face to face and over the telephone
                    regarding enquiries and orders.
                    ~ Assisted with stock takes, stock deliveries and movements from
                    cool room to shop floor and operated the pallet jack.
                    ~ Trained new staff in stock handling procedures. "/>
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Grid>
                <Skills skill="JavaScript"col={1}></Skills>
                <Skills skill="HTML/HTML5"col={1}></Skills>
                <Skills skill="Bootstrap"col={1}></Skills>
                <Skills skill="CSS/CSS3"col={1}></Skills>
                <Skills skill="MongoDB"col={1}></Skills>
                <Skills skill="MySQL"col={1}></Skills>
                <Skills skill="React"col={1}></Skills>
                <Skills skill="Node.js"col={1}></Skills>
                <Skills skill="API's"col={1}></Skills>
                <Skills skill="Git"col={1}></Skills>
                <Skills skill="UI design "col={1}></Skills>
                <Skills skill="UX design "col={1}></Skills>
              </Grid>
            </Cell>
          </Grid>
        </Bounce>
      </div>
    )
  }
}


export default Resume;
