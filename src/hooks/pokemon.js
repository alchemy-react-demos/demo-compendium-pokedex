import { useEffect, useState } from 'react';
import { fetchInitialPokemon, fetchPokemon, fetchTypes } from '../services/fetchPokemon';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // load our pokemon
      const data = await fetchInitialPokemon();
      // set our pokemon in state
      setPokemon(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTypes();
      setTypes(data);
    };
    fetchData();
  }, []);

  const handleTypeChange = async (type) => {
    console.log('handling type change!! ', type);
    // - sets the selectedType state
    // - call the API with the selected Type
    const data = await fetchPokemon(type);
    // - update the pokemon state with the API response data
    setPokemon(data);
  };
  return { pokemon, types, handleTypeChange };
}
