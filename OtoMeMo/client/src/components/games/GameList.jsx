import React, { useState, useEffect } from "react";
import { getAllGames } from "../../services/GameService.jsx";
import { AddGame } from "./AddGame.jsx";
import { Link } from "react-router-dom";

const GameList = () => {
  const [games, setGames] = useState([]);

  const getGames = () => {
    getAllGames().then((allGames) => setGames(allGames));
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <>
      <Link to="add"><button className="btn">Add Game</button></Link>
      <div>
        {games.length > 0 ? (
          games.map((game) => (
            <div key={game.id}>
              <h1>{game.titleEnglish}</h1>
              <p>{game.description}</p>
            </div>
          ))
        ) : (
          <div>No games!</div>
        )}
      </div>
    </>
  );
};

export default GameList;
