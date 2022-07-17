import React from 'react'
import './styles/about.scss'

function About() {
    return (
        <div className='about'>
            <div className='about-me'>
                <h2>About Me</h2>
                <div className='about-desc'>
                    <p>Highly motivated, dedicated, and resultsdriven Web Developer with robust problemsolving skills. Experienced in React.Js,JavaScript, HTML, CSS PHP, MySQL. Graduate of Computer Sciences, very motivated and passionate about personal and professional development. Equipped with good communication skill. During my years of studies as well as my 8 months of internships, I have been part of many projects and had the chance to grow and stay up to date. I am open to work and learn new technologies. With a solid work ethic, professionalism, accountability, and integrity to ensure company’s success.
                    </p>
                </div>
            </div>

            <div className='skills'>
                <h2>My Skills</h2>
                <div className='skills-desc'>
                    <a href='https://reactjs.org/' className='skills-logo-react'>React.js</a>
                    <a href="https://www.w3schools.com/html/html_intro.asp" className='skills-logo-html'>HTML</a>
                    <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS" className='skills-logo-css'>CSS</a>
                    <a href="https://www.w3schools.com/js/js_intro.asp" className='skills-logo-js'>JS</a>
                    <a href="https://www.php.net/manual/en/tutorial.firstpage.php" className='skills-logo-php'>PHP</a>
                    <a href="https://www.mysql.com/" className='skills-logo-mysql'>Mysql</a>
                    <a href="https://sass-lang.com/guide" className='skills-logo-scss'>Scss</a>
                    <a href="https://getbootstrap.com/" className='skills-logo-bootstrap'>Boostrap</a>
                    <a href="https://git-scm.com/" className='skills-logo-git'>Git</a>
                </div>
            </div>

            <div className='about-experiences'>
                <h2>My Experiences</h2>
                <div className='work-experiences'>
                    <div className='experiences-box'>
                        <div className='company-logo' />
                        <div className='company-desc'>
                            <h4> Mar. 2022 to May 2022 </h4>
                            <h3>Full-Stack Developer (Internship) </h3>
                            <p>- Developed and implemented front-end with
                                Twig and SCSS and back-end with PHP
                                based on client requirements.<br />
                                - Learned SCSS, Twig, PHP, PHP OOP.
                            </p>
                        </div>
                    </div>
                    <div className='experiences-box'>
                        <div className='company-logo1' />
                        <div className='company-desc'>
                            <h4>Sept. 2021 to February 2022</h4>
                            <h3>React.Js Developer (Internship)</h3>
                            <p>- Developed and implemented front-end with
                                React.js based on client requirements.<br />
                                - Learned JavaScript, React.Js, HTML/CSS.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About