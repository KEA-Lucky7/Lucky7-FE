import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore, useUserStore, useBlogStore } from './state';
import axios from "axios";
import Cookies from "js-cookie";
import * as S from "../styles/LoginInfoStyle";

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
  const { setBlogInfo } = useBlogStore();

  const [nickname, setNickname] = useState("");
  const [birth, setBirth] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [about, setAbout] = useState("");

  const [userLoading, setUserLoading] = useState<boolean>(false);
  
  const handleLoginAction = async () => {
    setUserLoading(true);
    try {
      console.log("토큰: " + accessToken);
      const createUserResponse = await axios.patch(`${serverUrl}/member/sign-in/${accessToken}`, {
        nickname,
        birth,
        profileImage,
        about
      });
      console.log(createUserResponse.data);
      
      if (createUserResponse.data) {
        const createBlogResponse = await axios.post(`${serverUrl}/blog/sign-in/${accessToken}`, {
          blogName: createUserResponse.data  + "님의 블로그",
          about : createUserResponse.data + "님의 블로그입니다.",
          headerImage : " "
        });
        console.log(createBlogResponse.data);
        
        if (createBlogResponse.data) {
          const getUserInfoResponse = await axios.get<User>(`${serverUrl}/member/${accessToken}`);
          const data = getUserInfoResponse.data.data;
          const strJson = JSON.stringify({id: data.id, nickname: data.nickname, about: data.about});
          const strBlogJson = JSON.stringify({blogName: data.nickname + "님의 블로그", about : data.nickname + "님의 블로그입니다.", headerImage : ""});
          setUserInfo(strJson);
          setBlogInfo(strBlogJson);
          console.log(strJson, strBlogJson);
          Cookies.set('login', 'true', { expires: 7 });
          window.alert("로그인이 완료됐습니다.");
        }
      }
      setUserLoading(false);
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
      {userLoading && <S.LoadingOverlay>회원가입을 진행하는 중...</S.LoadingOverlay>}
    </S.LoginOverlay>
  );
};

export default LoginInfo;