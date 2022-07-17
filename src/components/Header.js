import React from 'react'
import './styles/header.scss';

function Home() {
    return (
        <div className="header">
            <div className="header-avatar" />
            <div className="header-desc">
                <h1>Hi, I am Dion Islami, Web Developer.</h1>
                <a href="https://www.linkedin.com/in/dionislami/" className="btn-contact">Contact Me</a>
            </div>
        </div>
    )
}

export default Home