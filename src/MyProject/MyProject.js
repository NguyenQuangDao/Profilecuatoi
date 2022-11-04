import './MyProject.scss';
import React from 'react';
function MyProject(props) {
    const { darkLight } = props
    const handleNext = () => {
        const widthItem = document.querySelector('.item').offsetWidth;
        document.getElementById('FormList').scrollLeft += widthItem
    }
    const handlePrev = () => {
        const widthItem = document.querySelector('.item').offsetWidth;
        document.getElementById('FormList').scrollLeft -= widthItem
    }

    return (
        <div id="MyProject">
            <div className='MyProject'>
                <div className='content_title_MyProject'>
                    <span id='title_MyProject'>My Project</span>
                </div>
                <div className='FormList_Item'>
                    <div id='FormList'>
                        <div id='list'>
                            <a>
                                <div className='item'>
                                   <span className='title_Content'>Click me!</span> 
                                    
                                    <div className='content content__blur'>
                                        <div className='name_Content'>
                                            Project 1
                                        </div>
                                        <a href='' className='button_Content'><button>View project</button></a>
                                    </div>
                                </div>
                            </a>
                            <a>
                                <div className='item'>
                                   <span className='title_Content'>Click me!</span> 
                                    <div className='content content__blur'>
                                        <div className='name_Content'>
                                            Project 2
                                        </div>
                                        <a href='' className='button_Content'><button>View project</button></a>
                                    </div>
                                </div>
                            </a>
                            <a>
                                <div className='item'>
                                   <span className='title_Content'>Click me!</span> 
                                    <div className='content content__blur'>
                                        <div className='name_Content'>
                                            Project 3
                                        </div>
                                        <a href='' className='button_Content'><button>View project</button></a>
                                    </div>
                                </div>
                            </a>
                            <a>
                                <div className='item'>
                                   <span className='title_Content'>Click me!</span> 
                                    <div className='content content__blur'>
                                        <div className='name_Content'>
                                            Project 4
                                        </div>
                                        <a href='' className='button_Content'><button>View project</button></a>
                                    </div>
                                </div>
                            </a>
                            <a>
                                <div className='item'>
                                   <span className='title_Content'>Click me!</span> 
                                    <div className='content content__blur'>
                                        <div className='name_Content'>
                                            Project 5
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a>
                                <div className='item'>
                                   <span className='title_Content'>Click me!</span> 
                                    <div className='content content__blur'>
                                        <div className='name_Content'>
                                            Project 6
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a>
                                <div className='item'>
                                   <span className='title_Content'>Click me!</span> 
                                    <div className='content content__blur'>
                                        <div className='name_Content'>
                                            Project 7
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='direction'>
                    <button id='prev' onClick={handlePrev}> 	&#60; </button>
                    <button id='next' onClick={handleNext}> 	&#62; </button>
                </div>
            </div>
        </div>
    )
}
export default MyProject
