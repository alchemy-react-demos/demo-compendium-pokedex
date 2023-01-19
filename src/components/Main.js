import { usePokemon } from '../hooks/pokemon';
import PokeList from './Pokemon/PokeList';
import Select from './Select/Select';

export default function Main() {
  const { pokemon, types, handleTypeChange, loading } = usePokemon();
  return (
    <>
      <Select types={types} handleTypeChange={handleTypeChange} />
      <PokeList pokemon={pokemon} loading={loading} />
    </>
  );
}
