import React from "react";
import "./index.css";
import GameList from "./components/GameList.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <GameList />
      </BrowserRouter>
    </>
  );
}

export default App;
