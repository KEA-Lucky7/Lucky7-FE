import * as S from "../styles/LoginStyle";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const googleId = import.meta.env.VITE_GOOGLE_ID;
  const kakaoKey = import.meta.env.VITE_KAKAO_SERVER_KEY;
  const redirectUri = import.meta.env.VITE_SERVER_URL;

  // 구글 소셜로그인
  const handleGoogleLogin = () => {
    const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${redirectUri}/login/oauth2/code/google&response_type=code&client_id=${googleId}&scope=https://www.googleapis.com/auth/userinfo.profile`;
    window.location.href = GOOGLE_AUTH_URL;
  };

  const testLogin = () => {
    
  }
  // 카카오 소셜로그인
  const handleKakaoLogin = () => {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakaoKey}&redirect_uri=${redirectUri}/login/oauth2/code/kakao`;
    const KAKAO_AUTH_URL2 = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoKey}&redirect_uri=${redirectUri}/oauth2/authorization/kakao&response_type=code`;
    window.location.href = KAKAO_AUTH_URL;
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
