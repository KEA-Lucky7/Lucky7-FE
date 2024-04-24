import { useState } from "react";

import * as S from "../myblogPage/styles/MyblogCss";
import Titlebackground from "../../assets/myblog/Titlebackground.png";
import MyblogWidget from "./MyblogWidget";
import AccountBook from "./AccountBook";
import MyblogPostList from "./MyblogPostList";
import MyblogCategoryWidget from "./MyblogCategoryWidget";

export default function myblog() {
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
          <MyblogCategoryWidget />
        </S.LeftSection>
        <S.RightSection>
          {/* <MyblogPostList /> */}
          <AccountBook />
        </S.RightSection>
      </S.PostContainer>
    </S.MyBlogContainer>
  );
}
