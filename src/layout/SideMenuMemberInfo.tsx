import * as S from "./style/SideMenuMemberInfoStyle";
import Profile from "../../src/assets/profile/profile.png";
import userInfo from "../data/home/userInfo.json";
import { useNavigate } from "react-router-dom";

interface Props {
  isLoggedIn: boolean;
}

const MemberInfo = ({ isLoggedIn }: Props) => {

  const navigate = useNavigate();
  const showLoginModal = () => {
    navigate("/")
  };
  
  return (
    <S.MemberInfoContainer>
      {!isLoggedIn ? (
        <div>
          <S.ProfileImg src={userInfo.profile_img} alt="Profile IMG" />
          <S.DiscContainer>
            <S.Name>{userInfo.name}</S.Name>
            <S.Disc>{userInfo.desc}</S.Disc>
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
