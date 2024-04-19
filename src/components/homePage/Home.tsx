import { useEffect, useState } from "react";
import MainTitle from "./MainTitle";
import HomePostList from "./HomePostList";
import * as S from "../homePage/styles/MainStyle";
import Quiz from "./quiz/Quiz"; 

const Home = () => {
    return (
        <S.HomeContainer>
            <Quiz />
            <S.MainContainer>
                <MainTitle />
                <div>BEST</div>
                <HomePostList />
            </S.MainContainer>
        </S.HomeContainer>
    );
}

export default Home;
