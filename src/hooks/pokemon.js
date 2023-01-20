import { useEffect, useState } from 'react';
import { fetchInitialPokemon, fetchPokemon, fetchTypes } from '../services/fetchPokemon';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState('all');

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

  return { pokemon, setSelectedType, setPokemon, setLoading, loading };
}
