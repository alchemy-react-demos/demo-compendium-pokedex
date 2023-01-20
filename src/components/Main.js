import { usePokemon } from '../hooks/pokemon';
import { useTypes } from '../hooks/types';
import PokeList from './Pokemon/PokeList';
import Query from './Query';
import Select from './Select/Select';

export default function Main() {
  const {
    handleSearch,
    query,
    setQuery,
    pokemon,
    loading,
    setLoading,
    setSelectedType,
    setPokemon,
  } = usePokemon();
  const types = useTypes();
  return (
    <>
      <Select {...{ setLoading, setSelectedType, types, setPokemon }} />
      <Query {...{ handleSearch, query, setQuery }} />
      <PokeList pokemon={pokemon} loading={loading} />
    </>
  );
}
