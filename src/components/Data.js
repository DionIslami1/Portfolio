import { AiFillHome } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'
import { AiFillProject } from 'react-icons/ai'
import { RiContactsBookFill } from 'react-icons/ri'

import react_icon from '../assets/images/React-icon.svg.png';
import html_icon from '../assets/images/html-icon.svg';
import css_icon from '../assets/images/css-icon.png';
import js_icon from '../assets/images/javascript-icon.svg';
import php_icon from '../assets/images/php-icon-2.png';
import mysql_icon from '../assets/images/mysql-icon.png';
import scss_icon from '../assets/images/scss-logo.png';
import boostrap_icon from '../assets/images/bootstrap-logo.jpg';
import git_icon from '../assets/images/git-logo.png';

import solution25_img from '../assets/images/solution25.png';
import kosovaoutsource_img from '../assets/images/kosovaoutsource.jpg';

import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa'

import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'

export const NavbarData = [
    {
        id: 1,
        link: 'App',
        icon: <AiFillHome className="links-svg" />,
        name: 'Home'
    },
    {
        id: 2,
        link: 'about',
        icon: <BsPersonLinesFill className="links-svg" />,
        name: 'About'
    },
    {
        id: 3,
        link: 'Projects',
        icon: <AiFillProject className="links-svg" />,
        name: 'Projects'
    },
    {
        id: 4,
        link: 'contact',
        icon: <RiContactsBookFill className="links-svg" />,
        name: 'Contact'
    },

];

export const ProjectsData = [
    {
        id: 1,
        link: 'https://github.com/DionIslami1/Portfolio',
        name: 'Portfolio',
        desc: 'My Portfolio',
        tech: 'JavaScript',
        color: '#F1E05A'
    },
    {
        id: 2,
        link: 'https://github.com/DionIslami1/PDDPS',
        name: 'PDDPS',
        desc: 'Platforma Digjitale e te Diplomuarve sipas Programeve Studimore',
        tech: 'PHP',
        color: '#4F5D95'
    },
    {
        id: 3,
        link: 'https://github.com/DionIslami1/HostCreator',
        name: 'HostCreator',
        desc: 'HostCreator',
        tech: 'JavaScript',
        color: '#F1E05A'
    },
    {
        id: 4,
        link: 'https://github.com/DionIslami1/UBH',
        name: 'UBH',
        desc: 'Uebaplikacioni Bicikleta per Huazim',
        tech: 'PHP',
        color: '#4F5D95'
    },
    {
        id: 5,
        link: 'https://github.com/DionIslami1/UMAB',
        name: 'UMAB',
        desc: 'Uebaplikacioni per Menaxhimin e Antarsimeve ne Biblotek',
        tech: 'PHP',
        color: '#4F5D95'
    },
];

export const AboutDataSkills = [
    {
        id: 1,
        link: 'https://reactjs.org/',
        name: 'React.js',
        img: react_icon
    },
    {
        id: 2,
        link: 'https://www.w3schools.com/html/html_intro.asp',
        name: 'HTML',
        img: html_icon
    },
    {
        id: 3,
        link: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS',
        name: 'CSS',
        img: css_icon
    },
    {
        id: 4,
        link: 'https://www.w3schools.com/js/js_intro.asp',
        name: 'JS',
        img: js_icon
    },
    {
        id: 5,
        link: 'https://www.php.net/manual/en/tutorial.firstpage.php',
        name: 'PHP',
        img: php_icon
    },
    {
        id: 6,
        link: 'https://www.mysql.com/',
        name: 'Mysql',
        img: mysql_icon
    },
    {
        id: 7,
        link: 'https://sass-lang.com/guide',
        name: 'Scss',
        img: scss_icon
    },
    {
        id: 8,
        link: 'https://getbootstrap.com/',
        name: 'Boostrap',
        img: boostrap_icon
    },
    {
        id: 9,
        link: 'https://git-scm.com/',
        name: 'Git',
        img: git_icon
    },
];

export const AboutDatExperience = [
    {
        id: 1,
        img: solution25_img,
        date: ' Mar. 2022 to May 2022',
        title: 'Full-Stack Developer (Internship)',
        desc: '- Developed and implemented front-end with Twig and SCSS and back-end with PHP based on client requirements.',
        desc1: '- Learned SCSS, Twig, PHP, PHP OOP'
    },

    {
        id: 2,
        img: kosovaoutsource_img,
        date: ' Sept. 2021 to February 2022',
        title: 'React.Js Developer (Internship)',
        desc: '- Developed and implemented front-end with React.js based on client requirements',
        desc1: '- Learned JavaScript, React.Js, HTML/CSS.'
    },

];

export const ContactData = [
    {
        id: 1,
        icon: <AiFillPhone />,
        title: 'Phone',
        desc: '+383 (0) 45250905'
    },

    {
        id: 2,
        icon: <MdEmail />,
        title: 'Email',
        desc: 'dionislami72@gmail.com'
    },

    {
        id: 3,
        icon: <FaMapMarkerAlt />,
        title: 'Address',
        desc: '28 Nentori, Gjilan, Kosovo'
    },

];

export const FooterData = [
    {
        id: 1,
        link: 'https://www.facebook.com/Dionislami1999/',
        icon: <BsFacebook />
    },

    {
        id: 2,
        link: 'https://www.instagram.com/dionnislami/',
        icon: <BsInstagram />
    },


    {
        id: 3,
        link: 'https://www.linkedin.com/in/dionislami/',
        icon: <BsLinkedin />
    },

    {
        id: 4,
        link: 'https://github.com/DionIslami1',
        icon: <BsGithub />
    },

];


