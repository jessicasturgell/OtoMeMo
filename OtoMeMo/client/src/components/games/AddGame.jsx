import { useState } from "react";
import { addGame } from "../../services/GameService.jsx";
import { useNavigate } from "react-router-dom";

export const AddGame = () => {
  const navigate = useNavigate();
  const [game, setGame] = useState({
    titleEnglish: "",
    titleRomanized: "",
    titleCharacters: "",
    img: "",
    description: "",
    developer: "",
    publisher: "",
    originalLanguage: "",
    yearReleasedOriginal: 0,
    yearReleasedGlobal: 0,
  });

  const addNewGame = (e) => {
    e.preventDefault();
    const newGame = {
      ...game,
    };

    addGame(newGame).then(() => {
      navigate("/games");
    });
  };

  return (
    <>
      <div className="m-10 flex justify-center">
        <form className="w-full" onSubmit={addNewGame}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <legend className="fieldset-legend">Add Game to Database</legend>

            <label className="label">Title (English)</label>
            <input
              type="text"
              className="input w-full"
              placeholder="e.g. AMNESIA: MEMORIES"
              value={game.titleEnglish}
              onChange={(e) =>
                setGame({ ...game, titleEnglish: e.target.value })
              }
            />

            <label className="label">Title (Romanized)</label>
            <input
              type="text"
              className="input w-full"
              placeholder="e.g. Amuneshia"
              value={game.titleRomanized}
              onChange={(e) =>
                setGame({ ...game, titleRomanized: e.target.value })
              }
            />
            <label className="label">Title (Characters)</label>
            <input
              type="text"
              className="input w-full"
              placeholder="e.g. アムネシア"
              value={game.titleCharacters}
              onChange={(e) =>
                setGame({ ...game, titleCharacters: e.target.value })
              }
            />
            <label className="label">Image</label>
            <input
              type="text"
              className="input w-full"
              placeholder="http://www.example.jpg"
              value={game.img}
              onChange={(e) => setGame({ ...game, img: e.target.value })}
            />
            <label className="label">Description</label>
            <textarea
              className="textarea w-full"
              value={game.description}
              onChange={(e) =>
                setGame({ ...game, description: e.target.value })
              }
            ></textarea>
            <label className="label">Developer</label>
            <input
              type="text"
              className="input w-full"
              placeholder="e.g. Idea Factory"
              value={game.developer}
              onChange={(e) => setGame({ ...game, developer: e.target.value })}
            />
            <label className="label">Publisher</label>
            <input
              type="text"
              className="input w-full"
              placeholder="e.g. Idea Factory"
              value={game.publisher}
              onChange={(e) => setGame({ ...game, publisher: e.target.value })}
            />
            <label className="label">Original Language</label>
            <select
              className="select w-full"
              value={game.originalLanguage}
              onChange={(e) =>
                setGame({ ...game, originalLanguage: e.target.value })
              }
            >
              <option disabled={true}>Select</option>
              <option>JP</option>
              <option>CN</option>
              <option>OEL</option>
            </select>
            <label className="label">Year Released (Original)</label>
            <input
              type="text"
              className="input w-full"
              placeholder="e.g. 2011"
              value={game.yearReleasedOriginal}
              onChange={(e) =>
                setGame({ ...game, yearReleasedOriginal: e.target.value })
              }
            />
            <label className="label">Year Released (Global)</label>
            <input
              type="text"
              className="input w-full"
              placeholder="e.g. 2013"
              value={game.yearReleasedGlobal}
              onChange={(e) =>
                setGame({ ...game, yearReleasedGlobal: e.target.value })
              }
            />
            <button className="btn btn-neutral mt-4" type="submit">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};
