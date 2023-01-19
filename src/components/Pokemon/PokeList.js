export default function PokeList({ pokemon, loading }) {
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      {pokemon.map((poke) => (
        <p key={poke._id}>
          {poke.pokemon} {poke.type_1} {poke.type_2}
        </p>
      ))}
    </div>
  );
}
