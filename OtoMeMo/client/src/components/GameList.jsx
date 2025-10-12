import React, { useState, useEffect } from "react";
import { getAllGames } from "../services/GameService.jsx";
import { Card, CardText, CardTitle } from "reactstrap";

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
        <Card key={game.id} className="p-3 m-3">
          <CardTitle tag="h5">{game.title}</CardTitle>
          <CardText>{game.description}</CardText>
        </Card>
      ))}
    </div>
  );
};

export default GameList;
