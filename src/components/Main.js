import { usePokemon } from '../hooks/pokemon';
import Select from './Select/Select';

export default function Main() {
  const { pokemon, types } = usePokemon();
  return (
    <>
      <Select types={types} />
      <div>
        {pokemon.map((poke) => (
          <p key={poke._id}>{poke.pokemon}</p>
        ))}
      </div>
    </>
  );
}
