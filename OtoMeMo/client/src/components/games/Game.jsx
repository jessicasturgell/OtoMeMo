export const Game = ({ game }) => {
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-sm m-5">
        <figure>
          <img src={game.img} alt="Cover Image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{game.titleEnglish}</h2>
          <p>{game.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </>
  );
};
