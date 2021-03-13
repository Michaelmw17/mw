import React from 'react'
import { contact, section5Title, social } from '../../profile'
import pdf from '../assets/MichaelWatt(2).pdf'
const Contact = () => {
    
    return (
        <div className="parallax">
                <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
                    <center>
                <div className="git-head-div">
                        <h1 id="Contact" className="git-head">{section5Title}</h1>
                </div>
                <div className="container">
            <div className="git-cont row">
                <div className="col-12 col-sm-12 ">
                    <p className="lead">
                        {contact.pitch}        
                    </p>
                
                <div className="inline-block">
                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank"  href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                    {social.twitter && <a title="Visit Twitter profile" rel="noopener noreferrer" target="_blank" href={social.twitter}><i className="fab fa-twitter"></i></a>}
                    {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}<br/>
                    {social.resume && <a title="Download Resume" href={pdf} download = "MichaelWatt(2).pdf"><i className="fas fa-download"></i></a>}
                </div>
                </div>
            </div>
            </div>
                </center>
        </div>
                        <div className="col-12 col-sm-12 half">
                            <iframe
                            id="JotFormIFrame-210483002658046"
                            title="my Contact"
                            allowtransparency="true"
                            allowFullScreen={true}
                            allow="geolocation; microphone; camera"
                            src="https://form.jotform.com/210483002658046"
                            frameBorder="0"
                            style={{paddingTop:'40px',minWidth: '100%',height:'160vh',
                            border:'none'}}
                            scrolling="no"
                            >
                            </iframe>
                    
                </div>
            {/* <p id="not-dark" className="Copy">2020 © Copyright <strong>{contact.copyright}</strong>. All Rights Reserved</p> */}
        </div>
    )
    
}

export default Contact
