import React from "react";
import './Timeline.scss';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function Timeline(props) {
const {darkMode} = props
    return (
        <div id="Timeline">
                <div className="content_Timeline">Timeline</div>
            <div className="content">
                <div className="title_Timeline">Future Plan</div>
            </div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2021 - 2025"
                    iconStyle={{ background: 'rgb(33, 150, 243)' }}
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: `${darkMode? '#fff' : '#000'}` }}
                >
                    <h4 className="vertical-timeline-element-title">Hanoi University of Mining and Geology</h4>
                    <p className="vertical-timeline-element-subtitle">- Team Frontend developer leader GDSC clubs
                        (<a href="https://developers.google.com/community/gdsc" >Google Developer Student Clubs</a>)
                    </p>
                    <p>- Completed my studies with a GPA &#62; 3.2</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2022 - 2025"
                    iconStyle={{ background: '#8B4202' }}
                    contentStyle={{ background: '#8B4202', color: `${darkMode? '#fff' : '#000'}` }}
                >
                    <h4 className="vertical-timeline-element-subtitle">Practice and work</h4>
                    <p> - Experiment to find the right job for you, learn, cultivate experience, skills.</p>
                    <p> - Expand relationship, improve yourself from professional recommendations opportunity to test ideas.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2025"
                    iconStyle={{ background: 'rgb(16, 204, 82)' }}
                    contentStyle={{ background: 'rgb(16, 204, 82)', color: `${darkMode? '#fff' : '#000'}` }}
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
                    className="vertical-timeline-element--education"
                    date=" > 2025"
                    iconStyle={{ background: 'rgb(233, 30, 99)'}}
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: `${darkMode? '#fff' : '#000'}` }}
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