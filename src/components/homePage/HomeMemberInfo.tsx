import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Login from "./Login";

const HomeMemberInfo = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 현재 로그인 여부를 가져오는 useEffect
    useEffect(() => {
        var memberCookie = Cookies.get('member')
        console.log("Member Cookie: ", memberCookie);
        // 
        if (memberCookie){
            setIsLoggedIn(true)
        }
    })

    return (
        <div>
            { isLoggedIn ? (
                <div>
                    로그인도이
                </div>
            ) : (
                <div>
                    로그인안도이
                    <Login />
                </div>
            )}
        </div>
    );
}

export default HomeMemberInfo;
