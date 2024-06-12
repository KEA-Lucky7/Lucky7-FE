// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
// import { useLocation } from "react-router-dom";
// import SettingHeader from "../components/settingPage/settingItems/SettingHeader";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  const [showSideMenu, setShowSideMenu] = useState(false);
  // const location = useLocation();
  const isWritePage = location.pathname.includes("write");
  // const isSettingPage = location.pathname.includes("setting");
  // useEffect(() => {
  //   // 페이지 이동이 감지되면 setShowSideMenu를 사용하여 SideMenu를 숨김
  //   setShowSideMenu(false);
  // }, [location]);

  return (
    <>
      {!isWritePage && <Header setShowSideMenu={setShowSideMenu} />}
      <main>{children}</main>
      {showSideMenu && <SideMenu setShowSideMenu={setShowSideMenu} />}
    </>
  );
}
