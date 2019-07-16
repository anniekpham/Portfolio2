    
import React from 'react';
import { Link } from 'react-router-dom'
import './home.css'
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

function Home() {

  return (
    <>
        <div className="title">
            <h1>Annie Pham</h1>
        </div>
        <nav className="links">
            <span className='link'><Link to="/Projects">Projects</Link></span>
            <span className='link'><Link to="/About">About</Link></span>
            <span className='link'><Link to="/Contact">Contact</Link></span>
            <span className='link'><Link to="/Resume">Resume</Link></span>
        </nav>
        <div className="border"></div>
        <div className="logos">
            <a href="https://github.com/anniekpham"><FaGithub className="icon"/></a>
            <a href="https://www.linkedin.com/in/annie-pham-15a789147/"><FaLinkedin className="icon"/></a>
            <a href="https://www.facebook.com/annie.k.pham?ref=bookmarks"><FaFacebookSquare className="icon"/></a>
        </div>
    </>
  );
}

export default Home