import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import data from "../../data/report/MonthlyAmountSpent.json";
import * as S from "./styles/ReportMonthlyStyle";
import leftBtn from "../../assets/button/left.png";
import rightBtn from "../../assets/button/right.png";
import { TableHead } from "@mui/material";

Chart.register(...registerables);

const ReportMonthly = () => {
    // 현재 연도 설정
    const [currentYear, setCurrentYear] = useState<number>(2024);
    // 차트에 사용될 데이터 useState 정의
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
            label: '월간 지출',
            data: [],
            backgroundColor: '#ff8989'
        }
        ]
    });
    // 현재 연도의 데이터 불러오기
    useEffect(() => {
        const spentData: number[] = [];
        const labels: string[] = [];
        setCurrentYear(new Date().getFullYear())
        // 데이터 가져오기
        for (let i = 1; i <= 12; i++) {
        const month = `${currentYear}-${i.toString().padStart(2, "0")}`;
        labels.push(month);
        const dataForMonth = data.find((item) => item.date === month);
        spentData.push(dataForMonth ? dataForMonth.spent : 0);
        }
        // 가져온 데이터 useState로 저장
        setChartData((prevChartData) => ({
        ...prevChartData,
        labels,
        datasets: [{
            ...prevChartData.datasets[0],
            data: spentData
        }]
        }));
    }, []);
    // 그래프 x축 레이블
    const monthLabels = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
    // 연도 총 소비 액수 계산
    const totalSpent = chartData.datasets.reduce((total, dataset) => {
        return total + dataset.data.reduce((sum, value) => sum + value, 0);
    }, 0);

    return (
        <div>
        <S.TitleContainer>
            <S.TitleYear>{currentYear}</S.TitleYear>
            <S.TitleYearBtn src={leftBtn} />
            <S.TitleYearBtn src={rightBtn} />
        </S.TitleContainer>
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
                    callback: (value, index) => {
                        return monthLabels[index];
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
        <S.TableContainer>
            <thead>
                <tr style={{ backgroundColor: "#ededed" }}>
                <S.TableHeader>전체</S.TableHeader>
                {chartData.labels.map((value, index) => (
                    <S.TableHeader key={index} >{monthLabels[index]}</S.TableHeader>
                ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                <S.TableData>지출</S.TableData>
                {chartData.datasets[0].data.map((data, index) => (
                    <S.TableData key={index} >{data}</S.TableData>
                ))}
                </tr>
            </tbody>
        </S.TableContainer>
        <S.YearlyContainer>
            <div style={{ fontWeight: "bold" }}>{currentYear}</div>
            년 총 지출액
            <S.YearlySum>{totalSpent}</S.YearlySum>
            원
        </S.YearlyContainer>
        </div>
    );
};

export default ReportMonthly;
