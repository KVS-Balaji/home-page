import "bootstrap/dist/css/bootstrap.css";
import About from "./pages/About";
import DaaS from "./pages/DaaS";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MaaS from "./pages/MaaS";
import MisoLens from "./pages/MisoLens";
import "./styles.css";

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
  return <>{component}</>;
}

export default App;
