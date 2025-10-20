import GameList from "../components/GameList.jsx";
import { Route, Routes } from "react-router-dom";

function ApplicationViews() {
  <Routes>
    <Route path="games" element={<GameList />} />
  </Routes>;
}

export default ApplicationViews;
