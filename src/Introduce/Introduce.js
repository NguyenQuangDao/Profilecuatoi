import './Introduce.scss';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'



function Introduce(props) {
    const {open, setOpen} =props
    
    return (
        <div id='Introduce'>
            <div id='button_bar'>
                <label htmlFor="openTaskBar" className='openTaskBar' onClick={() => { setOpen(!open) }}>
                   <div className='Arrow'>
                   <span className={`${open ? 'Left_Arrow' : 'Right_Arrow'}`}></span>
                    <span className={`${open ? 'Left_Arrow1' : 'Right_Arrow1'}`}></span>
                   </div>
                </label>
            </div>
            <div className={`${open ? 'Options_bar_active' : 'Options_bar_inActive'} Options_bar`}>
                <a href='https://www.facebook.com/profile.php?id=100025209167322'><FontAwesomeIcon icon={faFacebookSquare} className='Icon_img' id='faceBook' /></a>
                <a href='https://www.instagram.com/nguyenquangdao23/'><FontAwesomeIcon icon={faInstagramSquare} className='Icon_img' id='instaGram' /></a>
                <a href='https://github.com/NguyenQuangDao'><FontAwesomeIcon icon={faGithubSquare} className='Icon_img' id='gitHub' /></a>
            </div>
        </div>
    )
}
export default Introduce