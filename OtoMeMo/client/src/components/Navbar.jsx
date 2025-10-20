import { Link } from "react-router-dom";

function OtoNavbar() {
  return (
    <div className="bg-orange-200 pt-10 pr-5 pl-5 pb-3 shadow-md">
      <nav className="flex text-white justify-between items-end">
        <span className="cherry-bomb-one-regular text-rose-400">
          <Link to="/">OtoMeMo</Link>
        </span>
        <div className="flex gap-2 text-rose-400">
          <Link to="/games">Games</Link>
          <Link to="/">Something</Link>
          <Link to="/">Something</Link>
        </div>
      </nav>
    </div>
  );
}

export default OtoNavbar;
