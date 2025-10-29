import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../services/UserService.jsx";

export const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    displayName: "",
  });

  const registerNewUser = (e) => {
    e.preventDefault();
    const newUser = {
      ...user,
    };

    createUser(newUser).then((createdUser) => {
      if (createdUser.hasOwnProperty("id")) {
        localStorage.setItem(
          "otomemo_user",
          JSON.stringify({
            id: createdUser.id,
          }),
        );

        navigate("/");
      }
    });
  };

  return (
    <>
      <div className="w-full max-w-xs">
        <form
          onSubmit={registerNewUser}
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
              value={user.displayName}
              onChange={(e) =>
                setUser({ ...user, displayName: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Email
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="email"
              type="text"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Register
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
