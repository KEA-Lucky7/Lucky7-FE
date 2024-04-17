import { useEffect, useState } from "react";
import styled from "styled-components";
import HomeHeader from "./HomeHeader";
import MainTitle from "./MainTitle";
import HomePostList from "./HomePostList";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeHeaderContainer = styled(HomeHeader)`
  margin-bottom: 20px;
`;

const MainTitleContainer = styled(MainTitle)`
  margin-bottom: 20px;
`;

const HomePostListContainer = styled(HomePostList)`
  margin-bottom: 20px;
`;

const Home = () => {
    return (
        <HomeContainer>
            <HomeHeaderContainer />
            <MainTitleContainer />
            <HomePostListContainer />
        </HomeContainer>
    );
}

export default Home;
