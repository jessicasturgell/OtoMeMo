import { useEffect, useState } from "react";
import GameList from "../components/GameList.jsx";
import { Route, Routes } from "react-router-dom";

function ApplicationViews() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localOtomemoUser = localStorage.getItem("otomemo_user");
    const otomemoUserObject = JSON.parse(localOtomemoUser);
    setCurrentUser(otomemoUserObject);
  }, []);

  return (
    <Routes>
      <Route path="games" element={<GameList />} />
    </Routes>
  );
}

export default ApplicationViews;
