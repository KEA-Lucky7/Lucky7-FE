import * as S from "./styles/ReportStyle";
import VerticalBarChart from "./VerticalBarChart";
import axios from "axios";
import { useState, useEffect } from "react";

interface ReportData {
  sameDayLastMonthReportList: { amount: number; type: string }[];
  sameDayThisMonthReportList: { amount: number; type: string }[];
  sameDayLastMonthAmount: number;
  sameDayThisMonthAmount: number;
}

export default function Report() {
  const [lastMonthData, setLastMonthData] = useState<
    { amount: number; type: string }[]
  >([]);
  const [thisMonthData, setThisMonthData] = useState<
    { amount: number; type: string }[]
  >([]);
  const [lastMonthTotal, setLastMonthTotal] = useState<number>(0);
  const [thisMonthTotal, setThisMonthTotal] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ReportData>(
          "https://vision-necktitude.shop/reports/compare"
        ); // 데이터를 받아올 URL
        setLastMonthData(response.data.sameDayLastMonthReportList);
        setThisMonthData(response.data.sameDayThisMonthReportList);
        setLastMonthTotal(response.data.sameDayLastMonthAmount);
        setThisMonthTotal(response.data.sameDayThisMonthAmount);
        console.error("데이터를 불러왔습니다.");
        console.error(
          lastMonthData,
          thisMonthData,
          lastMonthTotal,
          thisMonthTotal
        );
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다.", error);
      }
    };
    fetchData();
  }, []);

  return (
    <S.Container>
      <S.ReportTitle>소비 레포트</S.ReportTitle>
      <S.ReportContent>
        <S.ReportCompare>
          지난 달 보다 {lastMonthTotal - thisMonthTotal}원{" "}
          {lastMonthTotal - thisMonthTotal > 0 ? "더" : "덜"} 쓰는 중
        </S.ReportCompare>
        <VerticalBarChart
          lastMonthData={lastMonthData}
          thisMonthData={thisMonthData}
        />
      </S.ReportContent>
    </S.Container>
  );
}
