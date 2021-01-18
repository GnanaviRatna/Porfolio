import React, { Component } from 'react';

import {Bar} from 'react-chartjs-2';
import asu5 from '../images/asu5.jpg';

class BarChart extends Component {
    /*tooltips:{
                "enabled": false,
                "mode": "x",
                "intersect": false,
                custom:(hover)=>{
                    
                    
                        return (
                            <div>
                                <p style={fontStyle}>
                        Part Time Experience
                    </p>
                    <img src={asu5} alt="bg"  style={imageStyle} />
                    <p style={{position:"relative"}}>
                        Graduate Student Assistant
                    </p>
                            </div>
                        );
                    
                }
            }*/
            constructor(props) {
                super(props);
                this.state = {
                    tooltip : undefined
                };
            }
            showTooltip = (tooltip) => {
                if (tooltip.opacity === 0) {
                    this.setState({
                        tooltip : undefined
                    });
                } else {
                    this.setState({ 
                        tooltip
                    });
                }
             }
    render() {
        const fontStyle={
            paddingLeft:"2%",
            fontSize:22, 
            color:"#e4e8e6",
            fontFamily: 'unset'
        }
        const imageStyle={
            
            position:"absolute",
            width:"25%", 
            height:"25%", 
            float:"left", 
            WebkitBorderRadius:10,
        }
        const { tooltip } = this.state;
        let options = {
            "enabled": false,
            "mode": "x",
            "intersect": false,
            tooltips : {
                enabled : false,
                custom : this.showTooltip,
            }
        }
        let myTooltip;
         if (tooltip) {
            <div>
            <p style={fontStyle}>
                    Part Time Experience
            </p>
            <img src={asu5} alt="bg"  style={imageStyle} />
            <p style={{position:"relative"}}>
                Graduate Student Assistant
            </p>
            </div>
         }
        
      const chartData = {
        labels: ['EXL Service LTD', 'Aramark', 'Graduate Services Assitant'],
        datasets: [
            {
            backgroundColor: ["rgba(6,175,125,0.6)", "rgba(70,191,189,0.6)", "rgba(253,180,92,0.6)"],
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [17,3, 5]
            }
        ]
        }
      return (
        <>
        {myTooltip}
        <Bar data={chartData} options={options}
        />
        </>

        

      )
    }
  }
  
  export default BarChart
