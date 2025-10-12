function OtoNavbar() {
  return (
    <div className="bg-rose-300 p-10 shadow-md">
      <nav className="flex text-white justify-between">
        <a href="/">OtoMeMo</a>
        <div className="flex gap-2">
          <a href="/games">Games</a>
          <a href="/">Something</a>
          <a href="/">Something</a>
        </div>
      </nav>
    </div>
  );
}

export default OtoNavbar;
