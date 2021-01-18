import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'


class LineChart extends Component {
  render() {
    const chartData = {
        labels: ['0th semester', '1st semester', '2nd semester'],
        datasets: [{
          display:false,
          data: [0, 3.89, 4],
          fill:false,
          borderColor: "rgba(6,175,125,1)"
        }]
        
      }
    const options= {
      legend: {
          display: false,
          
      },
        scales: {
          xAxes: [{ 
              gridLines: {
                
                zeroLineColor: "#e4e8e6"
              },
              ticks: {
                fontColor: "#e4e8e6", // this here
                fontSize:14
              },
          }],
          yAxes: [{
              
              gridLines: {
                  
                zeroLineColor: "#e4e8e6"
              },
              ticks: {
                fontColor: "#e4e8e6", // this here
                fontSize:14
              }
          }],
      }

      }
  
    return (
      <Line data={chartData} width={"40%"} height={"20%"} options={options}></Line>
    )
    }
  
}


export default LineChart