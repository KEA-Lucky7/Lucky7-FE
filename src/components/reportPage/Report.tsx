import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import * as S from "./styles/ReportStyle";
import Titlebackground from "../../assets/myblog/Titlebackground.png";
import ReportAge from "./ReportAge";
import ReportCategory from "./ReportCategory";
import ReportMonthly from "./ReportMonthly";

export default function Report() {
  let [selectedMenu, setSelectedMenu] = useState<string>("monthly");
  //"monthly", "category", "age"

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
  };

  return (
    <div>
      <S.ReportTitle>레포트 보기</S.ReportTitle>
      <S.ReportMenuContainer>
        <S.ReportMenu
          selected={selectedMenu === "monthly"}
          onClick={() => handleMenuClick("monthly")}
        >
          월별 총 지출액 분석
        </S.ReportMenu>
        <S.ReportMenuSep>|</S.ReportMenuSep>
        <S.ReportMenu
          selected={selectedMenu === "category"}
          onClick={() => handleMenuClick("category")}
        >
          카테고리별 내역
        </S.ReportMenu>
        <S.ReportMenuSep>|</S.ReportMenuSep>
        <S.ReportMenu
          selected={selectedMenu === "age"}
          onClick={() => handleMenuClick("age")}
        >
          비슷한 나이대 비교 분석
        </S.ReportMenu>
      </S.ReportMenuContainer>
      <S.ReportContent>
        {selectedMenu === "monthly" && <ReportMonthly />}
        {selectedMenu === "category" && <ReportCategory />}
        {selectedMenu === "age" && <ReportAge />}
        {/* <Routes>
          <Route path="/monthly" element={<ReportMonthly />} />
          <Route path="/category" element={<ReportCategory />} />
          <Route path="/age" element={<ReportAge />} />
        </Routes> */}
      </S.ReportContent>
    </div>
  );
}
