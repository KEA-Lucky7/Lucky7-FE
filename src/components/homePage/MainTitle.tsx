import * as S from "../homePage/styles/MainTitle";
import mainImg from "../../assets/home/mainImg.png";

const MainTitle = () => {
  return (
    <S.MainTitleContainer>
      <img
        src={mainImg}
        style={{
          scale: "60%",
          position: "absolute",
          right: "-80px" /* 우측 여백 */,
          bottom: "-80px" /* 하단 여백 */,
          // border: "1px solid red",
        }}
      />
    </S.MainTitleContainer>
  );
};

export default MainTitle;
