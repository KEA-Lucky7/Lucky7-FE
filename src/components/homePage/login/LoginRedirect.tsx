import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStoreJwt } from "./state";

const LoginRedirect = () => {
  const navigate = useNavigate();
  const [isRegisteredIn, setIsRegisteredIn] = useState(false);
  const { setUserToken } = useStoreJwt();

  const query = new URLSearchParams(window.location.search);
  const access_token = query.get("access_code");
  const refresh_token = query.get("redirect_code");

  useEffect(() => {
    if (access_token && refresh_token) {
      window.alert(`${access_token}\n${refresh_token}`);
      setUserToken(access_token, refresh_token);
      setIsRegisteredIn(true);
      navigate("/login/info");
    } else {
      window.alert("아직안옴.(과연아직일까?)");
    }
  }, [access_token, refresh_token, navigate, setUserToken]);

  return null;
};

export default LoginRedirect;
