import idFromUrl from '@app/pokedex'

function PokemonCard({ name, url }: { name: string; url: string }) {
  const id = idFromUrl(url);
  return (
    <a
      href={`/pokedex/${name}`}
      className="block border rounded p-3 hover:shadow"
    >
      <div className="text-sm text-gray-500 capitalize">{name}</div>
      <img
        alt={name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        className="w-full h-32 object-contain"
      />
    </a>
  );
}