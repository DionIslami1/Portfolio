import React from 'react'
import './styles/about.scss'
import { AboutDataSkills, AboutDatExperience } from './Data'

function About() {
    return (
        <div className='about'>
            <div className='about-me'>
                <h2>About Me</h2>
                <div className='about-desc'>
                    <p>Highly motivated, dedicated, and resultsdriven Web Developer with robust problemsolving skills. Experienced in React.Js,JavaScript, HTML, CSS PHP, MySQL. Graduate of Computer Sciences, very motivated and passionate about personal and professional development. Equipped with good communication skill. During my years of studies as well as my 8 months of internships, I have been part of many projects and had the chance to grow and stay up to date. I am open to work and learn new technologies. With a solid work ethic, professionalism, accountability, and integrity to ensure company’s success.
                    </p>
                </div>
            </div>

            <div className='skills'>
                <h2>My Skills</h2>
                <div className='skills-desc'>
                    {AboutDataSkills.map((props) => {
                        return (
                            <a href={props.link} key={props.id} className='skills-logo' style={{ content: `url(${props.img})` }} >{props.name}</a>
                        )
                    })}
                </div>
            </div>

            <div className='about-experiences'>
                <h2>My Experiences</h2>
                <div className='work-experiences'>
                    {AboutDatExperience.map((prop) => {
                        return (
                            <div className='experiences-box'>
                                <div className='company-logo' style={{ content: `url(${prop.img})` }} />
                                <div className='company-desc'>
                                    <h4>{prop.date}</h4>
                                    <h3>{prop.title}</h3>
                                    <p>{prop.desc} <br /> {prop.desc1}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default About