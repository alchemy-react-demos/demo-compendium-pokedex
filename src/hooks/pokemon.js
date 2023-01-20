import { useEffect, useState } from 'react';
import { fetchInitialPokemon, fetchPokemon, fetchTypes } from '../services/fetchPokemon';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
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

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTypes();
      setTypes(data);
    };
    fetchData();
  }, []);

  const handleTypeChange = async (type) => {
    setLoading(true);
    console.log('handling type change!! ', type);
    // - sets the selectedType state
    setSelectedType(type);
    // - call the API with the selected Type
    const data = await fetchPokemon(type, query);
    // - update the pokemon state with the API response data
    setPokemon(data);
    setLoading(false);
  };

  const handleButtonClick = async () => {
    setLoading(true);
    const data = await fetchPokemon(selectedType, query);
    setPokemon(data);
    setLoading(false);
  };
  return { pokemon, types, handleTypeChange, loading, query, setQuery, handleButtonClick };
}
