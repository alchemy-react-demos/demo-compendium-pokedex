export async function fetchInitialPokemon() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/');
  console.log(resp);
  const data = await resp.json();
  console.log(data);
  return data.results;
}

export async function fetchTypes() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');
  console.log(resp);
  const data = await resp.json();
  console.log(data);
  return data;
}

export async function fetchPokemon(type, query) {
  const params = new URLSearchParams();
  if (type !== 'all') {
    params.set('type', type);
  }
  if (query) {
    params.set('pokemon', query);
  }
  const resp = await fetch(
    `https://alchemy-pokedex.herokuapp.com/api/pokedex/?${params.toString()}`
  );
  console.log(resp);
  const data = await resp.json();
  console.log(data);
  return data.results;
}
