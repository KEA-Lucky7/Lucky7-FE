import { useEffect, useState } from "react";
import * as S from "../styles/LoginInfoStyle";
import { useNavigate } from "react-router-dom";
import { useStoreJwt } from './state';
import axios from "axios";


const LoginInfo = () => {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const navigate = useNavigate();
  const { accessToken, refreshToken } = useStoreJwt();


  const [nickname, setNickname] = useState("");
  const [birth, setBirth] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [about, setAbout] = useState("");
  
  const createUser = async () => {
    try {
      const response = await axios.patch(`${serverUrl}/member/sign-in/${accessToken}`, {
        nickname,
        birth,
        profileImage,
        about
      });
      console.log(response)
    } catch (error) {
      window.alert('Error:' + error);
    }
  };

  const hideLoginModal = () => {
    const hide = window.confirm("회원가입을 그만두시겠습니까? 입력한 정보가 삭제됩니다.");
    if (hide) {
      navigate("/")
    }
  };

  useEffect(() => {
    console.log(accessToken);
    console.log(refreshToken);
  }, [accessToken, refreshToken]);

  return (
    <S.LoginOverlay onClick={hideLoginModal}>
      <S.LoginContainer onClick={(e) => e.stopPropagation()}>
        <S.LoginTitleContainer>모아보아를 시작하기 전에,<br />기본 정보를 입력해 주세요</S.LoginTitleContainer>
        <S.LoginContents>
          닉네임
          <S.LoginInputContainer
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </S.LoginContents>
        <S.LoginContents>
          생년월일
          <S.LoginInputContainer
            placeholder="0000/00/00"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
        </S.LoginContents>
        <S.LoginContents>
          이메일
          <S.LoginInputContainer
            placeholder="example@example.com"
            value={profileImage}
            onChange={(e) => setProfileImage(e.target.value)}
          />
        </S.LoginContents>
        <S.LoginContents>
          소개
          <S.LoginInputContainer
            placeholder="자기소개"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </S.LoginContents>
        <S.LoginButtonContainer onClick={createUser}>
          회원가입 완료
        </S.LoginButtonContainer>
      </S.LoginContainer>
    </S.LoginOverlay>
  );
};

export default LoginInfo;