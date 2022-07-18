import React from 'react'
import './styles/footer.scss'
import { FooterData } from './Data'

function Footer() {
    return (
        <div className="footer">
            <h2>Dion Islami</h2>
            <h3>Your Web Developer</h3>
            <div className="footer-icons">
                {FooterData.map((props) => {
                    return (
                        <a href={props.link} className="footer-icon" key={props.id}>{props.icon}</a>
                    )
                })}
            </div>
            <p>Copyright © 2022 Dion Islami. All rights reserved</p>
        </div>
    )
}

export default Footer