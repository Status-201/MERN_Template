import React from "react";
import { useDispatch } from "react-redux";
import GoogleLogin from "react-google-login";
import { userLogin } from "../redux/action/user";
import "./login.scss"
const Login = () => {
  const dispatch = useDispatch();
  const responseSucessGoogle = async (res) => {
    dispatch(
      userLogin(
        res.profileObj.imageUrl,
        res.profileObj.email,
        res.tokenId,
        res.profileObj.name
      )
    );
  };
  const responseFailGoogle = () => {};
  return (
    <div>
      <div>
        <GoogleLogin
          clientId={process.env.REACT_APP_CLIENT_ID}
          render={(renderProps) => (
            <button
              className="login-with-google-btn"
              onClick={renderProps.onClick}
            >
              Sign in with Google
            </button>
          )}
          buttonText="Login"
          onSuccess={responseSucessGoogle}
          onFailure={responseFailGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
};

export default Login;
