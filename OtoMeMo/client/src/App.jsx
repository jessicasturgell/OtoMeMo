import { Route, Routes } from "react-router-dom";
import { Login } from "./components/auth/Login.jsx";
import { Register } from "./components/auth/Register.jsx";
import { useEffect, useState } from "react";
import GameList from "./components/games/GameList.jsx";
import { Welcome } from "./components/Welcome.jsx";
import { OtoNavbar } from "./components/nav/Navbar.jsx";
import { AddGame } from "./components/games/AddGame.jsx";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localOtomemoUser = localStorage.getItem("otomemo_user");
    const otomemoUserObject = JSON.parse(localOtomemoUser);
    setCurrentUser(otomemoUserObject);
  }, []);

  return (
    <>
      <OtoNavbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="login"
          element={<Login setCurrentUser={setCurrentUser} />}
        />
        <Route path="register" element={<Register />} />
        <Route path="games">
          <Route index element={<GameList />} />
          <Route path="add" element={<AddGame />} />
        </Route>
        <Route path="games/add" element={<GameList />} />
      </Routes>
    </>
  );
}

export default App;
