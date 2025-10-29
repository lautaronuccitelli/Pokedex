// lib/pokeapi.ts

export type PokemonListItem = {
  name: string;
  url: string;
};

export type PokemonListResponse = {
  count: number;
  results: PokemonListItem[];
};

export type PokemonDetail = {
  name: string;
  sprites: { front_default: string | null };
  types: { slot: number; type: { name: string } }[];
  height: number;
  weight: number;
  stats: { base_stat: number; stat: { name: string } }[];
};

const API = 'https://pokeapi.co/api/v2';

export async function getPokemonPage(
  limit = 20,
  offset = 0
): Promise<PokemonListResponse> {
  const res = await fetch(`${API}/pokemon?limit=${limit}&offset=${offset}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error('Error fetching Pokémon list');
  return res.json();
}

export async function getPokemon(name: string): Promise<PokemonDetail> {
  const res = await fetch(`${API}/pokemon/${name}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error('Pokemon not found');
  return res.json();
}
