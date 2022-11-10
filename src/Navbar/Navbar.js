import './Navbar.scss';
import React, { useState } from 'react';
import 'animate.css';
import '../Share/App.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faTwitter, faFontAwesome)

function Navbar(props) {
  const { setDarkMode, darkMode } = props;
  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    })
    CloseMenu()
  }

  const DropMenu = () => {
    document.querySelector('.title_profile').style.right = '0%';
    document.getElementById('icon_bar').style.display = 'none';
    document.getElementById('icon_close').style.display = 'block'

  }
  const CloseMenu = () => {
    document.querySelector('.title_profile').style.right = '-100%';
    document.getElementById('icon_bar').style.display = 'block';
    document.getElementById('icon_close').style.display = 'none'
  }
  return (
    <div className='My_blog'>
      <div className='Navbar'>
        <div className='Name_profile'>
          <div className='title_Nav' onClick={scrollTop}>
            <h2>My information</h2>
          </div>
          <div id='icon_bar' onClick={DropMenu}>
            <FontAwesomeIcon icon="fa-solid fa-bars" class='bar_icon' />
          </div>
          <div id='icon_close' onClick={CloseMenu}>
            <FontAwesomeIcon icon="fa-solid fa-xmark" class='close_icon' />
          </div>

          <div className=' title_profile'>
            <a href="#Title">
              <p className=' animate__animated animate__bounceIn animate__delay-1s animate__slow ' onClick={CloseMenu} name='About' >About</p>
            </a>
            <a href="#Skill">
              <p className=' animate__animated animate__bounceIn animate__delay-1s animate__slow ' onClick={CloseMenu} name='Skill' >Skill</p>
            </a>
            <a href="#MyProject">
              <p className=' animate__animated animate__bounceIn animate__delay-1s animate__slow ' onClick={CloseMenu} name='Project' >Project</p>
            </a>
            <a href="#Timeline">
              <p className=' animate__animated animate__bounceIn animate__delay-1s animate__slow ' onClick={CloseMenu} name='Services' >Timeline</p>
            </a>
            <a href="#Contactme">
              <p className=' animate__animated animate__bounceIn animate__delay-1s animate__slow ' onClick={CloseMenu} name='Contactme' >Contactme</p>
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
