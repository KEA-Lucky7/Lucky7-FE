import React from 'react';
import Header from "./myblogItems/Header";
import * as S from "../myblogPage/styles/MyblogPostCss";
import Titlebackground from "../../assets/myblog/Titlebackground.png";
import Editbutton from "../../assets/myblog/Editbutton.png";
import MyblogWidget from './MyblogWidget';
import MyblogPostList from './MyblogPostList';
import MyblogCategoryWidget from './MyblogCategoryWidget'; 
export default function myblog() {
  return (
    <>
      <Header />
      <S.Picturecontainer>
        <S.TitleBox>
          나의 일상을 담은 일기장
          <img src={Editbutton} alt='수정버튼' style={{ width: "20px", height: "20px%" }} />
        </S.TitleBox>
        <S.SubTitleBox>my happy life</S.SubTitleBox>
        <img src={Titlebackground} alt='블로그배경사진' style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
    </>
  )
}
