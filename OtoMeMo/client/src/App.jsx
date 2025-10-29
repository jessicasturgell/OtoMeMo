import { Route, Routes } from "react-router-dom";
import { Login } from "./components/auth/Login.jsx";
import OtoNavbar from "./components/nav/Navbar.jsx";
import { Register } from "./components/auth/Register.jsx";
import { useEffect, useState } from "react";
import GameList from "./components/games/GameList.jsx";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localOtomemoUser = localStorage.getItem("otomemo_user");
    const otomemoUserObject = JSON.parse(localOtomemoUser);
    setCurrentUser(otomemoUserObject);
  }, []);

  return (
    <>
      <OtoNavbar />
      <Routes>
        <Route path="/" element={<>Hello.</>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="games" element={<GameList />} />
      </Routes>
    </>
  );
}

export default App;
