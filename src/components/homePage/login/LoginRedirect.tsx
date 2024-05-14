import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "./state";

const LoginRedirect = () => {
  const navigate = useNavigate();
  const [isRegisteredIn, setIsRegisteredIn] = useState(false);
  const { setUserToken } = useStore();

  useEffect(() => {
    // 작동안됨
    // const query = new URLSearchParams(location.search);
    // const token = query.get("access-token");

    //임시
    const token = "zustand!!!"

    if (token) {
        setUserToken(token);
        setIsRegisteredIn(true)
    }

  }, [setUserToken]);

  useEffect(() => {
    if (!isRegisteredIn) {
      navigate("/login/info");
    } else {
      navigate("/");
    }
  }, [isRegisteredIn, navigate]);

  return null;
};

export default LoginRedirect;
