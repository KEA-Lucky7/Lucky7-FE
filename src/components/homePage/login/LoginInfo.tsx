import * as S from "../styles/LoginStyle";
import { useNavigate } from "react-router-dom";

// { setShowLoginModal }: Props
const LoginInfo = () => {
  const googleId = import.meta.env.VITE_GOOGLE_ID;
  // const googleSecret = import.meta.env.VITE_GOOGLE_SECRET;
  const redirectUri = import.meta.env.VITE_SERVER_URL;
  const testUri = import.meta.env.VITE_FRONT_TEST_URL
  // const kakaoKey = import.meta.env.VITE_KAKAO_KEY;

  // 구글 소셜로그인
  const handleGoogleLogin = () => {
    const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${testUri}/login/redirect&response_type=code&client_id=${googleId}&scope=https://www.googleapis.com/auth/userinfo.profile`;
    window.location.href = GOOGLE_AUTH_URL;
  };

  // 카카오 소셜로그인
  const handleKakaoLogin = () => {
    const KAKAO_AUTH_URL = `${redirectUri}/oauth2/authorization/kakao`;
    // const KAKAO_AUTH_URL2 = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoKey}&redirect_uri=${redirectUri}/oauth2/authorization/kakao&response_type=code`;
    window.location.href = KAKAO_AUTH_URL;
  }

  const navigate = useNavigate();
  const hideLoginModal = () => {
    navigate("/")
  };

  return (
    <S.LoginOverlay onClick={hideLoginModal}>
      <S.LoginContainer onClick={(e) => e.stopPropagation()}>
        <S.LoginTitleContainer>대충 유저 정보 입력하는 페이지</S.LoginTitleContainer>
        <S.LoginInfoContainer>
        (리다이렉션테스트용)
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

export default LoginInfo;
