import React, { Component } from 'react'
import { Button, Form} from 'react-bootstrap';


export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      phone: '',
      email: '',
      company: '',
      comments: '',
    }
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  };

  render() {
    return (
      <>
      <div class='contact-page-container'>
        <div class='contact1'>
            <h2 class='contact-title'>Get in touch</h2>
            <br/>
            
           
          <div class='contact3'>
            <h2>Brooklyn, New York</h2>
          <h1><a class='phone' href='tel:3474006623'>347-400-6623</a></h1>
            <h3><a class='phone' href="mailto:convertedcamper@gmail.com">allisonkeel@gmail.com</a></h3>
            </div>
        </div>
       
         
          </div>
        </>
    )
  }
}