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

export async function fetchPokemon(type) {
  const params = new URLSearchParams();
  if (type !== 'all') {
    params.set('type', type);
  }
  const resp = await fetch(
    `https://alchemy-pokedex.herokuapp.com/api/pokedex/?${params.toString()}`
  );
  console.log(resp);
  const data = await resp.json();
  console.log(data);
  return data.results;
}
