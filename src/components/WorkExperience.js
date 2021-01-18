import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ImUserTie } from "react-icons/im";

import NavBar from "./navbar";
import bgImage from '../images/backGroundImg.jpg';

class WorkExperience extends Component{
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
                        date="Jul 2018 – Dec 2019"
                        iconStyle={{ background: 'rgb(3,169,244)', color: '#e4e8e6' }}
                        icon={<ImUserTie />}
                    >
                        <h3 className="vertical-timeline-element-title">Business Analyst</h3>
                        <h4 className="vertical-timeline-element-subtitle">Karnataka, India</h4>
                        <p>
                        •	Worked on ‘Topic Modelling’ project involving building python algorithms on sentiment analysis, text summarization, multi-text classification on social media data extracted from various platforms like ‘Facebook’, ’Twitter’, ’Instagram’ using API calls.
                        </p>
                        <p>
                        •	Utilized various deep learning techniques such as ‘Recursive Neural Networks’(RNN), ‘Autoencoder’ to classify positive and negative sentiment of text in sentiment analysis module.
                        </p>
                        <p>
                        •	Implemented unsupervised ML techniques like K-means for clustering tweets to identify the topics and summarize the contents.
                        </p>
                        <p>

                        •	Incorporated conversation attribute tagging algorithms on the real-time social media data using Python on Anaconda and Jupyter Notebook software platforms. 
                        </p>
                        <p>
                        •	As a Data visualizer, developed a web page using HTML, CSS to visualize weekly quantitative output of annotated social media data.
                        </p>
                        <p>
                        •	Aided in delivering important content-related feedback to the creative team.
                        </p>
                        <p>
                        •	Gained good understanding of Relational Database Management System (RDBMS) concepts and became a skillful person in writing complex SQL queries.
                        </p>
                        <p>
                        •	Migrated data from redshift database on dB visualizer platform to AWS cloud database using Qubole platform.

                        </p>
                    </VerticalTimelineElement>
                    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(139, 195, 74,0.4)', color: '#e4e8e6' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(228, 232, 230,0.7)' }}
                        date="Jan 2020 – Mar 2020"
                        iconStyle={{ background: 'rgb(139, 195, 74)', color: '#e4e8e6' }}
                        icon={<ImUserTie />}
                    >
                        <h3 className="vertical-timeline-element-title">Marketing Assistant</h3>
                        <h4 className="vertical-timeline-element-subtitle">Tempe, AZ</h4>
                        <p>
                        •	The responsibilities I held while working as Marketing Assistant were to perform customer service duties such as answering queries to the customers about meal plans.
                        </p>
                        <p>
                        •	Assisting customers in purchasing meal plans.
                        </p>
                        <p>
                        •	And suggesting the best meal plan that fulfils their requirements.
                        </p>
                    </VerticalTimelineElement>
                    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 193, 7,0.7)', color: '#e4e8e6' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(228, 232, 230,0.7)' }}
                        date="Aug 2020 - present"
                        iconStyle={{ background: 'rgb(255, 193, 7)', color: '#e4e8e6' }}
                        icon={<ImUserTie />}
                    >
                        <h3 className="vertical-timeline-element-title">Graduate Services Assistant</h3>
                        <h4 className="vertical-timeline-element-subtitle">Tempe, AZ</h4>
                        <p>
                        •	I am currently working as a "Graduate Service Assistant" (GSA) under Professor Baral for CSE 576 Topics/Natural Language Procs course and also under Professor Subhasish Das for CSE 110 Principles Of Programming course .
                        </p>
                        <p>
                        •    My responsibilities as GSA is to assist the professor in courses-work, grading, and in deciding project rubrics.

                        </p>
                        <p>
                        •    I also hold office hours for assisting students in projects and assignments.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>

            </div>
        )
    }
}
export default WorkExperience