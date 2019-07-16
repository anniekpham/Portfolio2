import React from 'react';
import Projects from '../../pages/projects'
import Contact from '../../pages/contact'
import Home from '../../pages/home'
import { Link } from 'react-router-dom'


function Navbar() {

  return (
    <nav>
        <span><Link to="/Projects">Projects</Link></span>
        <span><Link to="/Contact">Contact</Link></span>
        <span><Link to="/Home">Home</Link></span>
    </nav>
  );
}

export default Navbar