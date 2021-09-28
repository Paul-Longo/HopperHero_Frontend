import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData:{
                labels: ['Clean', 'Power Clean', 'Clean and Jerk', 'Hang Clean', 'Hang Power Clean', 'Snatch', 'Power Snatch', 'Hang Snatch', 'Hang Power Snatch', 'Muscle Snatch'],
                datasets: [{
                        label: '1RM Graph',
                        data:[
                            225,
                            185,
                            305,
                            165,
                            165,
                            205,
                            185,
                            205,
                            165,
                            95
                        ],
                        backgroundColor:[
                            'rgba(255,99,132,0.6)',
                            'rgba(55,162,235,0.6)',
                            'rgba(255,206,86,0.6)',
                            'rgba(75,192,192,0.6)',
                            'rgba(153,102,255,0.6)',
                            'rgba(255,159,64,0.6)',
                            'rgba(255,99,132,0.6)',
                            'rgba(55,162,235,0.6)',
                            'rgba(255,206,86,0.6)',
                            'rgba(75,192,192,0.6)'
                        ],
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 3,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                    }]
                }
            }
        }

        static defaultProps = {
            displayTitle:true,
            displayLegend:true,
            legendPosition:'right'
        }
    
    render() { 
        return (
            <div className='graph'>
                <Bar
                data={this.state.chartData}
                width='35%'
                height='15%'
                options={{
                    title:{
                        display: this.props.displayTitle,
                        text: '1 Rep Max',
                        fontSize:25
                    },
                    legend: {
                        display: this.props.displayLegend,
                        position: this.props.legendPosition
                    }
                }}
            />
            </div>
        );
    }
}
 
export default Chart;

// const data = {
//     labels: ['Clean', 'Power Clean', 'Clean and Jerk', 'Hang Clean', 'Hang Power Clean', 'Snatch', 'Power Snatch', 'Hang Snatch', 'Hang Power Snatch', 'Muscle Snatch'],
//     datasets: [
//         {
//             label: '1RM Graph',
//             backgroundColor: 'rgba(255,99,132,0.2)',
//             borderColor: 'rgba(255,99,132,1)',
//             borderWidth: 3,
//             hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//             hoverBorderColor: 'rgba(255,99,132,1)',
//             data: []
//         }
//     ]
// };

// function Graph() {
//     return (
//         <div style={{ height: '600px', width: '800px' }}>
//             <Bar
//                 data={data}
//                 width={100}
//                 height={50}
//                 options={{
//                     maintainAspectRatio: false
//                 }}
//             />
//         </div>
//     );
// }
// export default Graph;