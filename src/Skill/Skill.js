import './Skill.scss';
import React, { useEffect } from 'react';
import 'animate.css';

function Skill(props) {
    return (
        <div id="Skill">
            <div className='Skill'>
                <div className='Skill_title'>
                    <p className='title animate__animated animate__bounceInUp animate__delay-0s animate__slow 2s'>Professional Skill</p>
                </div>
                <div className='wrapper'>
                    <div className='card '>
                        <div className='loading HtmlCss'></div>
                        <div className='loading_child'></div>
                        <div className='value_show'>60</div>
                        <span className='text'>HTML & CSS</span>
                    </div>
                    <div className='card '>
                        <div className='loading js'></div>
                        <div className='loading_child'></div>
                        <div className='value_show'>50</div>
                        <span className='text'>Javascript</span>
                    </div>
                    <div className='card '>
                        <div className='loading react'></div>
                        <div className='loading_child'></div>
                        <div className='value_show'>45</div>
                        <span className='text'>ReactJs</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skill;