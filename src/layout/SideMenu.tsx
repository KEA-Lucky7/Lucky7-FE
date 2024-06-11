import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style/SideMenuStyle";
import Cookies from "js-cookie";
import { useBlogIdStore, useUserStore } from '../components/homePage/login/state';

import MemberInfo from "./SideMenuMemberInfo";
import FinancialLuck from "../components/financialLuck/FinancialLuck";
import moaboa from "../../src/assets/header/moaboa.png";
import Liked from "../../src/assets/sidemenu/Liked.png";
import Luck from "../../src/assets/sidemenu/Luck.png";
import Myblog from "../../src/assets/sidemenu/Myblog.png";
import Write from "../../src/assets/sidemenu/Write.png";
import Setting from "../../src/assets/sidemenu/setting.png";
import LogInOut from "../../src/assets/sidemenu/LogInOut.png";

interface Props {
  setShowSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MenuItemProps {
  icon: string;
  label: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, onClick }) => (
  <S.MenuItems onClick={onClick}>
    <img src={icon} alt={label} />
    <div>{label}</div>
  </S.MenuItems>
);

const SideMenu: React.FC<Props> = ({ setShowSideMenu }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showFortuneModal, setShowFortuneModal] = useState(false);
  const { userInfo } = useUserStore();
  const navigate = useNavigate();
  const memberCookie = Cookies.get("login");
  const { myBlogId } = useBlogIdStore()

  useEffect(() => {
    if (memberCookie == "true" && userInfo) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleSideMenu = () => setShowSideMenu((prevState) => !prevState);
  const toggleFortuneModal = () =>
    setShowFortuneModal((prevState) => !prevState);

  const handleNavigation = (path: string) => {
    navigate(path);
    setShowSideMenu(false);
  };

  const goWritePage = () => {
    if (memberCookie == "true" && userInfo){
      handleNavigation("/write")
    } else {
      window.alert("로그인 후 이용해주세요.")
    }
  }

  const goBlogPage = () => {
    if (memberCookie == "true" && userInfo){
      handleNavigation("/blog/" + myBlogId)
    } else {
      window.alert("로그인 후 이용해주세요.")
    }
  }

  const goFollowPage = () => {
    if (memberCookie == "true" && userInfo){
      handleNavigation("/")
    } else {
      window.alert("로그인 후 이용해주세요.")
    }
  }

  const goLikePage = () => {
    if (memberCookie == "true" && userInfo){
      handleNavigation("/like?page=1")
    } else {
      window.alert("로그인 후 이용해주세요.")
    }
  }

  const handleLogout = () => {
    const action = window.confirm("로그아웃 하시겠습니까?");
    if (action) {
      Cookies.set('login', 'false', { expires: 7 });
      window.location.reload()
    }
  }

  return (
    <S.MenuOverlay onClick={toggleSideMenu}>
      <S.SideContainer onClick={(e) => e.stopPropagation()}>
        <S.TitleImg src={moaboa} alt="titleImg" />
        <MemberInfo isLoggedIn={isLoggedIn} storedUserInfo={userInfo} />
        <S.MenuList>
          <MenuItem
            icon={Write}
            label="글쓰기"
            onClick={goWritePage}
          />
          <MenuItem
            icon={Myblog}
            label="내블로그"
            onClick={goBlogPage}
          />
          <MenuItem icon={Liked} label="내 팔로우" onClick={goFollowPage} />
          <MenuItem
            icon={Luck}
            label="좋아요한 글"
            onClick={goLikePage}
          />
          {showFortuneModal && (
            <FinancialLuck setShowFortuneModal={setShowFortuneModal} />
          )}
          <MenuItem
            icon={Luck}
            label="내 금전운"
            onClick={toggleFortuneModal}
          />
        </S.MenuList>
        <S.Settings>
          {isLoggedIn ? (
            <>
              <MenuItem
                icon={Setting}
                label="설정"
                onClick={() => handleNavigation("/setting")}
              />
              <MenuItem
                icon={LogInOut}
                label="로그아웃"
                onClick={handleLogout}
              />
            </>
          ) : (
            <MenuItem
              icon={LogInOut}
              label="로그인/회원가입"
              onClick={() => handleNavigation("/login")}
            />
          )}
        </S.Settings>
      </S.SideContainer>
    </S.MenuOverlay>
  );
};

export default SideMenu;
