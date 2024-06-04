import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "./state";

const LoginRedirect = () => {
  const navigate = useNavigate();
  const [isRegisteredIn, setIsRegisteredIn] = useState(false);
  const { setAccessToken } = useStore();

  const query = new URLSearchParams(window.location.search);
  const access_token = query.get("access_code");
  const refresh_token = query.get("redirect_code");

  useEffect(() => {
    if (access_token && refresh_token) {
      setAccessToken(access_token)
      setIsRegisteredIn(true);
    }
  }, [access_token, refresh_token, navigate]);

  useEffect(() => {
    if (isRegisteredIn) {
      navigate("/login/info");
    }
  }, [isRegisteredIn]);

  return null;
};

export default LoginRedirect;
