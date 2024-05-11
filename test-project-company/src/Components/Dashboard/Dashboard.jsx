import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './Dashboard.module.css';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Количество заявок',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  });

  useEffect(() => {
    fetch('http://localhost:3000/citizens')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Проверка на наличие данных в массиве граждан
        if (data && Array.isArray(data)) {
          const labels = data.map(citizen => citizen.name);
          const dataCounts = data.map(citizen => citizen.tickets.length);
          setChartData({
            labels: labels,
            datasets: [
              {
                label: 'Количество заявок',
                data: dataCounts,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
              }
            ]
          });
        } else {
          throw new Error('Data format is incorrect or data key is missing');
        }
      })
      .catch(error => {
        console.error('Error fetching or processing data:', error);
      });
  }, []);

  return (
    <div className="dashboard">
      <h1>Панель управления</h1>
      <Bar data={chartData} />
    </div>
  );
};

export default Dashboard;
