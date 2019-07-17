    
import React from 'react';
import { Link } from 'react-router-dom'
import './home.css'
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

function Home() {

  return (
    <>
        <header class="name">
           <div className="background"></div>
            <div class="title">
                <div class="name1">
                    <h1>Annie Pham</h1>
                </div>
                <div class="sub1">
                    <h3>Full-stack Developer</h3>
                </div>
            </div>
        </header>
        <nav className="links">
            <span className='link'><Link to="/About">About</Link></span>
            <span className='link'><Link to="/Projects">Projects</Link></span>
            <span className='link'><Link to="/Contact">Contact</Link></span>
            <span className='link'><Link to="/Resume">Resume</Link></span>
        </nav>
        <div className="border"></div>
        <div className="logos">
            <a href="https://github.com/anniekpham"><FaGithub className="icon1"/></a>
            <a href="https://www.linkedin.com/in/annie-pham-15a789147/"><FaLinkedin className="icon2"/></a>
            <a href="https://www.facebook.com/annie.k.pham?ref=bookmarks"><FaFacebookSquare className="icon3"/></a>
        </div>
    </>
  );
}

export default Home