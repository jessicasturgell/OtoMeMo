import React, { useState, useEffect } from "react";
import { getAllGames } from "../services/GameService.jsx";

const GameList = () => {
  const [games, setGames] = useState([]);

  const getGames = () => {
    getAllGames().then((allGames) => setGames(allGames));
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div>
      {games.map((game) => (
        <div
          key={game.id}
          className="m-2 p-2 border-1 border-rose-300/50 border-solid shadow-md bg-white text-rose-950"
        >
          <h1>{game.title}</h1>
          <p>{game.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GameList;
