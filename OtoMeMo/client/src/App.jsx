import "./index.css";
import GameList from "./components/GameList.jsx";
import { Outlet, Route, Routes } from "react-router-dom";
import OtoNavbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <OtoNavbar />
              <Outlet />
            </>
          }
        >
          <Route path="games" element={<GameList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
