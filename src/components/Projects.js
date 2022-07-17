import React from 'react'
import './styles/projects.scss'
import { RiGitRepositoryLine } from 'react-icons/ri'

function Projects() {
    return (
        <div className='Projects'>
            <h2>My Projects</h2>
            <div className='Project-boxes'>
                <div className='box'>
                    <div className='box-title'>
                        <RiGitRepositoryLine />
                        <a href='https://github.com/DionIslami1/Portfolio' className='rep-link'>Portfolio</a>
                    </div>
                    <p>My Portfolio</p>
                    <div className='box-bottom'>
                        <div className='box-circle' /><p>JavaScript</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='box-title'>
                        <RiGitRepositoryLine />
                        <a href='https://github.com/DionIslami1/Portfolio' className='rep-link'>PDDPS</a>
                    </div>
                    <p>Platforma Digjitalte e te Diplomuarve sipas Programeve Studimore</p>
                    <div className='box-bottom'>
                        <div className='box-circle' /><p>JavaScript</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='box-title'>
                        <RiGitRepositoryLine />
                        <a href='https://github.com/DionIslami1/Portfolio' className='rep-link'>Portfolio</a>
                    </div>
                    <p>My Portfolio</p>
                    <div className='box-bottom'>
                        <div className='box-circle' /><p>JavaScript</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='box-title'>
                        <RiGitRepositoryLine />
                        <a href='https://github.com/DionIslami1/Portfolio' className='rep-link'>Portfolio</a>
                    </div>
                    <p>My Portfolio</p>
                    <div className='box-bottom'>
                        <div className='box-circle' /><p>JavaScript</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='box-title'>
                        <RiGitRepositoryLine />
                        <a href='https://github.com/DionIslami1/Portfolio' className='rep-link'>Portfolio</a>
                    </div>
                    <p>My Portfolio</p>
                    <div className='box-bottom'>
                        <div className='box-circle' /><p>JavaScript</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='box-title'>
                        <RiGitRepositoryLine />
                        <a href='https://github.com/DionIslami1/Portfolio' className='rep-link'>Portfolio</a>
                    </div>
                    <p>My Portfolio</p>
                    <div className='box-bottom'>
                        <div className='box-circle' /><p>JavaScript</p>
                    </div>
                </div>
            </div>
            <a href='https://github.com/DionIslami1?tab=repositories' className='check-more'> Check More</a>
        </div>
    )
}
export default Projects