import React, {Component} from 'react'
import './App.css'
import Navbar from './component/navbar'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Home from './pages/home'
import About from './pages/about'
import Resume from './pages/resume'
import { Switch, Route, Redirect } from 'react-router-dom'
import './CSS_Reset.css'
import { Link, animateScroll as scroll } from "react-scroll";

class App extends Component {
  render () {
    return (
      <div className="App">
        <Navbar />
        {/* <Switch>
            <Route exact path="/" component={ () => <Home />} />
            <Route path="/Projects" component={ () => <Projects />} />
            <Route path="/Contact" component={ () => <Contact />} />
            <Route path="/About" component={ () => <About />} />
            <Route path="/Resume" component={ () => <Resume />} />
            <Redirect to="/" />
        </Switch> */}
        <Home />
        <About />
        <Projects />
        <Contact />
        <Resume />
      </div>
    )
  }
}


export default App;
