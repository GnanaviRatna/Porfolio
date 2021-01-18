import React, { Component } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import NavBar from "./navbar";
import bgImage from '../images/backGroundImg.jpg';
import LineChart from "./LineChart";
import PieChart from "./PieChart";

class AcademicsPage extends Component{
    render(){
        const backGroundStyle={ 
            position:'fixed', 
            flex:1, 
            width:"100%", 
            height:"100%",
            backgroundSize:"cover"

        }
        const graphLeftBorderStyle={
            //marginTop:"10%",
            //marginLeft:"2%",
            position:'relative',
            width:"50%",
            height:"45%",
            //padding:10,
            //backgroundColor:'#1d1e1e', 
            WebkitBorderRadius:10,
            opacity:1,
            //float:'left'
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
              <div style={{position:"relative",display: "flex", alignItems: "center",justifyContent: "center",backgroundSize:"cover", marginTop:"10%" }}>
              
              <div style={graphLeftBorderStyle}>
                  <p style={{color:"#e4e8e6",fontSize:25,textAlign:"center", fontFamily:"cursive"}}>Grade Report</p>
                    <LineChart/>
                </div>  
                
              </div>
            </div>
            <div >
              <div style={{position:"relative",display: "flex", alignItems: "center",justifyContent: "center",backgroundSize:"cover", marginTop:"10%" }}>
              
              <div style={graphLeftBorderStyle}>
              <p style={{color:"#e4e8e6",fontSize:25,textAlign:"center", fontFamily:"cursive"}}>Subject vise Grade Report</p>
                    <PieChart/>
                </div>  
                
              </div>
            </div>
            
          </Slide>
            </div>
    
        )
    }
}
export default AcademicsPage;