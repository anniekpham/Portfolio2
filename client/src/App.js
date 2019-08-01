import React, {Component} from 'react'
import './App.css'
import Navbar from './component/navbar'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Home from './pages/home'
import About from './pages/about'
import './CSS_Reset.css'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    )
  }
}


export default App;