import React, { useState, useEffect } from "react";
import { getAllGames } from "../../services/GameService.jsx";

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
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Add Game
      </button>
      <div>
        {games.length > 0 ? (
          games.map((game) => (
            <div
              key={game.id}
              className="m-2 p-2 border-1 border-fuchsia-300/50 border-solid shadow-md bg-white text-pink-950"
            >
              <h1>{game.titleEnglish}</h1>
              <p>{game.description}</p>
            </div>
          ))
        ) : (
          <div className="m-3 text-center">No games!</div>
        )}
      </div>
    </>
  );
};

export default GameList;
