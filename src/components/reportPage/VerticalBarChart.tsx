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

interface VerticalBarChartProps {
  lastMonthData: { amount: number; type: string }[];
  thisMonthData: { amount: number; type: string }[];
}

const VerticalBarChart: React.FC<VerticalBarChartProps> = ({
  lastMonthData = [],
  thisMonthData = [],
}) => {
  const labels = lastMonthData.length
    ? lastMonthData.map((item) => item.type)
    : thisMonthData.map((item) => item.type);

  const data = {
    labels,
    datasets: [
      {
        label: "이번 달",
        data: thisMonthData.map((item) => item.amount),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
      {
        label: "지난 달",
        data: lastMonthData.map((item) => item.amount),
        backgroundColor: "rgba(201, 203, 207, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default VerticalBarChart;
