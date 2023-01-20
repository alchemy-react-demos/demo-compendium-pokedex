import { useEffect, useState } from 'react';
import { fetchInitialPokemon, fetchPokemon, fetchTypes } from '../services/fetchPokemon';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState('all');
  useEffect(() => {
    console.log('use effect is running!');
    setLoading(true);
    const fetchData = async () => {
      // load our pokemon
      const data = await fetchPokemon(selectedType);
      // set our pokemon in state
      setPokemon(data);
      setLoading(false);
    };
    fetchData();
  }, [selectedType]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTypes();
      setTypes(data);
    };
    fetchData();
  }, []);

  // const handleTypeChange = async (type) => {
  //   setLoading(true);
  //   console.log('handling type change!! ', type);
  //   // - sets the selectedType state
  //   // - call the API with the selected Type
  //   const data = await fetchPokemon(type);
  //   // - update the pokemon state with the API response data
  //   setPokemon(data);
  //   setLoading(false);
  // };
  return { pokemon, types, loading, selectedType, setSelectedType };
}
