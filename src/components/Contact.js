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
            <h2>New York, New York</h2>
          <h1><a class='phone' href='tel:3474006623'>347-552-0753</a></h1>
            <h3><a class='phone' href="mailto:allison.peschel.keel@gmail.com">allison.peschel.keel@gmail.com</a></h3>
            </div>
        </div>
          </div>
        </>
    )
  }
}