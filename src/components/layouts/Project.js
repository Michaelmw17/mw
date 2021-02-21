import React from 'react'

const Project = ({id, name, url, skills, e}) => {
    return (
        <div data-aos="fade-up" className=" col-12 col-lg-4 project-card">
            <div className="image-project">
                <div id={id} className="img-pro"></div>
            </div>
            <a title={url} key={e} className="project-name" rel="noopener noreferrer" target="_blank" href={url}><h2>{name}</h2></a>
            { skills && <h3>{skills.map(skill => skill)}</h3> }
        </div>
    )
}

export default Project
