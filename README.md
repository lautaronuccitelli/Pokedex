# Mini Pokedex

Mini Pokedex construida con Next.js App Router y PokeAPI.

## Estructura del proyecto

```
app/
  pokedex/
    page.tsx
    loading.tsx
    error.tsx
    [name]/
      page.tsx
      loading.tsx
components/
  pokemon-card.tsx
  search-client.tsx
  stats-bar.tsx
lib/
  pokeapi.ts
```

## Ejecutar el proyecto

```bash
npm run dev
```

Abrir http://localhost:3000/pokedex

## Funcionalidades

- Listado de Pokemon
- Busqueda por nombre
- Vista de detalle con stats y tipos
- Imagenes oficiales de Pokemon
- Loading y error states

## Tecnologias

- Next.js 15
- TypeScript
- PokeAPI