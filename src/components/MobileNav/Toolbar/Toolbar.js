import React, { useState, useEffect } from 'react'
import './toolbar.scss';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';
import clsx from "clsx";

const Toolbar = (props) => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const toolbar = document.querySelector(".mobile-toolbar");
        const navHeight = toolbar.scrollHeight;

        const handleScroll = () => {
            const scrollHeight = window.pageYOffset;
            setIsSticky(scrollHeight > 1 ? true : false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={clsx('mobile-toolbar', isSticky ? "header__sticky" : "")}>
            <div className="toolbar-darkmode">
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <p>Dark Mode</p>
            </div>
            <Link to='#' className="toolbar-logo"></Link>
            <button type="button" onClick={props.iconHandler}><AiOutlineMenu /></button>
        </div>
    )
}

export default Toolbar