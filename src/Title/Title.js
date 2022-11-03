import './Title.scss';
import React, { useEffect } from 'react';
import 'animate.css';
import imgAvata from '../image/avata.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faTwitter, faFontAwesome)

function Title(props) {
    return (
        <div id='Title'>
            <div className='Intro animate__animated animate__fadeInTopLeft animate__slow 1.5s'>
                <h1 className='Intro_name'>Hi! I'am Dao</h1>
            </div>
            <div className='Intro_two animate__animated animate__fadeInBottomRight animate__slow 2s'>
                <h4 className='Intro_name_two'>Frontend developer</h4>
            </div>
            <div className='Intro_three animate__animated animate__backInDown animate__slow 2s'>
                <p className='Intro_name_three'>Self-improve website design and development skills, create quality products</p>
            </div>
            <div className='animate__animated animate__bounceIn animate__delay-2s animate__slow 5s' id='Title_content'><span>About Me</span></div>
            <div className='About'>
                <div className='img_Avt'><img className='img_Avata animate__animated animate__backInLeft animate__slow 3s' src={imgAvata} /></div>
                <div className='titleAbout'>
                    <p className='title_About animate__animated animate__backInRight animate__delay-1s animate__slow 3s'>
                        Web developer, with extensive knowledge and years of experience,
                        working in web technologies and UI / Ux design, delivering quality work.
                    </p>
                    <div className='Experience'>
                        <div className='Year_Experience animate__animated animate__fadeInBottomLeft animate__delay-3s animate__slow 3s'>
                            <span>1+</span>
                            <div className="text">
                                <p><p className='text1'>Year</p> Experience</p>
                            </div>
                        </div>
                        <div className='Complate_Potorasin animate__animated animate__bounceInDown animate__delay-3s animate__slow 3s'>
                            <span>10+</span>
                            <div className="text">
                                <p><p className='text1'>Complate</p>Potorasin</p>
                            </div>
                        </div>
                        <div className='Year_Achieved animate__animated animate__fadeInBottomRight  animate__delay-3s animate__slow 3s'>
                            <span>3+</span>
                            <div className="text">
                                <p><p className='text1'>Year</p>achieved</p>
                            </div>
                        </div>
                    </div>
                    <div className='downloadCV animate__animated animate__fadeIn animate__delay-5s animate__slow 3s'>
                        <button id='downloadCV'>
                            DownLoad CV
                            <FontAwesomeIcon id='download_icon' icon="fa-solid fa-download" />
                        </button>
                    </div>
                </div>
            </div>












        </div>
    )
}
export default Title;