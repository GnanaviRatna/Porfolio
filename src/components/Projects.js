import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaAddressCard} from "react-icons/fa";

import NavBar from "./navbar";
import bgImage from '../images/backGroundImg.jpg';

class Projects extends Component{
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
                        contentStyle={{ background: 'rgb(3,169,244,0.6)', color: '#e4e8e6' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(228, 232, 230,0.7)' }}
                        date="Jan 2020- May 2020"
                        iconStyle={{ background: 'rgb(3,169,244)', color: '#e4e8e6' }}
                        icon={<FaAddressCard/>}
                    >
                        <h3 className="vertical-timeline-element-title">Classification MNIST Dataset Using Neural Networks And Deep Learning</h3>
                        <h4 className="vertical-timeline-element-subtitle">Tempe, AZ</h4>
                        <p>
                        •	Utilized Neural Networks and Deep Learning architecture such as Convolution Neural Network (CNN) and K-means to classify Modified National Institute Of Standards and Technology (MNIST) dataset into 10 classes.
                        </p>
                        <p>
                        •	Analyzed the efficiency of supervised CNN and unsupervised K-means model on the Google Colab platform.
                        </p>
                        <p>
                        •	Modified accuracy of the CNN model using Regularization techniques and achieved an overall test accuracy of 99.29%.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(139, 195, 74,0.4)', color: '#e4e8e6' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(228, 232, 230,0.7)' }}
                        date="Jan 2020- May 2020"
                        iconStyle={{ background: 'rgb(139, 195, 74)', color: '#e4e8e6' }}
                        icon={<FaAddressCard />}
                    >
                        <h3 className="vertical-timeline-element-title">Question and Answering System (Natural Questions)</h3>
                        <h4 className="vertical-timeline-element-subtitle">Tempe, AZ</h4>
                        <p>
                        •	Worked on Natural Questions (NQ) project dataset containing real user questions issued to Google search and answers found from Wikipedia by annotators. 
                        </p>
                        <p>
                        •	Implemented NQ dataset for the training and evaluation of automatic question answering model systems.
                        </p>
                        <p>
                        •	Created a new preprocessing functionality in Python to transform NQ dataset to the squad data.
                        </p>
                        <p>
                        •	Took advantage of pre-trained Bidirectional Encoder Representations from Transformer (BERT) on squad data to extract a long answer from the passage and then extract short answer from the long answer.
                        </p>
                        <p>
                        •	Applied logit score evaluation of tokens on the dataset to improve the accuracy of short answers and long answers.
                        </p>
                    </VerticalTimelineElement>
                    
                    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 193, 7,0.7)', color: '#e4e8e6' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(228, 232, 230,0.7)' }}
                        date="May 2020- Aug 2020"
                        iconStyle={{ background: 'rgb(255, 193, 7)', color: '#e4e8e6' }}
                        icon={<FaAddressCard/>}
                    >
                        <h3 className="vertical-timeline-element-title">Watch It Movie Review App</h3>
                        <h4 className="vertical-timeline-element-subtitle">Tempe, AZ</h4>
                        <p>
                        •	Developed a full-stack application involving front-end technologies such as React Native Expo and back-end technologies such as Node.js, database as MongoDB on both IOS and Android platforms.
                        </p>
                        <p>
                        •	Programmed application to suggests movies to a user based on the similarity of mindset towards movies among his/her friends.

                        </p>
                        <p>
                        •	Designed this application UX/UI from scratch, all necessary components and screens using React native.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(230, 74, 25,0.7)', color: '#e4e8e6' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(230, 74, 25,0.7)' }}
                        date="Aug 2020- Dec 2020"
                        iconStyle={{ background: 'rgb(230, 74, 25)', color: '#e4e8e6' }}
                        icon={<FaAddressCard/>}
                    >
                        <h3 className="vertical-timeline-element-title">Bidirectional Search In Pacman World</h3>
                        <h4 className="vertical-timeline-element-subtitle">Tempe, AZ</h4>
                        <p>
                        •	Conducted an explorative study, analysis on a research paper which implemented Bi-directional search.
                        </p>
                        <p>
                        •	Worked on implementing Bi-directional search algorithm in Python script and modified the existing heuristics which resulted in reducing explored nodes from 606 to 212 in a complex maze.
                        </p>
                        <p>
                        •   Created different test cases by modifying layouts and also did a statistical analysis considering cost, explored nodes, time take to complete the maze as parameters on those modified layouts.
                        </p>
                        <p>
                        •	Implemented A* search, Depth First search, Breadth First search and Uniform Cost Search algorithms and conducted a comparative quantitative analysis in terms cost, explored nodes, time take to complete the maze.   
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(194, 24, 91,0.7)', color: '#e4e8e6' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(194, 24, 91,0.7))' }}
                        date="Aug 2020- Dec 2020"
                        iconStyle={{ background: 'rgb(194, 24, 91)', color: '#e4e8e6' }}
                        icon={<FaAddressCard/>}
                    >
                        <h3 className="vertical-timeline-element-title">Improving Privacy In Social Networks Using Machine Learning</h3>
                        <h4 className="vertical-timeline-element-subtitle">Tempe, AZ</h4>
                        <p>
                        •	Conducted an exploratory study on the research paper which dealt with contextual information sharing privacy risks faced by Online Social Network (OSN) users using machine learning techniques. 
                        </p>
                        <p>
                        •	Analysed various machine learning models such as Support Vector Machine (SVM), Naive Bayes, Bayes Net, Random Forest, RNN and Decision Table utilized in detecting privacy.  

                        </p>
                        <p>
                        •	As a group leader, I took the responsibility of sorting workload equally to individual team members, ensured seamless integration and communication between the group members and accomplished in completing every team task before deadline.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(123, 31, 162,0.7)', color: '#e4e8e6' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(123, 31, 162,0.7)' }}
                        date="Oct 2020"
                        iconStyle={{ background: 'rgb(123, 31, 162)', color: '#e4e8e6' }}
                        icon={<FaAddressCard/>}
                    >
                        <h3 className="vertical-timeline-element-title">Map-Reduce Equi-Join Implementation</h3>
                        <h4 className="vertical-timeline-element-subtitle">Tempe, AZ</h4>
                        <p>
                        •	Implemented Hadoop conceptual mapper function and reducer function from scratch in java.
                        </p>
                        <p>
                        •	Mapper functionality consists of reading HDFS text input and creating Key (as joining column) -Value (as whole row of the table).

                        </p>
                        <p>
                        •	Reducer reads list of values assigned to a key. Then sorts values into respective table and does cartesian join between rows.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>

            </div>
        )
    }
}
export default Projects