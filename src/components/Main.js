import { usePokemon } from '../hooks/pokemon';

export default function Main() {
  const pokemon = usePokemon();
  return (
    <div>
      {pokemon.map((poke) => (
        <p key={poke._id}>{poke.pokemon}</p>
      ))}
    </div>
  );
}
