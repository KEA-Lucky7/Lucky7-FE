import * as S from "../../createPostPage/styles/CreatepostCss";
import moaboa from "../../../assets/header/moaboa.png";
import Menu from "../../../assets/header/Menu.png";
import { useNavigate } from "react-router-dom";

// HomePage.tsx에서 가져온 showPopup useState
interface Props {
  setShowSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SettingHeader({ setShowSideMenu }: Props) {
  const navigate = useNavigate();
  const changeSideMenuState = () => {
    setShowSideMenu((prevState) => !prevState);
  };

  function goHomePage() {
    // 그 전에 로그인 처리 됐는지 확인해야 함
    navigate("/");
    setShowSideMenu(false);
  }

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
          width={"130px"}
          height={"27px"}
          style={{ marginBottom: "10px", marginLeft: "10px" }}
        />
      </S.LeftContainer>
      <S.RightContainer>
      </S.RightContainer>
    </S.Header>
  );
}
