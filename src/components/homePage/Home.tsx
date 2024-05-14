import MainTitle from "./MainTitle";
import HomePostList from "./HomePostList";
import * as S from "../homePage/styles/MainStyle";

const Home = () => {

  return (
    <S.HomeContainer>
      <S.MainContainer>
        <MainTitle />
        <HomePostList />
      </S.MainContainer>
    </S.HomeContainer>
  );
};

export default Home;
