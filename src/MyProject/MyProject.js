import './MyProject.scss';
import React from 'react';
function MyProject() {
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
                                           Clone Youtobe
                                        </div>
                                        <a href='https://myyoutobe.netlify.app' className='button_Content'><button>View project</button></a>
                                    </div>
                                </div>
                            </a>
                            <a>
                                <div className='item'>
                                    <span className='title_Content'>Click me!</span>
                                    <div className='content content__blur'>
                                        <div className='name_Content'>
                                          Clone Facebook
                                        </div>
                                        <a href='https://github.com/NguyenQuangDao/clone-Facebook' className='button_Content'><button>View project</button></a>
                                    </div>
                                </div>
                            </a>
                            <a>
                                <div className='item'>
                                    <span className='title_Content'>Click me!</span>
                                    <div className='content content__blur'>
                                        <div className='name_Content'>
                                          Sử dụng AI nhận diện hành vi bạo lực học đường (team)
                                        </div>
                                        <a href='https://github.com/Google-Developer-Student-Club-HUMG/classguard' className='button_Content'><button>View project</button></a>
                                    </div>
                                </div>
                            </a>
                            <a>
                                <div className='item'>
                                    <span className='title_Content'>Click me!</span>
                                    <div className='content content__blur'>
                                        <div className='name_Content'>
                                        Dự án Demo Bệnh Viện
                                        </div>
                                        <a href='https://github.com/NguyenQuangDao/Hospital' className='button_Content'><button>View project</button></a>
                                    </div>
                                </div>
                            </a>
                            <a>
                                <div className='item'>
                                    <span className='title_Content'>Click me!</span>
                                    <div className='content content__blur'>
                                        <div className='name_Content'>
                                        Dự án quản lý đào tạo
                                        </div>
                                        <a href='https://github.com/NguyenQuangDao/QuanLyDaoTao' className='button_Content'><button>View project</button></a>
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
