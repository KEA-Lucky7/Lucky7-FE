import { useState } from "react";

import * as S from "./styles/ReportStyle";
import Titlebackground from "../../assets/myblog/Titlebackground.png";
import MyblogWidget from "../myblogPage/MyblogWidget";
import MyblogPostCategory from "../myblogPage/MyblogCategoryWidget";

export default function Report() {
  let [backgroundImageUrl, setBackgroundImageUrl] =
    useState<string>(Titlebackground);
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
            
          </S.ReportTitle>
        </S.RightSection>
      </S.PostContainer>
    </S.MyBlogContainer>
  );
}
