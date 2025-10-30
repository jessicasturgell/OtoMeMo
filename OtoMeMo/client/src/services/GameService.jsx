import React from "react";

const baseUrl = "/api/Game";

export const getAllGames = () => {
  return fetch(baseUrl).then((res) => res.json());
};

export const addGame = (game) => {
  return fetch(`${baseUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(game),
  }).then((res) => res.json());
};
