import { Link, useNavigate } from "react-router-dom";
import { ThemeController } from "../ThemeController.jsx";

function OtoNavbar({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("otomemo_user");
    setCurrentUser(null);
    navigate("/login", { replace: true });
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            OtoMeMo
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/games">Games</Link>
            </li>
            <li>
              {currentUser ? (
                <Link to="" onClick={handleLogout}>
                  Logout
                </Link>
              ) : (
                <Link to="/login">Log In</Link>
              )}
            </li>
            <li>
              <ThemeController />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default OtoNavbar;
