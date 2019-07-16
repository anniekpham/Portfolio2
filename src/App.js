import React, {Component} from 'react'
import './App.css'
import Navbar from './component/navbar'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Home from './pages/home'
import { Switch, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Navbar />
        <Switch>
            <Route path="/Projects" component={ () => <Projects />} />
            <Route path="/Contact" component={ () => <Contact />} />
            <Route path="/" component={ () => <Home />} />
            <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}


export default App;
