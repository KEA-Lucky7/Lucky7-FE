import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import data from "../../data/report/MonthlyAmountSpent.json";
import * as S from "./styles/ReportMonthlyStyle";

Chart.register(...registerables);

const ReportMonthly = () => {
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  }>({
    labels: [],
    datasets: [
      {
        label: 'Monthly Expenses',
        data: [],
        backgroundColor: '#aaaaaa'
      }
    ]
  });

  useEffect(() => {
    const labels: string[] = [];
    const spentData: number[] = [];
    const currentYear = new Date().getFullYear();

    for (let i = 1; i <= 12; i++) {
      const month = `${currentYear}-${i.toString().padStart(2, "0")}`;
      labels.push(month);
      const dataForMonth = data.find((item) => item.date === month);
      spentData.push(dataForMonth ? dataForMonth.spent : 0);
    }

    setChartData((prevChartData) => ({
      ...prevChartData,
      labels,
      datasets: [{
        ...prevChartData.datasets[0],
        data: spentData
      }]
    }));
  }, []);
   
  return (
    <S.ReportMonthlyContainer>
      <Bar
        data={chartData}
        options={{
          scales: {
            x: {
              title: {
                display: false,
                text: "Month",
              },
              grid: {
                display: false,
              },
              ticks: {
                callback: (value, index, values) => {
                    const customLabels = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
                    return customLabels[index];
                  }
              }
            },
            y: {
              title: {
                display: false,
                text: "Amount Spent",
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </S.ReportMonthlyContainer>
  );
};

export default ReportMonthly;
