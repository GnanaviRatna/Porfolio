
import React, { Component } from "react";
import profilePic from "../images/Photo id.jpg";
import asu1 from '../images/asu1.jpg';

import LineChart from "./LineChart";
import PieChart from "./PieChart";
import NavBar from "./navbar";

class HomePage extends Component{
    
    render () {
        const profilePicStyle={
            padding:"3%",
            paddingLeft:"28%",
            position:"relative",
            width:"12%", 
            height:"25%", 
            float:"left", 
            WebkitBorderTopLeftRadius:10
        }
        const backGroundStyle={
            backgroundColor:"#0f1110", 
            position:'absolute', 
            flex:1, 
            width:"100%", 
            height:"100%"
        }
        const imageBackGroundStyle={
            position:'absolute', 
            width: "100%", 
            height:"40%",
            backgroundImage: {asu1}, 
            filter:'blur(6px)', 
            zIndex:0, 
            display:"inline-block"
        }
        const headerStyle={
            padding:"3%",
            position:"relative", 
            color:"white",
            fontSize:20
        }
        const borderLeftStyle={
            marginTop:"5%",
            marginLeft:"8%",
            position:'absolute',
            float:"left", 
            width:"25%",
            height:"5%",
            backgroundColor:'#1d1e1e',
            WebkitBorderRadius:10
        }
        const borderRightStyle={
            marginTop:"5%",
            marginRight:"8%",
            float:"right",
            position:'relative',
            width:"25%",
            height:"5%",
            backgroundColor:'#1d1e1e',
            WebkitBorderRadius:10
        }
        const gradeStyle={
            paddingLeft:"29%",
            paddingRight:"25%",
            fontSize:17, 
            color:"#e4e8e6",
            fontFamily: 'unset'
        }
        const graphLeftBorderStyle={
            marginTop:"10%",
            marginLeft:"2%",
            position:'absolute',
            width:"40%",
            height:"35%",
            padding:10,
            backgroundColor:'#1d1e1e', 
            WebkitBorderRadius:10,
            opacity:0.9,
            float:'left'
        }
        const graphRightBorderStyle={
            marginTop:"2%",
            marginLeft:"30%",
            marginRight:"2%",
            float:"right",
            position:'relative',
            width:"40%",
            height:"35%",
            backgroundColor:'#1d1e1e',
            opacity:0.9,
            WebkitBorderRadius:10
            
        }
        return (
            <div style={backGroundStyle}>
                <NavBar/>
                <img src={asu1} alt="bg"  style={imageBackGroundStyle} /> 
                <>
                    <div>
                    <img src={profilePic} alt=" "   style={profilePicStyle}/>
                    <h1  style={headerStyle}>Gnanavi Ratna Punjala <p>Masters In Computer Science</p> <p> Arizona State University</p><p>Tempe, AZ- 85281</p></h1>
                    </div>

                    <div style={borderLeftStyle}>
                        <p style={gradeStyle}>
                        Grade Report
                        </p> 
                    </div>
                    <div style={borderRightStyle}>
                        <p style={{ paddingLeft:"25%",color:"#e4e8e6"}}>
                        Subject Grades Report
                        </p> 
                    </div>
                </>
                <div style={graphLeftBorderStyle}>
                    <LineChart/>
                </div>  
                <div style={graphRightBorderStyle}>
                    <PieChart/>
                </div>
               
            </div>
        )
    }   
}
export default HomePage;