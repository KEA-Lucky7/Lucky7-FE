import * as S from "../homePage/styles/MainTitle";
import BackGroundImageUrl from "../../assets/home/BackGroundImg.png";

const MainTitle = () => {
  return (
    <S.MainTitleContainer imageUrl={BackGroundImageUrl}>
      <S.TextContainer>
        <S.Text>차곡차곡 모아봐요,</S.Text>
        <S.Text>소비와 함께하는 즐거운 기록</S.Text>
        <S.ByMoaBoa>by moaboa</S.ByMoaBoa>
      </S.TextContainer>
    </S.MainTitleContainer>
  );
};

export default MainTitle;
