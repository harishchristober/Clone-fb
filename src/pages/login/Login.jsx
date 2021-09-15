import "./login.css";
import {
    Link
  } from "react-router-dom";
 

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">CloneFB</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on CloneFB.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" required />
            <input placeholder="Password" type="password" className="loginInput" required />
            <Link to="/home"  style= {{textDecoration:"none", color:"white"}}>
            <button className="loginButton">Log In</button>
            </Link>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register"  style= {{textDecoration:"none", color:"white"}}>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}