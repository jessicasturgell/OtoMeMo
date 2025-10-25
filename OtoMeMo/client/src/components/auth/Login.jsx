import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserByDisplayName } from "../../services/UserService.jsx";

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

  return (
    <>
      <div class="w-full max-w-xs">
        <form
          onSubmit={handleLogin}
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={displayName}
              onChange={(evt) => set(evt.target.value)}
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2025 OtoMeMo. All rights reserved.
        </p>
      </div>
    </>
  );
};
