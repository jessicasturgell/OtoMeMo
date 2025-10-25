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

export const getUserByDisplayName = (displayName) => {
  return fetch(
    `${baseUrl}/GetUserByDisplayName?displayName=${displayName}`
  ).then((res) => res.json());
};
