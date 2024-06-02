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
      setUserToken(access_token, refresh_token);
      setIsRegisteredIn(true);
    }
  }, [access_token, refresh_token, navigate, setUserToken]);

  useEffect(() => {
    if (isRegisteredIn) {
      navigate("/login/info");
    }
  }, [isRegisteredIn]);

  return null;
};

export default LoginRedirect;
