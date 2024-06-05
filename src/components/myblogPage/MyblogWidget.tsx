import { Link } from "react-router-dom";
import * as S from "./styles/MyblogWidgetCss";
// import nameEditbutton from "../../assets/myblog/nameEditbutton.png";

export default function MyblogWidget() {
  return (
    <S.MyblogWidgetContainer>
      <S.Profilecontainer>
        <S.Picturecontainer />
        <S.UserInfoContainer>
          <S.UserNickname>김성섭</S.UserNickname>
          <S.UserId>노릇노릇 치아바타</S.UserId>
        </S.UserInfoContainer>
      </S.Profilecontainer>
      <S.CreateNewpostButtonContainer>
        <Link to="/write" style={{ textDecoration: "none", color: "white" }}>
          글쓰기
        </Link>
      </S.CreateNewpostButtonContainer>
    </S.MyblogWidgetContainer>
  );
}
