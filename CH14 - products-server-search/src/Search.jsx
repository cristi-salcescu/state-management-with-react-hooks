import { useState } from "react";

function Search({ onSearch }) {
  const [search, setSearch] = useState("");

  const submitSearch = () => {
    onSearch(search);
  };

  return (
    <form>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="button" onClick={submitSearch}>
        Search
      </button>
    </form>
  );
}

export default Search;
