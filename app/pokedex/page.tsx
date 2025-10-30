import Link from 'next/link';
import Image from 'next/image';
import { getPokemonPage } from '@/lib/pokeapi';
import SearchClient from '@/components/SearchClient';
import DarkMode from '@/components/DarkMode';
//import { PokemonCard} from '@/components';
function getOffset(params: { page?: string }) {
  const page = Number(params.page ?? '1');
  return {
    page: Math.max(1, page),
    offset: (Math.max(1, page) - 1) * 20,
  };
}

export default async function Pokedex({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const { page, offset } = getOffset(params);
  const data = await getPokemonPage(20, offset);
  
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-4">
      <Image
        src="/R2.png"
        width={500}
        height={500}
        alt="Logo pokedex"
      />
      <SearchClient />
      <DarkMode />
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.results.map((p: { name: string; url: string }) => (
          <li key={p.name}>
            <PokemonCard name={p.name} url={p.url} />
          </li>
        ))}
      </ul>
      <nav className="flex justify-between pt-4 items-center">
        <Link
          href={`/pokedex?page=${page - 1}`}
          aria-disabled={page === 1}
          className={`border px-3 py-1 rounded ${
            page === 1 ? 'opacity-50 pointer-events-none' : ''
          }`}
        >
          Anterior
        </Link>
        <span>Pagina {page}</span>
        <Link
          href={`/pokedex?page=${page + 1}`}
          className="border px-3 py-1 rounded"
        >
          Siguiente
        </Link>
      </nav>
    </main>
  );
}



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

function idFromUrl(url: string) {
  const parts = url.split('/').filter(Boolean);
  return parts[parts.length - 1];
}