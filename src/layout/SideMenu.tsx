import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style/SideMenuStyle";
import Cookies from "js-cookie";
import Login from "./Login";
import MemberInfo from "./SideMenuMemberInfo";

interface Props {
  setShowSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideMenu = ({ setShowSideMenu }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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

  const changeSideMenuState = () => {
    setShowSideMenu((prevState) => !prevState);
  };

  const navigate = useNavigate();

  function goWritePage() {
    // 그 전에 로그인 처리 됐는지 확인해야 함
    navigate("/write");
  }

  function goMyblogPage() {
    navigate("/myblog");
  }

  return (
    <S.MenuOverlay onClick={changeSideMenuState}>
      <S.SideContainer onClick={(e) => e.stopPropagation()}>
        <S.Title>My Profile</S.Title>

        {isLoggedIn ? (
          <S.LoginOut>로그아웃</S.LoginOut>
        ) : (
          <div>
            <S.LoginOut onClick={() => setShowLoginModal(true)}>
              로그인/회원가입
            </S.LoginOut>
            {showLoginModal && <Login setShowLoginModal={setShowLoginModal} />}
          </div>
        )}
        <MemberInfo isLoggedIn={isLoggedIn} />
        <S.MenuList>
          <div onClick={goWritePage}>글쓰기</div>
          <div onClick={goMyblogPage}>내블로그</div>
          <div>내 팔로우</div>
          <div>좋아요한 글</div>
          <div>내 금전운</div>
        </S.MenuList>
        {isLoggedIn ? (
          <S.Settings>
            <div>설정</div>
            <div>로그아웃</div>
          </S.Settings>
        ) : (
          <S.Settings>계정을 잊어버리셨나요?</S.Settings>
        )}
      </S.SideContainer>
    </S.MenuOverlay>
  );
};

export default SideMenu;
