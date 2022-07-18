import React, { useState, useEffect, createContext } from 'react'
import './styles/navBar.scss'
import MobileNav from './MobileNav/MobileNav';
import { Link } from 'react-scroll';
import clsx from "clsx";
import PDF from '../assets/pdf-files/1.1 Dion_Islami_Resume.pdf'
import { ImProfile } from 'react-icons/im'
import { NavbarData } from './Data'

export const ThemeContext = createContext(null);

function NavBar() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const navbar = document.querySelector(".navbar");
        const navHeight = navbar.scrollHeight;

        const handleScroll = () => {
            const scrollHeight = window.pageYOffset;
            setIsSticky(scrollHeight > 1 ? true : false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={clsx('navbar', isSticky ? "header__sticky" : "")}>
            <Link to='App' className="navbar-logo" smooth={true} duration={2000} />

            <div className="links">
                {NavbarData.map((props) => {
                    return (
                        <Link to={props.link} className="inner-links" smooth={true} duration={1000} key={props.id}> {props.icon}{props.name}</Link>
                    )
                })}
                <a href={PDF} target="_blank" className="inner-links" rel="noreferrer" smooth={true} duration={1000}> <ImProfile className="links-svg" />Resume</a>
            </div>
            <MobileNav />
        </div>
    )
}

export default NavBar