import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import "./css/App.css";
import About from "./pages/About";
import DaaS from "./pages/DaaS";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import Login from "./pages/Login";
import MaaS from "./pages/MaaS";
import MisoLens from "./pages/MisoLens";
import Navbar from "./pages/Navbar";
import Register from "./pages/Register";

function App() {
  let component;

  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/About":
      component = <About />;
      break;
    case "/DaaS":
      component = <DaaS />;
      break;
    case "/MaaS":
      component = <MaaS />;
      break;
    case "/Industries":
      component = <Industries />;
      break;
    case "/MisoLens":
      component = <MisoLens />;
      break;
    case "/Login":
      component = <Login />;
      break;
    case "/Register":
      component = <Register />;
      break;
  }

  useEffect(() => {
    const navbarobserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("shownav");
        } else {
          entry.target.classList.remove("shownav");
        }
      });
    });

    const hiddenNav = document.querySelectorAll(".hiddennav");
    hiddenNav.forEach((el) => navbarobserver.observe(el));

    return () => {
      hiddenNav.forEach((el) => navbarobserver.unobserve(el));
    };
  }, []);

  return (
    <div className="appcontainer">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="component-container">{component}</div>
    </div>
  );
}

export default App;
