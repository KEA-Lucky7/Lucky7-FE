const { Kakao } = window;
import * as S from "./style/LoginStyle";

interface Props {
  setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setShowLoginModal }: Props) => {
  const googleId = import.meta.env.VITE_GOOGLE_ID;
  const googleSecret = import.meta.env.VITE_GOOGLE_SECRET;
  const kakaoKey = import.meta.env.VITE_KAKAO_KEY;
  // 구글 소셜로그인
  const handleGoogleLogin = () => {
    const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:5173&response_type=code&client_id=${googleId}&scope=https://www.googleapis.com/auth/userinfo.profile`;
    window.location.href = GOOGLE_AUTH_URL;

    // 테스트 완료 시 주석 해제
    // Cookies.set('member', 'true', { expires: 1 });
    // 나중에 useEffect로 디테일 설정해야함
    // window.location.reload();
  };
  // 카카오 소셜로그인
  const handleKakaoLogin = () => {
    Kakao.Auth.authorize({
      redirectUri: "http://localhost:5173",
      scope: "profile_nickname",
    });

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoKey}&redirect_uri=http://localhost:5173&response_type=code`;
    window.location.href = KAKAO_AUTH_URL;

    // 테스트 완료 시 주석 해제
    // Cookies.set('member', 'true', { expires: 1 });
    // 나중에 useEffect로 디테일 설정해야함
    // window.location.reload();
  };

  const hideLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <S.Overlay onClick={hideLoginModal}>
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
    </S.Overlay>
  );
};

export default Login;
