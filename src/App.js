import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import cloud from './images/197-cloud-check.svg'
import stack from './images/047-stack.svg'
import Home from './components/Home'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Insights from './components/Insights'
import Services from './components/Services'
import About from './components/About'
import Nav from './components/Nav1'
import './styles/Footer.css'
import './styles/Home.css'
import './styles/Nav.css'
import './styles/Contact.css'
import './styles/Insights.css'
import './styles/About.css'
import './App.css'

// React Transition Group
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group'

function App () {
 
    return (
      <div>
        <Nav/>
        <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={500}
            classNames='fade'>
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
           <Route exact path="/services" render={(props) => (
            <Services
            />
          )}/>
        </Switch>
        </CSSTransition>
        </TransitionGroup>
        )}/>
        <div class='container'>
          <a class='mobile' href='/gallery'><img class='img-nav' src={cloud}/>Gallery</a>
          <a class='mobile1' href='/contact'><img class='img-nav' src={stack}/>Contact</a>
        </div>
        <div class='footer-container'>
         <Footer />
      </div>
    </div>
    )
  }


export default withRouter(App);