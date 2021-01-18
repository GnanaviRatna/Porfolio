import React, { Component } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import NavBar from "./navbar";
import bgImage from '../images/backGroundImg.jpg';


class HomePage extends Component{
    render(){
        const backGroundStyle={ 
            position:'fixed', 
            flex:1, 
            width:"100%", 
            height:"100%",
            backgroundSize:"cover"

        }
        /*
        const properties = {
            duration: 5000,
            transitionDuration: 1000,
            infinite: true,
            indicators: true,
            arrows: false
          }
        //backgroundColor:"#202020"
        */
        return(
            <div>
                <img src={bgImage} alt="bg"  style={backGroundStyle} />
                <NavBar/>

          <Slide easing="ease">
            <div >
              <div style={{position:"relative",display: "flex", alignItems: "center",justifyContent: "center",backgroundSize:"cover", marginTop:"15%" }}>
              
                <div >
                
                <p style={{color:"#e4e8e6",fontFamily: 'cursive', fontSize:40,whiteSpace:"pre-wrap"}}> {" I'm Gnanavi Ratna Punjala "}</p>
                <p style={{color:"#e4e8e6",fontFamily: 'unset', fontSize:20, whiteSpace:"pre-wrap", textAlign:"center"}}> {"Front-end Developer    UX-UI Developer    Data Analyst"}</p>

                    </div>
                
              </div>
            </div>
            <div style={{position:"relative",display: "flex", alignItems: "center",justifyContent: "center",backgroundSize:"cover", marginTop:"0%" }}>
              <div >
              <p style={{color:"#e4e8e6",fontFamily: 'cursive', fontSize:40,textAlign:"center"}}> {" About Me"}</p>
                <div style={{display: 'flex', justifyContent: 'center', position:"relative",height:"auto", alignContent:"center", marginLeft:"auto", marginRight:"auto",opacity:0.7,width:"70%", WebkitBorderRadius:"10px", border:"2px solid rgb(212, 212, 212)"}}>
                <p style={{color:"#F1F5F3",fontFamily: 'unset', fontSize:20, whiteSpace:"pre-wrap"}}> {" I am someone who would endlessly thrive for good knowledge & learn to advance as a better individual.\n\n  I acquired a bachelor's degree from an elite institution i.e., Maulana Azad National Institute of Technology-Bhopal (MANIT, Bhopal) in Electronics and Communication department. Apart from my curriculum I always wanted to explore different horizons especially the Computer Science field. Based on my interest, I have done certification in Java issued by Oracle, Cloud-Computing issued by AWS, and DBMS issued by Oracle.\n\n  Utilizing this knowledge I worked as a full-time Analyst in the Data Analyst & Data Science Team of EXL Service LTD, Bangalore, India. Working with EXL for more than a year has sharpened my analytical and coding skills especially in Deep learning and Machine Learning fields. Desiring to gain deeper insight into the Computer Science field, I am pursing my master's in Computer Science department at Arizona State University.\n\n  Alongside I love traveling, swimming and studying. I am very comfortable connecting with new circles and adjusting in an environment I'm unfamiliar with. I also enjoy reading novels which are adventures, fun and related to fantasy genre."}</p>
                    </div>
                
              </div>
            </div>
            
          </Slide>
            </div>
    
        )
    }
}
export default HomePage;
