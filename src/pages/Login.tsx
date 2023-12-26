import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { EnvelopeFill, KeyFill } from "react-bootstrap-icons";
import test from "../assets/img/pattern_bw_bg.png";
import "../css/Login.css";
import Navbar from "./Navbar";

function Login() {
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  const openGoogle = () => {
    window.open("https://www.google.com", "_blank");
  };

  const mouseMovement = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const clientX = e.clientX;
    const clientY = e.clientY;
    const offsetX = clientX / window.innerWidth - 0.5;
    const offsetY = clientY / window.innerHeight - 0.5;

    const imageMoveX = -offsetX * 50;
    const imageMoveY = -offsetY * 50;

    setImagePosition({ x: imageMoveX, y: imageMoveY });

    console.log(clientX);
    console.log(clientY);
  };

  return (
    <div className="loginpage">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content" onMouseMove={(e) => mouseMovement(e)}>
        <form className="formcontent">
          <header className="header">
            <h1>LOGIN</h1>
          </header>
          <div className="email-group row">
            <label htmlFor="email">
              <b>Email:</b>
            </label>
            <div className="inputfield">
              <EnvelopeFill />
              <input
                type="email"
                id="email"
                placeholder="Enter E-mail"
                required
              />
            </div>
          </div>
          <div className="password-group row">
            <label htmlFor="pwd">
              <b>Password:</b>
            </label>
            <div className="inputfield">
              <KeyFill />
              <input
                type="password"
                id="pwd"
                placeholder="Enter Password"
                required
              />
            </div>
          </div>
          <div className="row col-md-12 submit-group">
            <div className="col-md-6 submitbtn">
              <button type="submit" onClick={openGoogle}>
                Submit
              </button>
            </div>
            <div className="col-md-6 forgot">
              <a href="https://www.google.com" target="_blank" id="aone">
                Forgot Password
              </a>
            </div>
          </div>
          <div className="row create-acc-group">
            <div className="ptag">
              <p>Not a User?</p>
            </div>
            <div className="atag">
              <a href="/Register" id="atwo">
                Create Account
              </a>
            </div>
          </div>
        </form>
        <div className="filler"></div>
        <div className="imagecontainer">
          <img
            src={test}
            alt="Background"
            style={{
              backgroundPositionX: `${imagePosition.x - 50}px`,
            }}
            id="bg-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
