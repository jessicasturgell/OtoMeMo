import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [displayName, set] = useState("OtomeHeroine");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    getUserByDisplayName(displayName).then((user) => {
      if (user && user.id) {
        localStorage.setItem(
          "otomemo_user",
          JSON.stringify({
            id: user.id,
          })
        );
        navigate("/");
      } else {
        window.alert("Invalid login");
      }
    });
  };

  return <>Something something this is a login page.</>;
};
