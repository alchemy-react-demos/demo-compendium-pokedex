import { usePokemon } from '../hooks/pokemon';
import { useTypes } from '../hooks/types';
import PokeList from './Pokemon/PokeList';
import Select from './Select/Select';

export default function Main() {
  const { pokemon, loading, setLoading, setSelectedType, setPokemon } = usePokemon();
  const types = useTypes();
  return (
    <>
      <Select {...{ setLoading, setSelectedType, types, setPokemon }} />
      <PokeList pokemon={pokemon} loading={loading} />
    </>
  );
}
