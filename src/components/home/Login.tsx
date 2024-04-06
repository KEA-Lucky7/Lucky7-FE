import Cookies from "js-cookie";
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from "@react-oauth/google";
const { Kakao } = window;
import { jwtDecode } from "jwt-decode";

// 구글 로그인 시 리턴값
// interface response {
//     clientId: string;
//     credential: string;
//     select_by: string;
// }

// Google Credential jwt decode시 저장되어 있는 정보
interface googleCredential {
    aud: string;
    azp: string;
    email: string;
    email_verified: boolean;
    exp: number;
    family_name: string;
    given_name: string;
    iat: number;
    iss: string;
    jti: string;
    name: string;
    nbf: number;
    picture: string;
    sub: string;
}

const Login = () => {
    const googleId = import.meta.env.VITE_GOOGLE_ID;
    const googleSecret = import.meta.env.VITE_GOOGLE_SECRET;
    const kakaoKey = import.meta.env.VITE_KAKAO_KEY;
    // 구글 소셜로그인
    const handleGoogleLogin = (credentialResponse) => {
        console.log(credentialResponse);
        const responsePayload: googleCredential = jwtDecode(credentialResponse.credential);
        // (임시 확인용) 정보 출력
        console.log("ID: " + responsePayload.sub);
        console.log('Name: ' + responsePayload.name);
        // 테스트 완료 시 주석 해제
        // Cookies.set('member', 'true', { expires: 1 });
        // 나중에 useEffect로 디테일 설정해야함
        // window.location.reload();
    }
    // 카카오 소셜로그인
    const handleKakaoLogin = () => {
        Kakao.Auth.authorize({
            redirectUri: 'http://localhost:5173',
            scope: "profile_nickname",
        });

        const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoKey}&redirect_uri=http://localhost:5173&response_type=code`;
        window.location.href = KAKAO_AUTH_URL;

        // 테스트 완료 시 주석 해제
        // Cookies.set('member', 'true', { expires: 1 });
        // 나중에 useEffect로 디테일 설정해야함
        // window.location.reload();
    };

    return (
        <div>
            <GoogleOAuthProvider clientId={googleId}>
                <GoogleLogin
                    onSuccess={(credentialResponse) => {
                        handleGoogleLogin(credentialResponse);
                        console.log("로그인 성공")
                      }}
                    onError={() => {
                        console.error("로그인 실패");
                      }}
                />
            </GoogleOAuthProvider>
            <button onClick={handleKakaoLogin} >
                Kakao로 로그인
            </button>
        </div>
    );
}

export default Login;
