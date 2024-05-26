import MainTitle from "./MainTitle";
import HomePostList from "./HomePostList";
import * as S from "../homePage/styles/MainStyle";
import Quiz from './quiz/Quiz';

const Home = () => {

  return (
    <S.HomeContainer>
      <S.MainContainer>
        <MainTitle />
        <HomePostList />
      </S.MainContainer>
      <Quiz />
    </S.HomeContainer>
  );
};

export default Home;
