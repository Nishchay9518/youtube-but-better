import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/actions/auth.action";

import "./loginScreen.scss";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };
  const history = useHistory();

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  return (
    <div className="login">
      <img src="stems/utu.png" alt="" />

      <div className="login__container">
        <img className="banner" src="stems/banner.svg" alt="" />
        <p className="creator">
          created by <strong>NSHCHY</strong>
        </p>
        <button onClick={handleLogin}>
          Login with
          <img src="stems/google.png" alt="" />
        </button>
        <div className="cred-box">
          <div>
            <img src="stems/instuct.png" alt="i icon" className="instruct" />
            <span>Demo Credentials</span>
          </div>
          <div>
            <span>Username : testmyproject.24@gmail.com</span>
            <span>Password : test.test.test</span>
          </div>
        </div>
        <p>Based on Youtube Data Api</p>
      </div>
    </div>
  );
};

export default LoginScreen;
