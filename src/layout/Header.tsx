import * as S from "./style/HeaderStyled.ts";
import moaboa from "../../src/assets/header/moaboa.png";
import Menu from "../../src/assets/header/Menu.png";
import Bell from "../../src/assets/header/Bell.png";
import Search from "../../src/assets/header/search.png";

// HomePage.tsx에서 가져온 showPopup useState
interface Props {
  setShowSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ setShowSideMenu }: Props) {
  const changeSideMenuState = () => {
    setShowSideMenu((prevState) => !prevState);
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
          alt="로고"
          width={"130px"}
          height={"27px"}
          style={{ marginBottom: "10px", marginLeft: "10px" }}
        />
      </S.LeftContainer>
      <S.RightContainer>
        <S.SearchContainer>
          <S.SearchInput
            type="text"
            placeholder="키워드를 검색하세요(내 블로그 내 검색)"
          />
          <S.Img src={Search} alt="Search" width={"20px"} height={"20px"} />
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
