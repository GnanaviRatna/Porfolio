import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class PieChart extends Component {
  render() {
    const options = {
      legend: {
        labels: {
           fontColor: '#e4e8e6'
        }
     },
        responsive: true
      }
      
    const chartData = {
        labels: ['Artifical Intelligence', 'Natural Language Processing', 'Statistical Machine Learning','Distributed DataBase System','Foundation Of Algorithm','Information Assurance Systems'],
        datasets: [{
          data: [4, 4, 4, 4, 3.67, 4],
          backgroundColor: ["rgba(6,175,125,0.6)", "rgba(70,191,189,0.6)", "rgba(253,180,92,0.6)","rgba(247,37,6,0.6)", "rgba(150,59,157,0.6)","rgba(6,25,247,0.6)"]
        }]
      }
    return (
      <Doughnut data={chartData} options={options}></Doughnut>
    )
  }
}

export default PieChart