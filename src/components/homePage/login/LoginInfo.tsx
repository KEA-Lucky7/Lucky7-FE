import * as S from "../styles/LoginInfoStyle";
import { useNavigate } from "react-router-dom";

const LoginInfo = () => {


  const navigate = useNavigate();
  const hideLoginModal = () => {
    navigate("/")
  };

  return (
    <S.LoginOverlay onClick={hideLoginModal}>
      <S.LoginContainer onClick={(e) => e.stopPropagation()}>
        
        <S.LoginTitleContainer>모아보아를 시작하기 전에,<br />기본 정보를 입력해 주세요</S.LoginTitleContainer>
        
        <S.LoginContents>
        닉네임
        <S.LoginInputContainer
          placeholder="닉네임"
          />
        </S.LoginContents>

        <S.LoginContents>
        생년월일
        <S.LoginInputContainer
          placeholder="0000/00/00"
          />
        </S.LoginContents>

        <S.LoginContents>
        이메일
        <S.LoginInputContainer
          placeholder="example@example.com"
          />
        </S.LoginContents>
        <S.LoginButtonContainer>
          Google로 로그인
        </S.LoginButtonContainer>
      </S.LoginContainer>
    </S.LoginOverlay>
  );
};

export default LoginInfo;
