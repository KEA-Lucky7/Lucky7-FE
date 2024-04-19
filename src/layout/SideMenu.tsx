import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style/SideMenuStyle";
import Cookies from "js-cookie";
import Login from "./Login";
import SideMenuMemberInfo from "./SideMenuMemberInfo";

interface Props {
    setShowSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const HomeSideMenu = ({ setShowSideMenu }: Props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    // 현재 로그인 여부를 가져오는 useEffect
    useEffect(() => {
        var memberCookie = Cookies.get('member')
        console.log("Member Cookie: ", memberCookie);
        // 
        if (memberCookie){
            setIsLoggedIn(true)
        }
    })

    const changeSideMenuState = () => {
        setShowSideMenu(prevState => !prevState);
      };

    const navigate = useNavigate();

    function goWritePage() {
        // 그 전에 로그인 처리 됐는지 확인해야 함
        navigate('/write');
    }

    function goMyblogPage() {
        navigate('/myblog');
    }

    return (
        <S.MenuOverlay onClick={changeSideMenuState}>
            <S.SideContainer onClick={(e) => e.stopPropagation()}>
                <S.SideMenuContents>
                    <div>My Profile</div>
                    { isLoggedIn ? (
                        <div>
                            로그아웃
                        </div>
                    ) : (
                        <div>
                            <div onClick={() => setShowLoginModal(true)}>로그인/회원가입</div> 
                            {showLoginModal && <Login setShowLoginModal={setShowLoginModal} />}
                        </div>
                    )}
                    <SideMenuMemberInfo isLoggedIn={isLoggedIn} />
                    <div onClick={goWritePage}>글쓰기</div>
                    <div onClick={goMyblogPage}>내블로그</div>
                    <div>내 팔로우</div>
                    <div>좋아요한 글</div>
                    <div>내 금전운</div>
                    { isLoggedIn ? (
                        <div>
                            설정
                            로그아웃
                        </div>
                    ) : (
                        <div>
                            계정을 잊어버리셨나요?
                        </div>
                    )}
                </S.SideMenuContents>
            </S.SideContainer>
        </S.MenuOverlay>
    );
}

export default HomeSideMenu;
