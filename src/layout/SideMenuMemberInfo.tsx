import * as S from "./style/SideMenuMemberInfoStyle";
import Profile from "../../src/assets/profile/profile.png";
import userImg from "../../src/assets/profile/userImg.png";

interface Props {
  isLoggedIn: boolean;
}

const MemberInfo = ({ isLoggedIn }: Props) => {
  return (
    <S.MemberInfoContainer>
      <S.ProfileImg src={isLoggedIn ? userImg : Profile} alt="Profile IMG" />
      {isLoggedIn ? (
        <S.DiscContainer>
          <S.Name>최정환</S.Name>
          <S.Disc>작고 소듕한 소비일기</S.Disc>
        </S.DiscContainer>
      ) : (
        <S.DiscContainer>로그인 후 이용해주세요</S.DiscContainer>
      )}
    </S.MemberInfoContainer>
  );
};

export default MemberInfo;
