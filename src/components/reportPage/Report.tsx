import * as S from "./styles/ReportStyle";
import VerticalBarChart from "./VerticalBarChart";
import axios from "axios";
import { useState, useEffect } from "react";

interface ReportData {
  compare: number;
  average: number;
  aiReport: string;
}

export default function Report() {
  // const [compare, setCompare] = useState<number>(0);
  // const [average, setAverage] = useState<number>(0);
  // const [aiReport, setAiReport] = useState<string>("");
  const [compare, setCompare] = useState<number>(16400);
  const [average, setAverage] = useState<number>(431230);
  const [aiReport, setAiReport] = useState<string>(
    "지난 달에 비해 이번 달 식비가 28% 증가했네요. 앞으로는 식비 예산을 미리 설정하고 계획적으로 지출하면 좀 더 경제적으로 여유를 가질 수 있을 거예요."
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get<ReportData>('/api/reportData'); // 데이터를 받아올 URL
  //       setCompare(response.data.compare);
  //       setAverage(response.data.average);
  //       setAiReport(response.data.aiReport);
  //     } catch (error) {
  //       console.error('데이터를 불러오는데 실패했습니다.', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <S.Container>
      <S.ReportTitle>소비 레포트</S.ReportTitle>
      <S.ReportContent>
        <S.ReportCompare>
          지난 달 보다 {compare}원 {compare > 0 ? "더" : "덜"} 쓰는 중
        </S.ReportCompare>
        <VerticalBarChart />
        <S.ReportCompare>
          또래는 평균 {average}₩ 소비하고 있어요.
        </S.ReportCompare>
        <S.AIReport>{aiReport}</S.AIReport>
      </S.ReportContent>
    </S.Container>
  );
}
