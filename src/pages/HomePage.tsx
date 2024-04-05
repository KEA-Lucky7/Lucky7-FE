import { useEffect, useState } from "react";
import Cookies from "js-cookie";

import NoticePopup from "../components/home/NoticePopup";
import HomeMemberInfo from "../components/home/HomeMemberInfo";
import HomePostList from "../components/home/HomePostList";
import HomeQuiz from "../components/home/HomeQuiz";
import HomeFortune from "../components/home/HomeFortune";
import HomeQA from "../components/home/HomeQA";

const HomePage = () => {
    // 공지사항 팝업 띄우기 여부 useState
    const [showPopup, setShowPopup] = useState(true);

    // 공지사항 팝업 띄우기 여부를 가져오는 useEffect
    useEffect(() => {
        var noticeCookie = Cookies.get('notice')
        console.log(noticeCookie);
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
            <HomeMemberInfo />
            <HomePostList />
            <HomeQuiz />
            <HomeFortune />
            <HomeQA />
        </div>
    );
}

export default HomePage;
