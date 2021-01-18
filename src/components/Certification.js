import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BsFillAwardFill } from "react-icons/bs";

import NavBar from "./navbar";
import bgImage from '../images/backGroundImg.jpg';

class Certification extends Component{
    render(){
        const backGroundStyle={ 
            position:'fixed', 
            flex:1, 
            width:"100%", 
            height:"100%",
            backgroundSize:"cover"

        }
        return(
            <div >
                <img src={bgImage} alt="bg"  style={backGroundStyle} />
                <NavBar/>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(3,169,244,0.6)', color: '#e4e8e6' , width:"46%"}}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(228, 232, 230,0.7)' }}
                        date="Mar 2017- No Expiration Date"
                        iconStyle={{ background: 'rgb(3,169,244)', color: '#e4e8e6' }}
                        icon={<BsFillAwardFill/>}
                    >
                        
                        <h3 className="vertical-timeline-element-title">1Z0-808JAVA SE 8 PROGRAMMER-I </h3>
                        <h4 className="vertical-timeline-element-subtitle">Issued By: ORACLE</h4>
                        <p> Credential Id: 313565088 </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(139, 195, 74,0.4)', color: '#e4e8e6' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(228, 232, 230,0.7)' }}
                        date="May 2017- No Expiration Date"
                        iconStyle={{ background: 'rgb(139, 195, 74)', color: '#e4e8e6' }}
                        icon={<BsFillAwardFill />}
                    >
                        <h3 className="vertical-timeline-element-title">1Z0-051 ORACLE DATABASE 11g FUNDAMENTALS -I</h3>
                        <h4 className="vertical-timeline-element-subtitle">Issued By: ORACLE</h4>
                        <p> Credential Id: 319213561</p>
                        
                    </VerticalTimelineElement>
                    
                    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 193, 7,0.7)', color: '#e4e8e6' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(228, 232, 230,0.7)' }}
                        date="Sep 2017- Sep 2019"
                        iconStyle={{ background: 'rgb(255, 193, 7)', color: '#e4e8e6' }}
                        icon={<BsFillAwardFill />}
                    >
                        <h3 className="vertical-timeline-element-title">AWS Certified Developer - Associate(DVA)</h3>
                        <h4 className="vertical-timeline-element-subtitle">Issued By : Amazon AWS</h4>
                        <p> Credential Id: VS272X12KE4QQ1SH</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(230, 74, 25,0.7)', color: '#e4e8e6' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(228, 232, 230,0.7)' }}
                        date="Jan 2020- No Expiration Date"
                        iconStyle={{ background: 'rgb(230, 74, 25)', color: '#e4e8e6' }}
                        icon={<BsFillAwardFill />}
                    >
                        <h3 className="vertical-timeline-element-title"> Data Structures And Algorithms</h3>
                        <h4 className="vertical-timeline-element-subtitle">Issued By: Arizona State University</h4>
                        
                        
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(194, 24, 91,0.7)', color: '#e4e8e6' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(228, 232, 230,0.7)' }}
                        date="Feb 2020- No Expiration Date"
                        iconStyle={{ background: 'rgb(194, 24, 91)', color: '#e4e8e6' }}
                        icon={<BsFillAwardFill />}
                    >
                        <h3 className="vertical-timeline-element-title">Principles Of Programming Language Certificate</h3>
                        <h4 className="vertical-timeline-element-subtitle">Issued By: Arizona State University</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(123, 31, 162,0.7)', color: '#e4e8e6' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(228, 232, 230,0.7)' }}
                        date="Apr 2020- No Expiration Date"
                        iconStyle={{ background: 'rgb(123, 31, 162)', color: '#e4e8e6' }}
                        icon={<BsFillAwardFill />}
                    >
                        <h3 className="vertical-timeline-element-title">Operating Systems Certificate</h3>
                        <h4 className="vertical-timeline-element-subtitle">Issued By: Arizona State University</h4>
                    </VerticalTimelineElement>
                </VerticalTimeline>

            </div>
        )
    }
}
export default Certification