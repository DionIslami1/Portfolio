import React from 'react'
import './styles/footer.scss'
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'

function Footer() {
    return (
        <div className="footer">
            <h2>Dion Islami</h2>
            <h3>Your Web Developer</h3>
            <div className="footer-icons">
                <a href="https://www.facebook.com/Dionislami1999/" className="footer-icon"><BsFacebook /></a>
                <a href="https://www.instagram.com/dionnislami/" className="footer-icon"><BsInstagram /></a>
                <a href="https://www.linkedin.com/in/dionislami/" className="footer-icon"><BsLinkedin /></a>
                <a href="https://github.com/DionIslami1" className="footer-icon"><BsGithub /></a>
            </div>
            <p>Copyright © 2022 Dion Islami. All rights reserved</p>

        </div>
    )
}

export default Footer