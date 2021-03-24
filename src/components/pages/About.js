import React from 'react'
import { about, section2title } from '../../profile'
import { Grid, Image } from 'semantic-ui-react'
import photo from '../../styles/profile.png'
import Dog from '../../styles/circle-cropped.png'
console.log()

const About = () => {
    return (
        <div id="about" className="effect2">
            <div data-aos="zoom-in-up" data-aos-once="true" className="row">
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                    <Grid.Column>
                        <Image src={photo} alt="Photo" href='/' className='Photo' width='230px' height='230px' />
                        </Grid.Column>
                    <Grid.Column>
                        <Image src={Dog} alt="Dog" href='/' className='Dog' width='230px' height='230px' />
                        </Grid.Column>
                    <Grid.Column>
                        <div className="About-title-box">
                        <h1 id="About" className="red-line">{section2title}</h1>
                        </div>
                        <p className="lead about-text">
                            {about.paragraph}  
                        </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
            
        </div>
    )
}

export default About
