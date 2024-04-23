import Header from "./Header";
import SideMenu from "./SideMenu";
import { useState } from "react";
import CreatePostHeader from "../components/createPostPage/createPostItems/CreatePostHeader";
interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const isWritePage = location.pathname.includes("write");

  return (
    <>
      {isWritePage ? (
        <CreatePostHeader setShowSideMenu={setShowSideMenu} />
      ) : (
        <Header setShowSideMenu={setShowSideMenu} />
      )}
      <main>{children}</main>
      {showSideMenu && <SideMenu setShowSideMenu={setShowSideMenu} />}
    </>
  );
}
