import { useNavigate } from "react-router-dom";
import { useState } from "react";

import * as S from "./style/HeaderStyled.ts";
import moaboa from "../../src/assets/header/moaboa.png";
import Menu from "../../src/assets/header/Menu.png";
import Bell from "../../src/assets/header/Bell.png";

interface Props {
  setShowSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ setShowSideMenu }: Props) {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const changeSideMenuState = () => {
    setShowSideMenu((prevState) => !prevState);
  };

  function goHomePage() {
    navigate("/");
    setShowSideMenu(false);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      goSearchPage();
    }
  };

  const changeKeyword = (e: string) => {
    setKeyword(e);
  };

  const goSearchPage = () => {
    if (keyword == "") {
      window.alert("검색어를 입력하세요");
    } else {
      navigate("/search?q=" + keyword + "&tab=post&sort=accuracy");
    }
  };

  return (
    <S.Header>
      <S.LeftContainer>
        <img
          src={Menu}
          onClick={changeSideMenuState}
          alt="메뉴"
          width={"25px"}
          height={"15px"}
        />
        <img
          src={moaboa}
          onClick={goHomePage}
          alt="로고"
          width={"110px"}
          style={{
            marginLeft: "10px",
            // border: "1px solid red",
          }}
        />
      </S.LeftContainer>
      <S.RightContainer>
        <S.SearchContainer>
          <S.SearchInput
            type="text"
            placeholder="키워드를 검색하세요(닉네임, 글, 제목)"
            onChange={(e) => changeKeyword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <S.ImgBtn onClick={goSearchPage} />
        </S.SearchContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Bell} alt="Bell" width={"20px"} height={"25px"} />
        </div>
      </S.RightContainer>
    </S.Header>
  );
}
