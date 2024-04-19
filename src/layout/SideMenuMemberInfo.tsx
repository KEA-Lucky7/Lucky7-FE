import { useEffect, useState } from "react";

interface Props {
    isLoggedIn: boolean;
}

const SideMenuMemberInfo = ({ isLoggedIn}: Props) => {

    return (
        <div>
            { isLoggedIn ? (
                <div>
                    유저 정보
                </div>
            ) : (
                <div>
                    로그인 하라는 화면 
                </div>
            )}
        </div>
    );
}

export default SideMenuMemberInfo;
