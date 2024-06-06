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
      // 더미 데이터 생성
      const dummyData: ReportData = {
        sameDayLastMonthReportList: [
          { amount: 296000, type: "식비" },
          { amount: 96700, type: "교통" },
          { amount: 145000, type: "여가" },
          { amount: 59900, type: "교육" },
          { amount: 130000, type: "생활" },
          { amount: 123000, type: "금융" },
        ],
        sameDayThisMonthReportList: [
          { amount: 306000, type: "식비" },
          { amount: 100700, type: "교통" },
          { amount: 115000, type: "여가" },
          { amount: 39900, type: "교육" },
          { amount: 100100, type: "생활" },
          { amount: 101000, type: "금융" },
        ],
        sameDayLastMonthAmount:
          296000 + 96700 + 145000 + 59900 + 130000 + 123000,
        sameDayThisMonthAmount:
          306000 + 100700 + 115000 + 39900 + 100100 + 101000,
      };

      try {
        // 실제 데이터 fetch를 대신하여 더미 데이터를 사용
        // const response = await axios.get<ReportData>(
        //   "https://vision-necktitude.shop/reports/compare"
        // );
        // setLastMonthData(response.data.sameDayLastMonthReportList);
        // setThisMonthData(response.data.sameDayThisMonthReportList);
        // setLastMonthTotal(response.data.sameDayLastMonthAmount);
        // setThisMonthTotal(response.data.sameDayThisMonthAmount);

        setLastMonthData(dummyData.sameDayLastMonthReportList);
        setThisMonthData(dummyData.sameDayThisMonthReportList);
        setLastMonthTotal(dummyData.sameDayLastMonthAmount);
        setThisMonthTotal(dummyData.sameDayThisMonthAmount);

        console.error("데이터를 불러왔습니다.");
        console.error(
          dummyData.sameDayLastMonthReportList,
          dummyData.sameDayThisMonthReportList,
          dummyData.sameDayLastMonthAmount,
          dummyData.sameDayThisMonthAmount
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
      <S.AIBox>
        <S.AIReporContainer>
          <S.AILogo>AI</S.AILogo>
          <S.AIContent>
            최정환님은 지난 달에 비해 이번 달 식비가 -% 증가했네요. 앞으로는 식비
            예산을 미리 설정하고 계획적으로 지출하면 좀 더 경제적으로 여유를
            가질 수 있을 거예요 ...
          </S.AIContent>
        </S.AIReporContainer>
      </S.AIBox>
    </S.Container>
  );
}
