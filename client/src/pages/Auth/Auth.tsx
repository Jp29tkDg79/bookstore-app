import { Link, useLocation } from "react-router-dom";

import Login from "../../components/Auth/Login";
import Signin from "../../components/Auth/Signin";

import { HOME, LOGIN, SIGNIN } from "../../constants/Routes";

import classes from "./Auth.module.css";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN || location.pathname === HOME;

  const actionBtn = (
    <div className="btn" style={{
      margin: "1rem"
    }}>
      <button
        type="submit"
        style={{
          backgroundColor: "transparent",
          color: "white",
          fontSize: "2rem"
        }}
      >
        {isLogin ? "login" : "signin"}
      </button>
    </div>
  );

  return (
    <section className={classes.Auth}>
      <h2>{isLogin ? "login" : "signin"}</h2>
      {isLogin ? <Login>{actionBtn}</Login> : <Signin>{actionBtn}</Signin>}
      <Link className={classes.toggle} to={!isLogin ? LOGIN : SIGNIN}>
        {isLogin ? "サインイン" : "ログイン"}
      </Link>
    </section>
  );
};

export default Auth;
