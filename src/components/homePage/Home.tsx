import { useEffect, useState } from "react";
import styled from "styled-components";
import HomeHeader from "./HomeHeader";
import MainTitle from "./MainTitle";
import HomePostList from "./HomePostList";
import Login from "./Login";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
`;

const HomeHeaderContainer = styled(HomeHeader)`
  height: 270px;
  border: 1px solid #ccc;
`;

const MainTitleContainer = styled(MainTitle)`
  margin-bottom: 20px;    
  border: 1px solid #ccc;
`;

const HomePostListContainer = styled(HomePostList)`
  margin-bottom: 20px;
  border: 1px solid #ccc;
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
