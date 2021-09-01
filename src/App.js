import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import cloud from './images/197-cloud-check.svg'
import stack from './images/047-stack.svg'
import Home from './components/Home'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Insights from './components/Insights'
import Services from './components/Services'
import About from './components/About'
import Reviews from './components/Reviews'
import Nav from './components/Nav1'
import './styles/Footer.css'
import './styles/Home.css'
import './styles/Nav.css'
import './styles/Contact.css'
import './styles/Insights.css'
import './styles/About.css'
import './styles/Services.css'
import './App.css'


class App extends Component {
  constructor() {
    super()
    
    this.state = {
      name: ''
    }
  }
  
  render() {
    return (
      <div>
        <Nav/>
        <Switch>
        <Route exact path="/" render={(props) => (
            <Home
            />
          )} />
           <Route exact path="/about" render={(props) => (
            <About
            />
          )} />
          <Route exact path="/contact" render={(props) => (
            <Contact
            />
          )} />
          <Route exact path="/gallery" render={(props) => (
            <Insights
            />
          )} />
          <Route exact path="/reviews" render={(props) => (
            <Reviews
            />
          )} />
           <Route exact path="/services" render={(props) => (
            <Services
            />
          )}/>
        </Switch>
        <div class='container'>
          <a class='mobile' href='/insights'><img class='img-nav' src={cloud}/>Gallery</a>
          <a class='mobile1' href='/contact'><img class='img-nav' src={stack}/>Contact</a>
        </div>
        <div class='footer-container'>
         <Footer />
      </div>
      </div>
    )
  }
}


export default App;