import Link from 'next/link';
import { getPokemon } from '@/lib/pokeapi';
import StatsBar from '@/components/stats-bar';
import DarkMode from '@/components/DarkMode';
import Image from 'next/image';
export default async function PokemonPage({
  params,
}: {
  params: Promise< { name: string }>;
}) {
    const { name } = await params;
  const p = await getPokemon(name);
  
  return (
    <main className="max-w-2xl mx-auto p-6 space-y-4">
      
      <Link href="/pokedex" className="px-3 py-2 rounded border rounded px-3 py-2 dark: border rounded px-3 py-2 text-sm transition">
        Volver
      </Link>
      
      <DarkMode />

      <Image
        src="/R2.png"
        width={500}
        height={500}
        alt="Logo pokedex"
      />

      <header className="flex items-center gap-4">
        {p.sprites.front_default && (
          <img
            src={p.sprites.front_default}
            alt={p.name}
            width={96}
            height={96}
          />
        )}
        <div>
          <h1 className="text-2xl font-semibold capitalize">{p.name}</h1>
          <p className="text-sm text-gray-500">
            Tipos: {p.types.map(t => t.type.name).join(', ')} | Altura: {p.height / 10}m | Peso: {p.weight / 10}kg
          </p>
        </div>
      </header>

      <section>
        <h2 className="font-medium mb-2">Base stats</h2>
        <div className="space-y-2">
          {p.stats.map(s => (
            <StatsBar
              key={s.stat.name}
              label={s.stat.name}
              value={s.base_stat}
              max={200}
            />
          ))}
        </div>
      </section>
    </main>
  );
}