import * as S from "./styles/ReportStyle";
import VerticalBarChart from "./VerticalBarChart";
import axios from "axios";
import { useState, useEffect } from "react";
import { useStore } from "../homePage/login/state";

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

  // useStore 훅을 사용하여 accessToken을 가져옵니다.
  const { accessToken } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Access Token:", accessToken); // 토큰 확인

        const response = await axios.get<ReportData>(
          "https://vision-necktitude.shop/reports/compare",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`, // Bearer 추가
            },
          }
        );
        setLastMonthData(response.data.sameDayLastMonthReportList);
        setThisMonthData(response.data.sameDayThisMonthReportList);
        setLastMonthTotal(response.data.sameDayLastMonthAmount);
        setThisMonthTotal(response.data.sameDayThisMonthAmount);

        console.log("데이터를 불러왔습니다.");
        console.log(
          response.data.sameDayLastMonthReportList,
          response.data.sameDayThisMonthReportList,
          response.data.sameDayLastMonthAmount,
          response.data.sameDayThisMonthAmount
        );
      } catch (error: any) {
        if (error.response) {
          // 서버 응답이 있는 경우
          console.error("Error response data:", error.response.data);
          console.error("Error status:", error.response.status);
          console.error("Error headers:", error.response.headers);
        } else if (error.request) {
          // 요청이 만들어졌으나 응답이 없는 경우
          console.error("Error request:", error.request);
        } else {
          // 요청을 설정하는 중에 에러가 발생한 경우
          console.error("Error message:", error.message);
        }
        console.error("Error config:", error.config);
      }
    };

    fetchData();
  }, [accessToken]);

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
      {/* <S.AIBox>
        <S.AIReporContainer>
          <S.AILogo>AI</S.AILogo>
          <S.AIContent>
            지난 달에 비해 이번 달 여가 관련 지출이 약 48.28% 증가했네요.
            앞으로는 여가 예산을 미리 설정하고 계획적으로 지출하면 좀 더
            경제적으로 여유를 가질 수 있을 거예요.
          </S.AIContent>
        </S.AIReporContainer>
      </S.AIBox> */}
    </S.Container>
  );
}
