import { useEffect, useState } from "react";
import * as S from "./SideMenuStyle";
import LoginInfo from "./LoginInfo";
import Cookies from "js-cookie";
import Login from "./Login";

const SideMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  // 현재 로그인 여부를 가져오는 useEffect
  useEffect(() => {
    var memberCookie = Cookies.get("member");
    console.log("Member Cookie: ", memberCookie);
    //
    if (memberCookie) {
      setIsLoggedIn(true);
    }
  });

  return (
    <S.SideContainer>
      <S.SideMenuContents>
        <div>My Profile</div>
        {isLoggedIn ? (
          <div>로그아웃</div>
        ) : (
          <div>
            <div onClick={() => setShowLoginModal(true)}>로그인/회원가입</div>
            {showLoginModal && <Login setShowLoginModal={setShowLoginModal} />}
          </div>
        )}
        <LoginInfo isLoggedIn={isLoggedIn} />
        <div>글쓰기</div>
        <div>내블로그</div>
        <div>내 팔로우</div>
        <div>좋아요한 글</div>
        <div>내 금전운</div>
        {isLoggedIn ? (
          <div>설정 로그아웃</div>
        ) : (
          <div>계정을 잊어버리셨나요?</div>
        )}
      </S.SideMenuContents>
    </S.SideContainer>
  );
};

export default SideMenu;
