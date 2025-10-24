import { Outlet, Route, Routes } from "react-router-dom";
import ApplicationViews from "./views/ApplicationViews.jsx";
import { Login } from "./components/auth/Login.jsx";
import { Authorized } from "./views/Authorized.jsx";
import OtoNavbar from "./components/nav/Navbar.jsx";
import { Register } from "./components/auth/Register.jsx";

function App() {
  return (
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="*"
          element={
            <Authorized>
              <ApplicationViews />
            </Authorized>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
