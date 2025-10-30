import { Link, useNavigate } from "react-router-dom";

export const AddGame = () => {
  return (
    <>
      <div className="m-10 flex justify-center">
        <form className="w-full">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <legend className="fieldset-legend">Add Game to Database</legend>

            <label className="label">Title (English)</label>
            <input
              type="text"
              className="input w-full"
              placeholder="e.g. AMNESIA: MEMORIES"
            />

            <label className="label">Title (Romanized)</label>
            <input
              type="text"
              className="input w-full"
              placeholder="e.g. Amuneshia"
            />
            <label className="label">Title (Characters)</label>
            <input
              type="text"
              className="input w-full"
              placeholder="e.g. アムネシア"
            />
            <label className="label">Image</label>
            <input
              type="text"
              className="input w-full"
              placeholder="http://www.example.jpg"
            />
            <div className="text-center">-- OR --</div>
            <input type="file" className="file-input w-full" />
            <label className="label">Description</label>
            <textarea className="textarea w-full"></textarea>
            <label className="label">Developer</label>
            <input
              type="text"
              className="input w-full"
              placeholder="e.g. Idea Factory"
            />
            <label className="label">Publisher</label>
            <input
              type="text"
              className="input w-full"
              placeholder="e.g. Idea Factory"
            />
            <label className="label">Original Language</label>
            <select defaultValue="Pick a color" className="select w-full">
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
            />
            <label className="label">Year Released (Global)</label>
            <input
              type="text"
              className="input w-full"
              placeholder="e.g. 2013"
            />
          </fieldset>
        </form>
      </div>
    </>
  );
};
