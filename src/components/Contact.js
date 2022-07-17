import React from 'react'
import './styles/contact.scss'
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa'


function Contact() {
    return (
        <div className='contact'>
            <h2>My Contact</h2>
            <div className='contact-boxes'>
                <div className='contact-box'>
                    <div className='contact-icon'><AiFillPhone /></div>
                    <div className='contact-box-desc'>
                        <h3>Phone</h3>
                        <p>+383 (0) 45250905</p>
                    </div>
                </div>

                <div className='contact-box'>
                    <div className='contact-icon'><MdEmail /></div>
                    <div className='contact-box-desc'>
                        <h3>Email</h3>
                        <p>dionislami72@gmail.com</p>
                    </div>
                </div>

                <div className='contact-box'>
                    <div className='contact-icon'><FaMapMarkerAlt /></div>
                    <div className='contact-box-desc'>
                        <h3>Address</h3>
                        <p>28 Nentori, Gjilan, Kosovo</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Contact