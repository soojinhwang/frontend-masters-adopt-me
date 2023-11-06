import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(event) => setLocation(event.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
