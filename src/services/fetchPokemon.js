export async function fetchInitialPokemon() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/');
  console.log(resp);
  const data = await resp.json();
  console.log(data);
  return data.results;
}
