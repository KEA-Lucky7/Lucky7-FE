import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import NoticePopup from "../components/homePage/NoticePopup";
import Home from "../components/homePage/Home";

const HomePage = () => {
    // 공지사항 팝업 띄우기 여부 useState
    const [showPopup, setShowPopup] = useState(true);

    // 공지사항 팝업 띄우기 여부를 가져오는 useEffect
    useEffect(() => {
        var noticeCookie = Cookies.get('notice')
        // notice 쿠키의 값이 false이면 팝업을 보여주지 않는다
        if (noticeCookie == 'false'){
            setShowPopup(false)
        }
    })

    return (
        <div>
            {showPopup && (
                <NoticePopup setShowPopup={setShowPopup} />
            )}
            <Home />
        </div>
    );
}

export default HomePage;
