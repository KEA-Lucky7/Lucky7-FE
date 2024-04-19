import Header from "./Header";
import SideMenu from "./SideMenu";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  const [showSideMenu, setShowSideMenu] = useState(false);
  return (
    <>
      <Header setShowSideMenu={setShowSideMenu} />
      <main>{children}</main>
      {showSideMenu && <SideMenu />}
    </>
  );
}
