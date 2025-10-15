import OtoNavbar from "./components/Navbar.jsx";
import "./index.css";
import Router from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <OtoNavbar />
        <ApplicationViews />
      </Router>
    </>
  );
}

export default App;
