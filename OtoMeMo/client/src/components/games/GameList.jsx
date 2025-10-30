import React, { useState, useEffect } from "react";
import { getAllGames } from "../../services/GameService.jsx";
import { AddGame } from "./AddGame.jsx";
import { Link } from "react-router-dom";
import { Game } from "./Game.jsx";

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
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" required placeholder="Search" />
      </label>
      <Link to="add">
        <button className="btn">Add Game</button>
      </Link>
      <div>
        {games.length > 0 ? (
          games.map((game) => <Game key={game.id} game={game} />)
        ) : (
          <div>No games!</div>
        )}
      </div>
    </>
  );
};

export default GameList;
