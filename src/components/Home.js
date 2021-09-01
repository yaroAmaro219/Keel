import React, { Component } from 'react'

export default class Home1 extends Component {
  
  render() {
    return (
      <>
      <div class='home-container'>
          <div class='home-background'>
            
          </div>
        <div class='title-container'>
          {/* <h1 class='title'>Find Your Shot</h1> */}
          <div class='home-sub-content'>
          <h3 class='page-title1'>Professional Actor in New York & LA</h3>
          <div class='main-btn-container'>
          <a class="main-btn1" href='/insights'>View Work</a>
              <a class='main-btn2' href='/contact'>Contact</a>
              </div>
            </div>
        </div> 
        </div>
        <div class='home-content1'>
          <h1>Acting</h1>
          <div class='home-content1-1'>
          <p class='home-p'>Acting requires two things above all: bravery and honesty. But when the subject is yourself, sometimes you can’t see the forest for the trees. 

            </p>

            <p class='home-p'></p>
            </div>
        </div>
        </>
    )
  }
}