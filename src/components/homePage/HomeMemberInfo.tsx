import { useEffect, useState } from "react";
import Cookies from "js-cookie";

interface Props {
    isLoggedIn: boolean;
}

const HomeMemberInfo = ({ isLoggedIn}: Props) => {

    return (
        <div>
            { isLoggedIn ? (
                <div>
                    로그인도이
                </div>
            ) : (
                <div>
                    로그인안도이
                </div>
            )}
        </div>
    );
}

export default HomeMemberInfo;
