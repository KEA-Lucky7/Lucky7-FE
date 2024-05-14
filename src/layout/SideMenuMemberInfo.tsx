import * as S from "./style/SideMenuMemberInfoStyle";
import Profile from "../../src/assets/profile/profile.png";
import userImg from "../../src/assets/profile/userImg.png";

interface Props {
  isLoggedIn: boolean;
  setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MemberInfo = ({ isLoggedIn, setShowLoginModal }: Props) => {
  return (
    <S.MemberInfoContainer>
      {isLoggedIn ? (
        <div>
          <S.ProfileImg src={userImg} alt="Profile IMG" />
          <S.DiscContainer>
            <S.Name>최정환</S.Name>
            <S.Disc>유저 설명</S.Disc>
          </S.DiscContainer>
        </div>
      ) : (
        <div onClick={() => setShowLoginModal(true)}>
          <S.ProfileImg src={Profile} alt="Profile IMG" />
          <S.DiscContainer>로그인 후 이용해주세요</S.DiscContainer>
        </div>
      )}
    </S.MemberInfoContainer>
  );
};

export default MemberInfo;
