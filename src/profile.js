// Change your display name on tha landing display
const header = {
    name: "Michael Watt",
}
const background = {
    // Options: Snow or Particle
    type: "Snow"
}

                      
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me"
const about = {
    paragraph: "I hope for an exciting career change and am always up for a challenge. Full Stack Web development with a extensive background in JavaScript, Html, CSS, Bootstrap, Responsive Web Design, React, jQuery, API's, Node, Express, MySQL, NoSQL, MongoDB, JSON, AJAX, Git/Github, ORM, Python. I'm a fascinated, passionate web developer with an unshakeable optimist attitude always wanting to give my best. Completed Full Stack Web Development course at University of Sydney and have a Certificate IV in Business Studies. I’m motivated to become a web developer as the problem-solving aspects of web design is a challenging experience. I have extensive experience in customer service and business administration having worked in retail and hospitality for over four years. "

}

//Having been employed for 2 years in my current role in hospitality Club York, I collaborate effectively with the team and am proactive about implementing systems improvement. Prior to this I have volunteered at Two Wolves Cantina. I’m an organised and open-minded person with creative ideas motivated to use my skills and knowledge. My technical expertise, customer service and systems experience will add value to any web team.
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma

// Edit your projects, its name, your skills used to make it, and the url. 
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = " Projects"
const projects = [
    {
        // Add image in './styles/images.css' in #project1
        id: "project1",
        name: "Basketball News",
        skills: ["HTML, CSS, JS"],
        url: "https://agr2020xman.github.io/Project_1-Basketball-News/"
    },
    {
        // Add image in './styles/images.css' in #project2
        id: "project2",
        name: "Eco Getaway",
        skills: ["MERN React App"],
        url: "https://eco-getaway.herokuapp.com/"
    },
    {
        // Add image in './styles/images.css' in #project3
        id: "project3",
        name: "Business Advertisement Portal",
        skills: ["HTML, CSS, JS, Handlebars"],
        url: "https://business-advertisement-portal.herokuapp.com/"
    },
    {
        // Add image in './styles/images.css' in #project4
        id: "project4",
        name: "Burger App",
        skills: ["HTML, CSS, JS, Handlebars, MySQL, express"],
        url: "https://hidden-fortress-02395.herokuapp.com/"
    },
    {
        // Add image in './styles/images.css' in #project5
        id: "project5",
        name: "Employee Directory",
        skills: ["HTML, CSS, React, RandomAPI"],
        url: "https://michaelmw17.github.io/react-employee-directory/"
    },
    {
        // Add image in './styles/images.css' in #project6
        id: "project6",
        name: "Read me Generator",
        skills: ["Inquirer, Node, JS"],
        url: "https://github.com/Michaelmw17/READ.me-Generator"
    },
]
// Edit your Miscellaneous Activities, its name and the url. 
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Socials"
const miscellaneous = [
    {
        // Add image in './styles/images.css' in #misc1
        id: "misc1",
        name: "Github",
        url: "https://github.com/Michaelmw17"
    },
    {
        // Add image in './styles/images.css' in #misc2        
        id: "misc2",
        name: "Linkedin",
        url: "https://www.linkedin.com/in/michael-watt-6a76961b3/"
    },
    {
        // Add image in './styles/images.css' in #misc3
        id: "misc3",
        name: "Twitter",
        url: "https://twitter.com/michaelDaleyOne"
    },
]
// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch"
const contact = {
    pitch: "Feel Free to contact me with any questions you may have ",
    copyright: "Michael Watt",
    contactUrl: 'https://form.jotform.com/210483002658046'
}
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
    github: 'https://github.com/Michaelmw17',
    linkedin: 'https://www.linkedin.com/in/michael-watt-6a76961b3/',
    twitter: 'https://twitter.com/Michael51620516',
    resume: '/portfolio-template/public/assets/MichaelWatt(2).pdf'
}
// Dont change anything here
export { header, background, about,  projects, miscellaneous, contact, social, section2title, section3Title, section4Title, section5Title }