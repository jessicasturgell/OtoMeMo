const baseUrl = "/api/User";

export const createUser = (user) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => res.json());
};
