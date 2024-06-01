import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style/SideMenuStyle";
import Cookies from "js-cookie";
import MemberInfo from "./SideMenuMemberInfo";
import FinancialLuck from "../components/financialLuck/FinancialLuck";

interface Props {
  setShowSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideMenu = ({ setShowSideMenu }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showFortuneModal, setShowFortuneModal] = useState(false);

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

  const changeFortuneModalState = () => {
    setShowFortuneModal((prevState) => !prevState);
  };

  const navigate = useNavigate();

  function goWritePage() {
    // 그 전에 로그인 처리 됐는지 확인해야 함
    navigate("/write");
    setShowSideMenu(false);
  }

  function goMyblogPage() {
    navigate("/myblog");
    setShowSideMenu(false);
  }

  function goLikePage() {
    navigate("/like?page=1");
    setShowSideMenu(false);
  }

  function goSettingPage() {
    navigate("/setting");
    setShowSideMenu(false);
  }

  function goLoginModal() {
    navigate("/login");
    setShowSideMenu(false);
  }

  return (
    <S.MenuOverlay onClick={changeSideMenuState}>
      <S.SideContainer onClick={(e) => e.stopPropagation()}>
        <S.Title>My Profile</S.Title>
        <MemberInfo isLoggedIn={isLoggedIn} />
        <S.MenuList>
          <div onClick={goWritePage}>글쓰기</div>
          <div onClick={goMyblogPage}>내블로그</div>
          <div>내 팔로우</div>
          <div onClick={goLikePage}>좋아요한 글</div>
          {showFortuneModal && (
            <FinancialLuck setShowFortuneModal={setShowFortuneModal} />
          )}
          <div onClick={changeFortuneModalState}>내 금전운</div>
        </S.MenuList>
        {isLoggedIn ? (
          <S.Settings>
            <div onClick={goSettingPage}>설정</div>
            <div>로그아웃</div>
          </S.Settings>
        ) : (
          <div>
            <S.Settings>
              <div onClick={goLoginModal} >
               로그인/회원가입
              </div>
              <div>계정을 잊어버리셨나요?</div>
            </S.Settings>
          </div>
          
        )}
      </S.SideContainer>
    </S.MenuOverlay>
  );
};

export default SideMenu;
