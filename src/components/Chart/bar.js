import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['Clean', 'Power Clean', 'Clean and Jerk', 'Hang Clean', 'Hang Power Clean', 'Snatch', 'Power Snatch', 'Hang Snatch', 'Hang Power Snatch', 'Muscle Snatch'],
    datasets: [
        {
            label: '1RM Graph',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 3,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: []
        }
    ]
};

function Graph() {
    return (
        <div style={{ height: '600px', width: '800px' }}>
            <Bar
                data={data}
                width={100}
                height={50}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    );
}
export default Graph;