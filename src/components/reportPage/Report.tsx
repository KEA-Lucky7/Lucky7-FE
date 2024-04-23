import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import * as S from "./styles/ReportStyle";
import Titlebackground from "../../assets/myblog/Titlebackground.png";
import MyblogWidget from "../myblogPage/MyblogWidget";
import MyblogPostCategory from "../myblogPage/MyblogCategoryWidget";
import ReportAge from "./ReportAge";
import ReportCategory from "./ReportCategory";
import ReportMonthly from "./ReportMonthly";

export default function Report() {
  let [backgroundImageUrl, setBackgroundImageUrl] = useState<string>(Titlebackground);
  let [selectedMenu, setSelectedMenu] = useState<string>("monthly");

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
  };

  return (
    <S.MyBlogContainer>
      <S.Picturecontainer imageUrl={backgroundImageUrl}>
        <S.TitleContainer>
          <S.TitleBox>나의 일상을 담은 일기장</S.TitleBox>
          <S.SubTitleBox>my happy life</S.SubTitleBox>
        </S.TitleContainer>
      </S.Picturecontainer>
      <S.PostContainer>
        <S.LeftSection>
          <MyblogWidget />
          <MyblogPostCategory />
        </S.LeftSection>
        <S.RightSection>
          <S.ReportTitle>
            레포트 보기
          </S.ReportTitle>
          <S.ReportMenuContainer>
            <S.ReportMenu to="/report/monthly" selected={selectedMenu === "monthly"} onClick={() => handleMenuClick("monthly")}>월별 총 지출액 분석</S.ReportMenu>
            <S.ReportMenuSep>|</S.ReportMenuSep>
            <S.ReportMenu to="/report/category" selected={selectedMenu === "category"} onClick={() => handleMenuClick("category")}>카테고리별 내역</S.ReportMenu>
            <S.ReportMenuSep>|</S.ReportMenuSep>
            <S.ReportMenu to="/report/age" selected={selectedMenu === "age"} onClick={() => handleMenuClick("age")}>비슷한 나이대 비교 분석</S.ReportMenu>
          </S.ReportMenuContainer>
          <S.ReportContent>
            <Routes>
            <Route path="/monthly" element={<ReportMonthly />} />
            <Route path="/category" element={<ReportCategory />} />
            <Route path="/age" element={<ReportAge />} />
            </Routes>
          </S.ReportContent>
        </S.RightSection>
      </S.PostContainer>
    </S.MyBlogContainer>
  );
}
