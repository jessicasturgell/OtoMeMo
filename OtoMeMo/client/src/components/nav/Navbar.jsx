import { Link } from "react-router-dom";

function OtoNavbar() {
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
              {localStorage.getItem("otomemo_user") ? (
                <Link
                  to=""
                  onClick={() => {
                    localStorage.removeItem("otomemo_user");
                    navigate("/login", { replace: true });
                  }}
                >
                  Logout
                </Link>
              ) : (
                <Link to="/login">Log In</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default OtoNavbar;
