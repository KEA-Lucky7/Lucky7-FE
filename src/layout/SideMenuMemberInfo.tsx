import * as S from "./style/SideMenuMemberInfoStyle";
import Profile from "../../src/assets/profile/profile.png";
import userInfo from "../data/home/userInfo.json";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface Props {
  isLoggedIn: boolean;
  storedUserInfo: string;
}

const MemberInfo = ({ isLoggedIn, storedUserInfo }: Props) => {
  const [nickname, setNickname] = useState("닉네임")
  const navigate = useNavigate();
  const showLoginModal = () => {
    navigate("/");
  };

  useEffect(() => {
    const sUserInfo = JSON.parse(storedUserInfo)
    setNickname(sUserInfo.nickname)
  }, []);

  return (
    <S.MemberInfoContainer>
      {isLoggedIn ? (
        <div>
          <S.ProfileImg src={userInfo.profile_img} alt="Profile IMG" />
          <S.DiscContainer>
            <S.Name>{nickname}</S.Name>
          </S.DiscContainer>
        </div>
      ) : (
        <div onClick={showLoginModal}>
          <S.ProfileImg src={Profile} alt="Profile IMG" />
          <S.DiscContainer>로그인 후 이용해주세요</S.DiscContainer>
        </div>
      )}
    </S.MemberInfoContainer>
  );
};

export default MemberInfo;
