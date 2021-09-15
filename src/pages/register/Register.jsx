import "./register.css";
import {
    Link
  } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerleft">
          <h3 className="registerLogo">CloneFB</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on CloneFB.
          </span>
        </div>
        <div className="registerright">
          <div className="registerBox">
            <input placeholder="Username" className="registerInput" required/>
            <input placeholder="Email" className="registerInput" required/>
            <input placeholder="Password" className="registerInput" required/>
            <input placeholder="Password Again" className="registerInput" required />
            <Link to="/"  style= {{textDecoration:"none", color:"white"}}>
            <button className="registerButton">Sign Up</button>
            </Link>
            <Link to="/"  style= {{textDecoration:"none", color:"white"}}>
            <button className="registerRegisterButton">
              Log into Account
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}