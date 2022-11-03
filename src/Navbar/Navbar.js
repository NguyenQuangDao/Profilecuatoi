import './Navbar.scss';
import React, { useState } from 'react';
import 'animate.css';
import '../Share/App.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
// library.add(fas, faTwitter, faFontAwesome)

function Navbar(props) {
const {setDarkMode, darkMode} = props
  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className='My_blog'>
      <div className='Navbar'>
        <div className='Name_profile'>
          <a href="#Title">
            <div className='title_Nav'>
            <h2>My information</h2>
            </div>
          </a>
          <div className=' title_profile'>
            <input type='checkbox' name='openNav' id='openNav' />
            <label htmlFor="openNav" className='openNav'>
              <span></span>
              <span></span>
              <span></span>
            </label>
            <a href="#Title">
              <p className=' animate__animated animate__bounceIn animate__delay-1s animate__slow ' name='About' >About</p>
            </a>
            <a href="#Skill">
              <p className=' animate__animated animate__bounceIn animate__delay-1s animate__slow ' name='Skill' >Skill</p>
            </a>
            <a href="#MyProject">
              <p className=' animate__animated animate__bounceIn animate__delay-1s animate__slow ' name='Project' >Project</p>
            </a>
            <a href="#Timeline">
              <p className=' animate__animated animate__bounceIn animate__delay-1s animate__slow ' name='Services' >Timeline</p>
            </a>
            <a href="#Contactme">
              <p className=' animate__animated animate__bounceIn animate__delay-1s animate__slow ' name='Contactme' >Contactme</p>
            </a>
            {/* dark mode */}
            <div className='Dark_light'>
              <div className={darkMode ? "dark_mode" : "light_mode"}>
                <div className="container">
                  <span style={{ color: darkMode ? "grey" : "#F2B400" }}>☀︎</span>
                  <div className="switch-checkbox">
                    <label className="switch">
                      <input type="checkbox" onClick={handleDarkMode} />
                      <span className="slider round"> </span>
                    </label>
                  </div>
                  <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Navbar;
