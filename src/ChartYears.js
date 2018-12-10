import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class ChartYears extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            chartData: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                    {
                    label: "2018",
                    fill: true,
                    lineTension: 0.1,
                    borderWidth: 2,
                    backgroundColor: "rgba(16,137,32,0.5)",
                    borderColor: "red", // The main line color
                    borderCapStyle: 'square',
                    borderDash: [], // try [5, 15] for instance
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: "white",
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: "yellow",
                    pointHoverBorderColor: "brown",
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 10,
                    // notice the gap in the data and the spanGaps: true
                    data: [5006, 53424, 15003, 23432, 60453,
                           55432,30455,78545,40900],
                    fontColor: 'black',
                    spanGaps: true,
                  },
                 {
                    label: "2017",
                    fill: true,
                    lineTension: 0.1,
                    borderWidth: 2,
                    backgroundColor: "rgba(118,239,134,0.5)",
                    borderColor: "rgb(230,229,229)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "white",
                    pointBackgroundColor: "black",
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: "brown",
                    pointHoverBorderColor: "yellow",
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 10,
                    // notice the gap in the data and the spanGaps: false
                    data: [10345, 20977, 60676, 95342, 
                          64087, 78565, 90565, 60423,
                          70344, 40454, 70450,48576],
                    spanGaps: false,
                  }
              
                ]
                
        }
    }
}

    render() {
        return (
            <div className='chart'>
            <Line 
                data={this.state.chartData}
                height="100px"
                options={{
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true,
                            },
                            scaleLabel: {
                                 display: true,
                                 labelString: 'Number of Visitors',
                                 fontColor: 'white',
                                 FontFamily: 'Arial',
                              },
                              gridLines: {
                                display: true ,
                                color: "grey"
                              }
                        }],
                        xAxes: [{
                            gridLines: {
                              display: true ,
                              color: "grey"
                            },
                      }]                      
                    }  
                }}
            
            />
            </div>
        )
    }
}

export default ChartYears;