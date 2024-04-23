import Header from "./Header";
import SideMenu from "./SideMenu";
import { useState } from "react";
import CreatePostHeader from "../components/createPostPage/createPostItems/CreatePostHeader";
import SettingHeader from "../components/settingPage/settingItems/SettingHeader";
interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const isWritePage = location.pathname.includes("write");
  const isSettingPage = location.pathname.includes("setting");

  return (
    <>
      {isWritePage ? (
        <CreatePostHeader setShowSideMenu={setShowSideMenu} />
      ) : isSettingPage ? (
        <SettingHeader setShowSideMenu={setShowSideMenu} /> // SettingHeader로 변경
      ) : (
        <Header setShowSideMenu={setShowSideMenu} />
      )}
      <main>{children}</main>
      {showSideMenu && <SideMenu setShowSideMenu={setShowSideMenu} />}
    </>
  );
}
