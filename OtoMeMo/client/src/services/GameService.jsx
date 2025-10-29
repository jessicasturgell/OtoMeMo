import React from "react";

const baseUrl = "/api/Game";

export const getAllGames = () => {
  return fetch(baseUrl).then((res) => res.json());
};

// export const addGame = () => {

// }
