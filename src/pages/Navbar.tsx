/* eslint-disable @typescript-eslint/no-explicit-any */
import "bootstrap/dist/css/bootstrap.css";
import logo from "../assets/img/logo.png";
import "../css/Navbar.css";

function Navbar() {
  const logoClick = () => {
    window.open("/", "_self");
  };

  return (
    <div className="container-fluid row navbarcontainer">
      <div className="imagediv">
        <img
          src={logo}
          alt="main-logo"
          id="main-logo"
          className="img-fluid complogo"
          onClick={logoClick}
        />
      </div>
      <div className="links">
        <ul>
          <CustomLink className="navlink" href="/">
            Home
          </CustomLink>
          <CustomLink className="navlink" href="/About">
            About&nbsp;Us
          </CustomLink>
          <CustomLink className="navlink" href="/DaaS">
            DaaS
          </CustomLink>
          <CustomLink className="navlink" href="/MaaS">
            MaaS
          </CustomLink>
          <CustomLink className="navlink" href="/Industries">
            Industries
          </CustomLink>
          <CustomLink className="navlink" href="/MisoLens">
            MisoLens
          </CustomLink>
          <CustomLink className="navlink" href="/Login">
            Login
          </CustomLink>
        </ul>
      </div>
    </div>
  );
}

function CustomLink({ href, children, ...props }: any) {
  const path = window.location.pathname;

  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}

export default Navbar;
