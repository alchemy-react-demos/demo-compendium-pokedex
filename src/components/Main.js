import { usePokemon } from '../hooks/pokemon';
import PokeList from './Pokemon/PokeList';
import Query from './Query';
import Select from './Select/Select';

export default function Main() {
  const { pokemon, types, handleTypeChange, loading, query, setQuery, handleButtonClick } =
    usePokemon();
  return (
    <>
      <Select types={types} handleTypeChange={handleTypeChange} />
      <Query inputValue={query} changeHandler={setQuery} handleButtonClick={handleButtonClick} />
      <PokeList pokemon={pokemon} loading={loading} />
    </>
  );
}
