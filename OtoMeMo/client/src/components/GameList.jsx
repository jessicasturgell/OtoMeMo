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
        <div key={game.id}>
          <p>
            <strong>{game.title}</strong>
          </p>
          <p>{game.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GameList;
