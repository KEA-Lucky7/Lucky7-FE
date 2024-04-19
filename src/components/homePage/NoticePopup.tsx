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
            <button onClick={closePopup}>닫기</button>
            <p>공지 제목</p>
            <p>공지 내용</p>
            <label>
                <input type="checkbox" 
                    checked={isChecked} 
                    onChange={handleCheckboxChange} />
                        일주일동안 보지 않기
            </label>
        </S.NoticePopupContainer>
    );
}

export default NoticePopup;