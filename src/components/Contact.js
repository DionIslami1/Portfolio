import React from 'react'
import './styles/contact.scss'
import { ContactData } from './Data'

function Contact() {
    return (
        <div className='contact'>
            <h2>My Contact</h2>
            <div className='contact-boxes'>
                {ContactData.map((props) => {
                    return (
                        <div className='contact-box' key={props.id}>
                            <div className='contact-icon'>{props.icon}</div>
                            <div className='contact-box-desc'>
                                <h3>{props.title}</h3>
                                <p>{props.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Contact