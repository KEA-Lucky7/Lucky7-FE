import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const labels = ["식비", "교통", "여가", "교육", "금융"];

const data = {
  labels,
  datasets: [
    {
      label: "이번 달",
      data: [48000, 88000, 48000, 48000, 48000], // 현재 달
      backgroundColor: "rgba(75, 192, 192, 0.5)", // 초록색
    },
    {
      label: "지난 달",
      data: [125300, 155300, 11100, 25300, 31250], // 지난 달
      backgroundColor: "rgba(201, 203, 207, 0.5)", // 회색
    },
  ],
};

const ComparisonBarChart: React.FC = () => {
  return <Bar options={options} data={data} />;
};

export default ComparisonBarChart;
