import React from "react";

const baseUrl = "https://localhost:5001/api/Game";

export const getAllGames = () => {
  return fetch(baseUrl).then((res) => res.json());
};
