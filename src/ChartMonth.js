import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class ChartMonth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            chartData: {

                labels: ["2018-9-1", "2018-9-2", "2018-9-3", "2018-9-4", "2018-9-5", "2018-9-6", "2018-9-7", "2018-9-8",  "2018-9-9", "2018-9-10",
                         "2018-9-11", "2018-9-12", "2018-9-13", "2018-9-14", "2018-9-15", "2018-9-16", "2018-9-17", "2018-9-18", "2018-9-19", "2018-9-20",
                         "2018-9-21", "2018-9-22", "2018-9-23", "2018-9-24", "2018-9-25", "2018-9-26", "2018-9-27", "2018-9-28", "2018-9-29", "2018-9-30",],
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
                    pointHoverRadius: 6,
                    pointHoverBackgroundColor: "yellow",
                    pointHoverBorderColor: "brown",
                    pointHoverBorderWidth: 2,
                    pointRadius: 2,
                    pointHitRadius: 10,
                    // notice the gap in the data and the spanGaps: true
                    data: [5006, 53424, 15003, 23432, 56876, 77755, 40568,60453,55432,30455,
                           78545,20000, 15003, 23432, 56876, 77755, 40568,60453,55432,30455,
                           5006, 53424, 15003, 23432, 56876, 77755, 40568,60453,55432,30455,],
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
                scaleGridLineColor= "white"
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
                              },
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

export default ChartMonth;