const BASE_URL = 'https://pokeapi.co/api/v2';

export async function fetchPokemonPage({
  limit = 20,
  offset = 0,
  signal,
} = {}) {
  const res = await fetch(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`,
    { signal },
  );

  if (!res.ok) {
    throw new Error('Network error');
  }

  const data = await res.json(); // {count, results: [{name, url}, ...]}

  const results = Array.isArray(data?.results) ? data.results : [];

  const items = await Promise.all(
    results.map(async (item) => {
      const r = await fetch(item.url, { signal });
      return r.json();
    }),
  );

  return { count: data?.count ?? 0, items };
}
