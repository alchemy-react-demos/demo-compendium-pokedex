export default function Query({ handleSearch, query, setQuery }) {
  return (
    <div>
      <input value={query} type="text" onChange={(e) => setQuery(e.target.value)}></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
