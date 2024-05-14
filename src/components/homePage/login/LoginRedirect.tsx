import { useEffect, useState } from "react";


const LoginRedirect = () => {
    const [jwt, setJwt] = useState("");


    useEffect(() => {
        console.log('왔어')
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');
        
        if (code) {
            setJwt(code);
            console.log('코드 받음', jwt)
            // 디코딩
            // setID(jwtDecode(jwt));
            // console.log(id);
        }
    }, [jwt]);

    return (
        <div>
            <p>LoginRedirect</p>
        </div>
    );
}

export default LoginRedirect;
