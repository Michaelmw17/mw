import React, { Component, lazy, Suspense } from 'react';
import "./style.css";
import ScrollAnimation from 'react-animate-on-scroll'
// import Bounce from 'react-reveal/Bounce';
import Jello from 'react-reveal/Jello';
import "animate.css/animate.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const MyComp = lazy(() => import('../MyComp/myComp'));


class About extends Component {
  render() {
    return(
      <div className="landing-grid-about">
        <ScrollAnimation animateIn="fadeOut">
          <Jello>
        
  <h1 className="aboutHeader">About me</h1>
            {/* <img src='./circle-cropped.png'  alt="logo" style={{height: '200px', alignSelf: 'center', display:"flex"}} className="img-about" /> */}
            <Suspense fallback={
                      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
                    
                  }>
                    <MyComp />
                </Suspense>
        <p className="aboutFirstPara">
            Completed Full Stack Web Development at the University of Sydney. I started the course as I enjoy the challenges of coding. I've learnt  JavaScript,  Html, CSS, Bootstrap, jQuery, API's, Node, Express, MySQL, NoSQL, MongoDB  and responsive Web design with wanting to further develop my coding skills with the goal to become a Full-Stack Web Developer.
            <br />
                      Currently employed in the hospitality industry whilst studying.
                      I have completed Certificate IV in Business Studies and have experience in customer service. I’m motivated to become a Web Developer as I really like the problem-solving aspects of Web Design and building a website that creates a great UI and UX experience. <br />
                      I would describe my self as a driven, organised and open-minded person with creative ideas, who is motivated to use my skills and knowledge in a Web Development team. I hope for an exciting career change and am always up for a challenge.
                        Full Stack Web development with a extensive background in JavaScript, CSS, HTML, node.js, jQuery, API's, MySQL, MongoDb and responsive web design. I'm a fascinated, passionate web developer with an unshakeable optimist attitude always wanting to give my best.<br />
                      Completed Full Stack Web Development course at University of Sydney and have a Certificate IV in Business Studies. I’m motivated to become a web developer as the problem-solving aspects of web design is a challenging experience.
                      <br />
I have extensive experience in customer service and business administration having worked in retail and hospitality for over four years. Having been employed for 2 years in my current role in hospitality Club York, I collaborate effectively with the team and am proactive about implementing systems improvement. Prior to this I have volunteered at Two Wolves Cantina.
<br />
I’m an organised and open-minded person with creative ideas motivated to use my skills and knowledge. My technical expertise, customer service and systems experience will add value to any web team.

                    
                    
        </p>

        {/* <ScrollAnimation animateIn="fadeIn">
          <h1 className="h1">About me</h1>
          <img src='./circle-cropped.png'  alt="logo" style={{height: '200px', alignSelf: 'center', display:"flex"}} className="img-about" />
        <p className="aboutFirstPara">
            I am studying Full Stack Web Development at the University of Sydney. I started the course as I enjoy the challenges of coding. I've learnt  JavaScript,  Html, CSS, Bootstrap, jQuery, API's, Node, Express, MySQL, NoSQL, MongoDB  and responsive Web design with wanting to further develop my coding skills with the goal to become a Full-Stack Web Developer.
            <br />
                      Currently employed in the hospitality industry whilst studying.
                      I have completed Certificate IV in Business Studies and have experience in customer service. I’m motivated to become a Web Developer as I really like the problem-solving aspects of Web Design and building a website that creates a great UI and UX experience. <br />
            I would describe my self as a driven, organised and open-minded person with creative ideas, who is motivated to use my skills and knowledge in a Web Development team. I hope for an exciting career change and am always up for a challenge.
                    
                    
        </p>
        </ScrollAnimation> */}
          </Jello>
        </ScrollAnimation>
      </div>
      
      

    )
  }
}


export default About;
