import { usePokemon } from '../hooks/pokemon';
import PokeList from './Pokemon/PokeList';
import Select from './Select/Select';

export default function Main() {
  const { pokemon, types, loading, selectedType, setSelectedType } = usePokemon();
  return (
    <>
      <Select types={types} selectedType={selectedType} setSelectedType={setSelectedType} />
      <PokeList pokemon={pokemon} loading={loading} />
    </>
  );
}
