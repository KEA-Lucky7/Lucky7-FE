import { useState } from "react";

import * as S from "../myblogPage/styles/MyblogCss";
import BackGroundImg from "../../assets/myblog/TitleBackGround.png";
import MyblogWidget from "./MyblogWidget";
import MyblogPostList from "./MyblogPostList";
import MyblogCategoryWidget from "./MyblogCategoryWidget";
export default function myblog() {
  let [backgroundImageUrl, setBackgroundImageUrl] =
    useState<string>(BackGroundImg);
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
          <MyblogPostList />
        </S.RightSection>
      </S.PostContainer>
    </S.MyBlogContainer>
  );
}
