import React from 'react'
import './sidebar.scss';
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { AiFillHome } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'
import { AiFillProject } from 'react-icons/ai'
import { RiContactsBookFill } from 'react-icons/ri'
import PDF from '../../../assets/pdf-files/1.1 Dion_Islami_Resume.pdf'
import { ImProfile } from 'react-icons/im'
import { NavbarData } from '../../Data';

const Sidebar = (props) => {
    return (
        <div className="nav-sidebar">
            <div className="sidebar-header" >
                <Link to='App' className="sidebar-logo" smooth={true} duration={2000} onClick={props.close}></Link>
                <button onClick={props.close}><AiOutlineClose /></button>
            </div>
            {NavbarData.map((props) => {
                return (
                    <Link className="sidebar-link" to={props.link} key={props.id} smooth={true} duration={1000} onClick={props.close}>
                        <div className="sidebar-inner-link">{props.icon} {props.name}</div>
                    </Link>
                )
            })}
            <a href={PDF} target="_blank" rel="noreferrer" className="sidebar-link" to='contact' smooth={true} duration={1000} onClick={props.close}>
                <div className="sidebar-inner-link"> <ImProfile /> Resume</div>
            </a>
        </div>
    )
}

export default Sidebar