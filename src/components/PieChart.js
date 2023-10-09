import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";

const PieChartComponent = ({ transactions }) => {

  const calculateCategoryExpenses = () => {
    const pieChart = {};

    transactions.forEach((transaction) => {
      const category = transaction.selectCategory;

      if (pieChart[category]) {
        pieChart[category] += transaction.amount;
      } else {
        pieChart[category] = transaction.amount;
      }
    });

    return pieChart;
  };


  const pieChart = calculateCategoryExpenses();

  const data = {
    labels: transactions.map((transaction) => transaction.selectCategory),
    datasets: [
      {
        data: transactions.map((transaction) => transaction.amount),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  return (
    <div className="pie-chart">
      <Pie data={data} />
    </div>
  );
};

export default PieChartComponent;
