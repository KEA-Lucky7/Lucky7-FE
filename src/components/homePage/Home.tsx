import { useEffect, useState } from "react";
import styled from "styled-components";
import MainTitle from "./MainTitle";
import HomePostList from "./HomePostList";
import Header from "../myblogPage/myblogItems/Header";
import HomeSideMenu from "./HomeSideMenu";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  height: 100%;
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
    // 공지사항 팝업 띄우기 여부 useState
    const [showSideMenu, setShowSideMenu] = useState(false);

    return (
        <HomeContainer>
            <Header setShowSideMenu={setShowSideMenu} />
            <MainTitleContainer />
            <HomePostListContainer />
            {showSideMenu && (
                <HomeSideMenu />
            )}
        </HomeContainer>
    );
}

export default Home;
