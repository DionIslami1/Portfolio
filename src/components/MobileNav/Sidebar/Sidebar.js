import React from 'react'
import './sidebar.scss';
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { AiFillHome } from 'react-icons/ai'

const Sidebar = (props) => {
    return (
        <div className="nav-sidebar">
            <div to='/' className="sidebar-header">
                <Link className="sidebar-logo"></Link>
                <button onClick={props.close}><AiOutlineClose /></button>
            </div>

            <div className="sidebar-link">
                <Link to='/'><AiFillHome /> Home</Link>
            </div>
            <div className="sidebar-link">
                <Link to='/'><AiFillHome /> About</Link>
            </div>
            <div className="sidebar-link">
                <Link to='/'><AiFillHome /> Projects</Link>
            </div>
            <div className="sidebar-link">
                <Link to='/'><AiFillHome /> Contacts</Link>
            </div>
        </div>
    )
}

export default Sidebar