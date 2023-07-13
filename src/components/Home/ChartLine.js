import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'];

export default function ChartLine() {
  const options = {
    maintainAspectRatio: false,
    repsonsive: true,
    animation: {
      duration: 0,
    },
    scales: {
      xAxes: [
        {
          ticks: { display: false },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: { display: false },
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
    },
    
    plugins: {
      legend: {
        display: false
      },           
    },
    tooltips: {
      enabled: false,
    },
  }
  const data = {
    labels,
    datasets: [
      {
        label: null,
        data: [9.5, 8.5, 7, 7.6, 6, 5.8, 5.3, 5, 4, 3, 2, 1],
        borderColor: '#8FE9D0',
        backgroundColor: '#8FE9D0',
      },
      {
        label: null,
        data: [9.5, 9, 7.3, 8.6, 7.6, 7, 5.8, 6.3, 5, 4, 3, 4],
        borderColor: '#FFCC21',
        backgroundColor: '#FFCC21',
        options: {        
          legend: {
            display: false
          }
        },
      },
    ],
  };
  return <Line options={options} data={data} height="316px" />;
}
