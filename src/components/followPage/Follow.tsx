import { useEffect, useState } from "react";
import MainTitle from "./FollowTitle";
import HomePostList from "./FollowPostList";
import Header from "../myblogPage/myblogItems/Header";
// import * as S from "../homePage/styles/MainStyle";
import * as S from "../myblogPage/styles/MyblogPostCss";
import Titlebackground from "../../assets/myblog/Titlebackground.png";
import Editbutton from "../../assets/myblog/Editbutton.png";
import MyblogWidget from '../myblogPage/MyblogWidget';
import MyblogCategoryWidget from '../myblogPage/MyblogCategoryWidget'; 
import MyblogPostList from "../myblogPage/MyblogPostList";

const Follow = () => {

    return (
        // <S.HomeContainer>
        //     <Header />
        //     <S.MainContainer>
        //         <MainTitle />
        //         <div>BEST</div>
        //         <HomePostList />
        //     </S.MainContainer>
        // </S.HomeContainer>
        <S.PostContainer>
        <S.RightSection>
          <MyblogPostList />
        </S.RightSection>
      </S.PostContainer>
    );
}

export default Follow;