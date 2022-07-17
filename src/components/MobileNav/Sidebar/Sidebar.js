import React from 'react'
import './sidebar.scss';
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { AiFillHome } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'
import { AiFillProject } from 'react-icons/ai'
import { RiContactsBookFill } from 'react-icons/ri'

const Sidebar = (props) => {
    return (
        <div className="nav-sidebar">
            <div className="sidebar-header" >
                <Link to='App' className="sidebar-logo" smooth={true} duration={2000} onClick={props.close}></Link>
                <button onClick={props.close}><AiOutlineClose /></button>
            </div>

            <Link className="sidebar-link" to='App' smooth={true} duration={1000} onClick={props.close}>
                <div className="sidebar-inner-link"><AiFillHome /> Home</div>
            </Link>
            <Link className="sidebar-link" to='about' smooth={true} duration={1000} onClick={props.close}>
                <div className="sidebar-inner-link"><BsPersonLinesFill /> About</div>
            </Link>
            <Link className="sidebar-link" to='Projects' smooth={true} duration={1000} onClick={props.close}>
                <div className="sidebar-inner-link"><AiFillProject /> Projects</div>
            </Link>
            <Link className="sidebar-link" to='contact' smooth={true} duration={1000} onClick={props.close}>
                <div className="sidebar-inner-link"><RiContactsBookFill /> Contacts</div>
            </Link>
        </div>
    )
}

export default Sidebar