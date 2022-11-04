import React from "react";
import './Timeline.scss';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function Timeline(props) {
    const { darkMode } = props
    return (
        <div id="Timeline">
            <div className="content_Timeline">Timeline</div>
            <div className="content">
                <div className="title_Timeline">Future Plan</div>
            </div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work work1"
                    contentArrowStyle={{ borderRight: '7px solid #593E67' }}
                    date="2021 - 2025"
                    iconStyle={{ background: '#593E67' }}
                    contentStyle={{ background: '#593E67', color: `${darkMode ? '#fff' : '#000'}` }}
                >
                    <h4 className="vertical-timeline-element-title">Hanoi University of Mining and Geology</h4>
                    <p className="vertical-timeline-element-subtitle">- Team Frontend developer leader GDSC clubs
                        (<a href="https://developers.google.com/community/gdsc" >Google Developer Student Clubs</a>)
                    </p>
                    <p>- Completed my studies with a GPA &#62; 3.2</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work work2"
                    date="2022 - 2025"
                    contentArrowStyle={{ borderRight: '7px solid #84495F' }}
                    iconStyle={{ background: '#84495F' }}
                    contentStyle={{ background: '#84495F', color: `${darkMode ? '#fff' : '#000'}` }}
                >
                    <h4 className="vertical-timeline-element-subtitle">Practice and work</h4>
                    <p> - Experiment to find the right job for you, learn, cultivate experience, skills.</p>
                    <p> - Expand relationship, improve yourself from professional recommendations opportunity to test ideas.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education education1"
                    date="2025"
                    contentArrowStyle={{ borderRight: '7px solid #B85B56' }}
                    iconStyle={{ background: '#B85B56' }}
                    contentStyle={{ background: '#B85B56', color: `${darkMode ? '#fff' : '#000'}` }}
                >
                    <h4 className="vertical-timeline-element-subtitle">Become a Freelancer</h4>
                    <h5>Because I want:</h5>
                    <p>
                        - Flexible
                    </p>
                    <p>
                        - Actively control work
                    </p>
                    <p>
                        - Improve skills
                    </p>
                    <p>
                        - Working with international customers
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education education2"
                    date=" > 2025"
                    contentArrowStyle={{ borderRight: '7px solid #DE741C' }}
                    iconStyle={{ background: '#DE741C' }}
                    contentStyle={{ background: '#DE741C', color: `${darkMode ? '#fff' : '#000'}` }}
                >
                    <h4 className="vertical-timeline-element-title">Senior Developer</h4>
                    <p>
                        - Becoming a Junior developer was my dream as a student
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}
export default Timeline