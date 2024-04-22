import React, { useState } from "react";
import Cookies from "js-cookie";
import * as S from "../homePage/styles/NoticePopupStyle";

// HomePage.tsx에서 가져온 showPopup useState
interface Props {
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoticePopup = ({ setShowPopup }: Props) => {

    const [isChecked, setIsChecked] = useState(false);

    const closePopup = () => {
        setShowPopup(false);
        if (isChecked){
            // 임시로 expire 기간 7일로 지정해둠
            Cookies.set('notice', 'false', { expires: 7 });
        }
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }

    return (
        <S.NoticePopupContainer>
            <button onClick={closePopup}>X</button>
            <S.NoticeContents>
            <S.NoticeTitle>모아보아 서비스<br />서버 점검 안내</S.NoticeTitle>
            <S.NoticeText>모아보아 서비스 업데이트를 위한 서버 점검을 실행합니다<br /><br /> - 일시: 2024년 0월 0일 오전 12시 ~ 0월 0일 오전 12시</S.NoticeText>
            </S.NoticeContents>
            <S.CheckBoxLabel>
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                일주일동안 보지 않기
            </S.CheckBoxLabel>
        </S.NoticePopupContainer>
    );
}

export default NoticePopup;