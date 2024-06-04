import { useNavigate } from "react-router-dom";
import * as S from "../styles/LoginStyle";
import loginBackImg from "../../../assets/login/loginBackImg.png";
import moaboa from "../../../assets/header/moaboa.png";
import kakao from "../../../assets/login/kakao.png";
import google from "../../../assets/login/google.png";

const Login = () => {
  const redirectUri = import.meta.env.VITE_SERVER_URL;

  const handleGoogleLogin = () => {
    const GOOGLE_AUTH_URL2 = `${redirectUri}/oauth2/authorization/google`;
    window.location.href = GOOGLE_AUTH_URL2;
  };

  const handleKakaoLogin = async () => {
    const KAKAO_AUTH_URL2 = `${redirectUri}/oauth2/authorization/kakao`;
    window.location.href = KAKAO_AUTH_URL2;
  };

  const navigate = useNavigate();
  const hideLoginModal = () => {
    navigate("/");
  };

  return (
    <S.LoginOverlay onClick={hideLoginModal}>
      <S.LoginContainer onClick={(e) => e.stopPropagation()}>
        <S.LoginTitleContainer src={moaboa} />
        <S.KaKaoLoginButtonContainer onClick={handleKakaoLogin}>
          <img src={kakao} style={{ scale: "30%", marginRight: "-20px" }} />
          Kakao로 로그인
        </S.KaKaoLoginButtonContainer>
        <S.GoogleLoginButtonContainer onClick={handleGoogleLogin}>
          <img src={google} style={{ scale: "30%", marginRight: "-20px" }} />
          Google로 로그인
        </S.GoogleLoginButtonContainer>
        <S.ImgContainer src={loginBackImg} />
      </S.LoginContainer>
    </S.LoginOverlay>
  );
};

export default Login;
