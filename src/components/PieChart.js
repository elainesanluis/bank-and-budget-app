import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";

const PieChartComponent = ({ transactions }) => {
  const calculateCategoryExpenses = () => {
    const pieChartData = {};

    transactions.forEach((transaction) => {
      const category = transaction.selectCategory;

      if (pieChartData[category]) {
        pieChartData[category] += transaction.amount;
      } else {
        pieChartData[category] = transaction.amount;
      }
    });

    return pieChartData;
  };

  const pieChartData = calculateCategoryExpenses();

  const categoryLabels = Object.keys(pieChartData);
  const categoryAmounts = Object.values(pieChartData);

  const data = {
    labels: categoryLabels,
    datasets: [
      {
        data: categoryAmounts,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(53, 152, 250, 0.6)',
          'rgba(103, 100, 95, 0.6)',
          'rgba(83, 160, 55, 0.6)',
          // Add more colors if needed
        ],
      },
    ],
  };

  return (
    <div className='pie-chart-container'>
    <div className="pie-chart">
      <Pie data={data} />
    </div>
    </div>
  );
};

export default PieChartComponent;
