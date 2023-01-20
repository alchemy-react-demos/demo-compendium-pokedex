import { useEffect } from 'react';
import { fetchTypes } from '../services/fetchPokemon';
import { useState } from 'react';

export function useTypes() {
  const [types, setTypes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTypes();
      setTypes(data);
    };
    fetchData();
  }, []);
  return types;
}
