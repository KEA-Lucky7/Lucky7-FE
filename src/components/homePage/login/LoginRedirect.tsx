import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "./state";

const LoginRedirect = () => {
  const navigate = useNavigate();
  const [isRegisteredIn, setIsRegisteredIn] = useState(false);
  const { setUserToken } = useStore();

  useEffect(() => {

    const query = new URLSearchParams(location.search);
    const token = query.get("code");

    if (token) {
        setUserToken(token);
        setIsRegisteredIn(true)
    }

  }, [setUserToken]);

  useEffect(() => {
    if (isRegisteredIn) {
      navigate("/login/info");
    }
  }, [isRegisteredIn]);

  return null;
};

export default LoginRedirect;
