    
import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './home.css'
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

function Home() {

  return (
    <div id="home">
        <header class="name">
           <div className="background"></div>
            <div class="title1">
                <div class="name1">
                    <h1 className="first">Annie Pham</h1>
                </div>
                <div class="subtitle1">
                    <h3 className="subtitle2">Full-Stack Developer</h3>
                </div>
            </div>
        </header>
        <nav className="links">
            <Link
                className='link'
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                // offset={-180}
                duration= {500}
            >Home</Link>
            <Link
                activeClass="active"
                className='link'
                to="about"
                spy={true}
                smooth={true}
                // offset={-100}
                duration= {500}
            >About</Link>
            <Link
                activeClass="active"
                className='link'
                to="projects"
                spy={true}
                smooth={true}
                // offset={-100}
                duration= {500}
            >Projects</Link>
            <Link
                activeClass="active"
                className='link'
                to="contact"
                spy={true}
                smooth={true}
                // offset={-80}
                duration= {500}
            >Contact</Link>
            <Link
                activeClass="active"
                to="resume"
                className='link'
                spy={true}
                smooth={true}
                // offset={-80}
                duration= {500}
            >Resume</Link>
        </nav>
        <div className="border"></div>
        <div className="logos">
            <a href="https://github.com/anniekpham"><FaGithub className="icon1"/></a>
            <a href="https://www.linkedin.com/in/annie-pham-15a789147/"><FaLinkedin className="icon2"/></a>
            <a href="https://www.facebook.com/annie.k.pham?ref=bookmarks"><FaFacebookSquare className="icon3"/></a>
        </div>
    </div>
  );
}

export default Home