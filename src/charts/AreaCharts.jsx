import React from 'react';
import { Line as LineChart } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

// Register necessary components for ChartJS including the Filler plugin
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const AreaCharts = () => {
  const devData = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Singapore',
        data: [25000, 27000, 29000, 32000, 35000],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        fill: true, 
      },
      {
        label: 'USA',
        data: [120000, 125000, 130000, 135000, 140000],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.4)',
        fill: true, 
      },
      {
        label: 'UK',
        data: [60000, 62000, 64000, 66000, 68000],
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.4)',
        fill: true, 
      },
      {
        label: 'Japan',
        data: [50000, 52000, 54000, 56000, 58000],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.4)',
        fill: true, 
      },
      {
        label: 'China',
        data: [80000, 83000, 86000, 89000, 92000],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.4)',
        fill: true, 
      },
    ],
  };

  // Data for the inflation rates
  const inflationData = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Singapore',
        data: [0.3, -0.2, -0.2, 1.0, 1.2], 
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        fill: true, 
      },
      {
        label: 'USA',
        data: [1.8, 1.2, 5.4, 8.0, 4.1], 
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.4)',
        fill: true, 
      },
      {
        label: 'UK',
        data: [1.8, 0.8, 2.5, 10.5, 6.4], 
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.4)',
        fill: true, 
      },
      {
        label: 'Japan',
        data: [0.5, 0.1, -0.8, 1.2, 2.1], 
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.4)',
        fill: true, 
      },
      {
        label: 'China',
        data: [2.9, 2.5, 0.9, 2.5, 1.9], 
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.4)',
        fill: true, 
      },
    ],
  };

  // Common options for charts
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
            weight: 'bold',
          },
          color: 'rgba(0, 0, 0, 0.7)',
        },
      },
      title: {
        display: true,
        font: {
          size: 16,
          weight: 'bold',
        },
        color: 'rgba(0, 0, 0, 0.8)',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}`;
          },
        },
      },
    },
    elements: {
      point: {
        radius: 5,
        hoverRadius: 7,
      },
      line: {
        tension: 0.3, // Adjust tension for a smoother curve
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
  };

  return (
    <div className="container mx-auto p-4">
      <div className="chart-container mx-auto mb-8" style={{ maxWidth: '90%', backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '16px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', position: 'relative', height: '300px' }}>
        <h2 className="text-2xl font-bold text-center mb-4">Inflation Rates by Country</h2>
        <LineChart data={inflationData} options={{ ...commonOptions, title: { text: 'Inflation Rates in Different Countries (2019-2023)' } }} />
      </div>

      <div className="chart-container mx-auto" style={{ maxWidth: '90%', backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '16px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', position: 'relative', height: '300px' }}>
        <h2 className="text-2xl font-bold text-center mb-4">Web Developers by Country</h2>
        <LineChart data={devData} options={{ ...commonOptions, title: { text: 'Number of Web Developers in Different Countries (2019-2023)' } }} />
      </div>
    </div>
  );
};

export default AreaCharts;
