import React from 'react'
import './styles/projects.scss'
import { RiGitRepositoryLine } from 'react-icons/ri'
import { ProjectsData } from './Data'

function Projects() {
    return (
        <div className='Projects'>
            <h2>My Projects</h2>
            <div className='Project-boxes'>
                {ProjectsData.map((props) => {
                    return (
                        <div className='box' key={props.id}>
                            <div className='box-title'>
                                <RiGitRepositoryLine />
                                <a href={props.link} className='rep-link'>{props.name}</a>
                            </div>
                            <p>{props.desc}</p>
                            <div className='box-bottom'>
                                <div className='box-circle' style={{ backgroundColor: props.color }} /><p>{props.tech}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <a href='https://github.com/DionIslami1?tab=repositories' className='check-more'> Check More</a>
        </div >
    )
}
export default Projects