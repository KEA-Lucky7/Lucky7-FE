import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

import * as S from "./style/HeaderStyled.ts";
import moaboa from "../../src/assets/header/moaboa.png";
import Menu from "../../src/assets/header/Menu.png";
import Bell from "../../src/assets/header/Bell.png";
import { useStore, useBlogIdStore, useUserStore, useBlogStore } from '../components/homePage/login/state';

interface Props {
  setShowSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ setShowSideMenu }: Props) {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const { setAccessToken } = useStore();
  const { setMyBlogId } = useBlogIdStore();
  const { setUserInfo } = useUserStore();
  const { setBlogInfo } = useBlogStore();

  const changeSideMenuState = () => {
    setShowSideMenu((prevState) => !prevState);
  };

  const hiddenKeyInput = () => {
    const strUserJson = JSON.stringify({id: 7, nickname: "다현", about: "나는 이다현"});
    const strBlogJson = JSON.stringify({blogName: "다현" + "님의 블로그", about : "다현" + "님의 블로그입니다.", headerImage : ""});
    setAccessToken("eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJpZCI6IjciLCJzdWIiOiJBY2Nlc3NUb2tlbiIsImlhdCI6MTcxODExMzEwMCwiZXhwIjoxNzIwNzkxNTAwfQ.TpV3OQ7evKoGNnzmsqsEN-BRk0Z2Jq5HVYz0of1vyLc")
    setMyBlogId(46)
    setUserInfo(strUserJson);
    setBlogInfo(strBlogJson);
    Cookies.set('login', 'true', { expires: 7 });
    window.alert("로그인이 완료됐습니다.");
  }

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
      navigate("/search?q=" + keyword);
      location.reload();
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
          <img src={Bell} alt="Bell" height={"22px"} onClick={hiddenKeyInput} />
        </div>
      </S.RightContainer>
    </S.Header>
  );
}
