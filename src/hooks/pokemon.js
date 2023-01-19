import { useEffect, useState } from 'react';
import { fetchInitialPokemon } from '../services/fetchPokemon';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // load our pokemon
      const data = await fetchInitialPokemon();
      // set our pokemon in state
      setPokemon(data);
    };
    fetchData();
  }, []);
  return pokemon;
}
