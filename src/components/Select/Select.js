export default function Select({ types, selectedType, setSelectedType }) {
  return (
    <select onChange={(e) => setSelectedType(e.target.value)}>
      <option value="all">all</option>
      {types.map(({ type }) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}
