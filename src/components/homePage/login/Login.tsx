import { useNavigate } from "react-router-dom";

import * as S from "../styles/LoginStyle";

const Login = () => {
  const redirectUri = import.meta.env.VITE_SERVER_URL;
 
  const handleGoogleLogin = () => {
    const GOOGLE_AUTH_URL2 = `${redirectUri}/oauth2/authorization/google`;
    window.location.href = GOOGLE_AUTH_URL2;
  };

  const handleKakaoLogin = async () => {
    const KAKAO_AUTH_URL2 = `${redirectUri}/oauth2/authorization/kakao`;
    window.location.href = KAKAO_AUTH_URL2;
  }

  const navigate = useNavigate();
  const hideLoginModal = () => {
    navigate("/")
  };

  return (
    <S.LoginOverlay onClick={hideLoginModal}>
      <S.LoginContainer onClick={(e) => e.stopPropagation()}>
        <S.LoginTitleContainer>Moaboa</S.LoginTitleContainer>
        <S.LoginInfoContainer>
          차곡차곡 모아봐요,
          <br />
          소비와 함께하는 즐거운 기록
        </S.LoginInfoContainer>
        <S.LoginButtonContainer onClick={handleKakaoLogin}>
          Kakao로 로그인
        </S.LoginButtonContainer>
        <S.LoginButtonContainer onClick={handleGoogleLogin}>
          Google로 로그인
        </S.LoginButtonContainer>
      </S.LoginContainer>
    </S.LoginOverlay>
  );
};

export default Login;
