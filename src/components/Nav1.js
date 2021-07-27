import {useState}  from 'react'
import Nav from './Nav'
import useWindowScrollPosition from "@rehooks/window-scroll-position";


function Nav1 () {
  const [change, setChange] = useState(false);
  const changePosition = 10;
  
  let position = useWindowScrollPosition();
  // position == { x: 0, y: 0 }

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  let style = {
    backgroundColor: change ? "white" : "transparent",
    transition: ".3s ease",
    height: "99px",
    position: "fixed",
    right: 0,
    left: 0,
    top: 0,
  };
 
 let style2 = {
   color: change ? "#464646" : "white", 
 }

 let navtext = {
   width: '100%',
   display: 'flex',
   margin: ' 0 0 0 auto',
 }
  
 return (
  <div style={style} class="nav-container">
    <div class='title1-container'>
      <a style={style2} class='nav-title' href='/'>Allie Keel </a>
      <a style={style2} class='nav-title1' href='/'>Actor</a>
    </div>
    <div style={navtext} class='nav-text'>
<div class="dropdown">
        <a style={style2} class='link' href='/services'>Services</a>
        <div class="dropdown-content">
          <div class="dropdown-content1">
            <div class='dropdown-column'>
              <a class='dropdown-main' href='/write-a-biography'>Photography</a>
              <a class='dropdown-main' href='/book-editing'>Book Editing</a> 
               <a class='dropdown-main' href='/corporate-reports'>Corporate Reports</a> 
               <a class='dropdown-main' href='/fim-scripts'>Film Scripts</a> 
               <a class='dropdown-main' href='/speeches'>Speeches</a> 
            </div>
            {/* <div class='dropdown-column'>
              <a class='dropdown-main' href='/web'>Web</a>
              <a class='dropdown-main' href='/webapp'>Web App</a>
              <a class='dropdown-main' href='/webdesign'>Web Design</a>
              <a class='dropdown-main' href='/pwa'>PWA</a>
            </div> */}
            {/* <div class='dropdown-column'>
              <a class='dropdown-main' href='/webapps'>Mobile Apps</a>
              </div> */}
            </div>
          </div>
        </div>
      {/* <a style={style2} class='link' href='/portfolio'>How We Work</a> */}
      <div class="dropdown">
        <a style={style2} class='link' href='/portfolio'>Insights</a>
        <div class="dropdown-content-mini">
          <div class="dropdown-content1">
            <div class='dropdown-column'>
              <a class='dropdown-main' href='/consulting'>Projects</a>
               <a class='dropdown-main' href='/enterprise'>Partners</a> 
               <a class='dropdown-main' href='/enterprise'>Gallery</a> 
            </div>
            </div>
          </div>
        </div>
      <div class="dropdown">
        <a style={style2} class='link' href='/about'>Company</a>
        <div class="dropdown-content-mini">
          <div class="dropdown-content1">
            <div class='dropdown-column'>
              <a class='dropdown-main' href='/about'>About </a>
              <a class='dropdown-main' href='/blog'>Blog</a> 
              <a class='dropdown-main' href='/contact'>Contact </a> 
            </div>
            </div>
          </div>
        </div>
      <a  class='contact11' href='/contact'>Contact</a>
      </div>
    <div>
      <Nav/>
    </div>
    </div>
);
}

export default Nav1;