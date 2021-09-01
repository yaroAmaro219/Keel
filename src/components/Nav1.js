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
          <div>
            <a  style={style2} class='link' href='/gallery'>Gallery</a>
          </div>
          <div>
            <a  style={style2} class='link' href='/about'>About</a>
          </div>  
      <a class='contact11' href='/contact'>Contact</a>
      </div>
    <div>
      <Nav/>
    </div>
    </div>
);
}

export default Nav1;