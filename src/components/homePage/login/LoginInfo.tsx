import { useEffect, useState } from "react";
import * as S from "../styles/LoginInfoStyle";
import { useNavigate } from "react-router-dom";
import { useStore, useUserStore } from './state';
import axios from "axios";

interface User {
  data: {
    about: string,
    birth: string,
    id: number,
    nickname: string,
    profileImage: string,
  }
}

const LoginInfo = () => {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const navigate = useNavigate();
  const { accessToken } = useStore();
  const { setUserInfo } = useUserStore();

  const [nickname, setNickname] = useState("");
  const [birth, setBirth] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [about, setAbout] = useState("");

  const [userLoading, setUserLoading] = useState<boolean>(false);
  const [callUserLoading, setCallUserLoading] = useState<boolean>(false);
  const [blogLoading, setBlogLoading] = useState<boolean>(false);
  
  const createUser = async () => {
    setUserLoading(true)
    try {
      console.log("토큰: " + accessToken)
      const response = await axios.patch(`${serverUrl}/member/sign-in/${accessToken}`, {
        nickname,
        birth,
        profileImage,
        about
      });
      console.log(response.data)
      if(response.data) {
        createBlog()
        getUserInfo()
        setUserLoading(false)
      }
      return response.data
    } catch (error) {
      window.alert('Error:' + error);
    }
  };

  const createBlog = async () => {
    setBlogLoading(true)
    try {
      const response = await axios.post(`${serverUrl}/post/${accessToken}`);
      console.log(response.data)
      if(response.data){
        getUserInfo()
        setBlogLoading(false)
      }
    } catch (error) {
      window.alert('Error:' + error);
    }
  };

  const getUserInfo = async () => {
    setCallUserLoading(true)
    try {
      const response = await axios.get<User>(`${serverUrl}/member/${accessToken}`);
      const data = response.data.data;
      const strJson = JSON.stringify({id: data.id, nickname: data.nickname, about: data.about})
      setUserInfo(strJson);
      setCallUserLoading(false)
      window.alert("로그인이 완료됐습니다.")
    } catch (error) {
      window.alert('Error:' + error);
    }
  };

  const handleLoginAction = async () => {
    createUser()
  }

  const hideLoginModal = () => {
    const hide = window.confirm("회원가입을 그만두시겠습니까? 입력한 정보가 삭제됩니다.");
    if (hide) {
      navigate("/")
    }
  };

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
        <S.LoginButtonContainer onClick={handleLoginAction}>
          회원가입 완료
        </S.LoginButtonContainer>
      </S.LoginContainer>
      {userLoading && <S.LoadingOverlay>유저를 생성하는 중...</S.LoadingOverlay>}
      {blogLoading && <S.LoadingOverlay>블로그를 생성하는 중...</S.LoadingOverlay>}
      {callUserLoading && <S.LoadingOverlay>정보를 불러오는 중...</S.LoadingOverlay>}
    </S.LoginOverlay>
  );
};

export default LoginInfo;