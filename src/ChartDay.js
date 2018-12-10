import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class ChartDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            chartData: {
                labels: ["Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur", "Sun"],
                datasets: [
                    {
                    label: "Sweden Biltema",
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
                    data: [5006, 5342, 1500, 2343, 5687, 7775, 6803],
                    fontColor: 'black',
                    spanGaps: true,
                  },
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

export default ChartDay;