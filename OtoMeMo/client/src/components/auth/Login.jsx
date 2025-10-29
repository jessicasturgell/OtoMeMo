import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserByDisplayName } from "../../services/UserService.jsx";

export const Login = ({ nav, setNav }) => {
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
          }),
        );
        navigate("/");
      } else {
        window.alert("Invalid login");
      }
    });
  };

  return (
    <>
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleLogin}
          className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md"
        >
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Username
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="username"
              type="text"
              placeholder="Username"
              value={displayName}
              onChange={(evt) => set(evt.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-xs text-gray-500">
          &copy;2025 OtoMeMo. All rights reserved.
        </p>
      </div>
    </>
  );
};
