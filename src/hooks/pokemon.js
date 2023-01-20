import { useEffect, useState } from 'react';
import { fetchInitialPokemon, fetchPokemon } from '../services/fetchPokemon';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState('all');
  const [query, setQuery] = useState('');

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      // load our pokemon
      const data = await fetchInitialPokemon();
      // set our pokemon in state
      setPokemon(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    const data = await fetchPokemon(selectedType, query);
    setPokemon(data);
    setLoading(false);
  };

  return {
    pokemon,
    setSelectedType,
    setPokemon,
    setLoading,
    loading,
    query,
    setQuery,
    handleSearch,
  };
}
