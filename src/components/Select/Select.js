import { fetchPokemon } from '../../services/fetchPokemon';

export default function Select({ types, setLoading, setSelectedType, setPokemon }) {
  const handleTypeChange = async (type) => {
    setLoading(true);
    console.log('handling type change!! ', type);
    // - sets the selectedType state
    setSelectedType(type);
    // - call the API with the selected Type
    const data = await fetchPokemon(type);
    // - update the pokemon state with the API response data
    setPokemon(data);
    setLoading(false);
  };

  return (
    <select onChange={(e) => handleTypeChange(e.target.value)}>
      <option value="all">all</option>
      {types.map(({ type }) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}
