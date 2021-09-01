import React, { Component } from 'react'

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
      <div class='contact-page-container'>
          <div class='contact3'>
            <h2>New York, New York</h2>
          <h2><a class='phone' href='tel:3475520753'>347-552-0753</a></h2>
            <h3><a class='phone' href="mailto:allison.peschel.keel@gmail.com">allison.peschel.keel@gmail.com</a></h3>
            </div>
        </div>
          
    )
  }
}