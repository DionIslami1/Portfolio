import React, { useState, useEffect, createContext } from 'react'
import './styles/navBar.scss'
import MobileNav from './MobileNav/MobileNav';
import { Link } from 'react-scroll';
import { AiFillHome } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'
import { AiFillProject } from 'react-icons/ai'
import { RiContactsBookFill } from 'react-icons/ri'
import clsx from "clsx";

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

    //dark mode
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={clsx('navbar', isSticky ? "header__sticky" : "")}>
                <div className="navbar-darkmode">
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <p>Dark Mode</p>
                </div>
                <Link to='App' className="navbar-logo" smooth={true} duration={2000} />
                <div className="links">
                    <Link to='App' className="inner-links" smooth={true} duration={1000}> <AiFillHome className="links-svg" />Home</Link>
                    <Link to='about' className="inner-links" smooth={true} duration={1000}> <BsPersonLinesFill className="links-svg" /> About</Link>
                    <Link to='Projects' className="inner-links" smooth={true} duration={1000}> <AiFillProject className="links-svg" /> Projects</Link>
                    <Link to='contact' className="inner-links" smooth={true} duration={1000}> <RiContactsBookFill className="links-svg" /> Contact</Link>
                </div>
                <MobileNav />
            </div>
        </ThemeContext.Provider >
    )
}

export default NavBar