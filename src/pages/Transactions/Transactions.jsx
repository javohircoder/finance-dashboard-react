import { useEffect, useMemo, useState } from 'react';
import FilterControls from './FilterControls/FilterControls.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import TransactionsTable from './TransactionsTable/TransactionsTable.jsx';
import Pagination from './Pagination/Pagination.jsx';
import styles from './Transactions.module.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import { fetchPokemonPage } from '../../data/pokemonApi.js';

const API_LIMIT = 100;

const UI_PAGE_SIZE = 12;

// Dream  SVG
const dreamWorldUrl = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

// Showdown GIF
const showdownGifUrl = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`;

// const UI_FLAGS = {
//     forcePagination: false,
// };
//
// const shouldShowPagination =
//     UI_FLAGS.forcePagination || totalPages > 1;

function adaptPokemonToTransaction(p) {
  const id = p.id;

  return {
    id,
    name: p.name,
    title: p.name,

    avatarSvg: dreamWorldUrl(id),
    avatar: showdownGifUrl(id),

    height: (p.height ?? 0) / 10,
    weight: (p.weight ?? 0) / 10,
    speed: p.stats?.find((s) => s.stat?.name === 'speed')?.base_stat ?? 0,

    category: p.types?.[0]?.type?.name || 'unknown',
  };
}

function Transactions() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('Latest');

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorText, setErrorText] = useState('');

  // client page
  const [page, setPage] = useState(1);

  // LOAD: 20 data
  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        setErrorText('');
        setLoading(true);

        const { items } = await fetchPokemonPage({
          limit: API_LIMIT,
          offset: 0,
          signal: controller.signal,
        });

        setTransactions(items.map(adaptPokemonToTransaction));
      } catch (e) {
        if (e?.name !== 'AbortError') {
          setErrorText(e?.message || 'Failed to load data');
        }
      } finally {
        setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, []);

  // FILTER + SORT (client-side)
  const filteredTransactions = useMemo(() => {
    let result = [...transactions];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((item) =>
        (item.name || item.title || '').toLowerCase().includes(q),
      );
    }

    if (category !== 'All') {
      result = result.filter((item) => item.category === category);
    }

    switch (sort) {
      case 'A to Z':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Z to A':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'Highest':
        result.sort((a, b) => b.speed - a.speed); // пример сортировки "по силе" — можно поменять
        break;
      case 'Lowest':
        result.sort((a, b) => a.speed - b.speed);
        break;
      // Latest/Oldest тут можно не делать — у покемонов нет date
      default:
        break;
    }

    return result;
  }, [transactions, search, category, sort]);

  const SHOW_PAGINATION = true;

  const [forceShowPagination, setForceShowPagination] = useState(false);

  const shouldPagination = SHOW_PAGINATION || totalPages > 1;

  // ✅ client pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filteredTransactions.length / UI_PAGE_SIZE),
  );

  const paginatedTransactions = useMemo(() => {
    const start = (page - 1) * UI_PAGE_SIZE;
    return filteredTransactions.slice(start, start + UI_PAGE_SIZE);
  }, [filteredTransactions, page]);

  // reset page on filters
  useEffect(() => {
    setPage(1);
  }, [search, category, sort]);

  // clamp page
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const isInitialLoading = loading || transactions.length === 0;

  return (
    <>
      <PageHeader title="Transactions" />
      <div className={styles.page}>
        <section className={styles.transactions}>
          <section className={styles.transactionsControls}>
            <SearchBox value={search} onChange={setSearch} />

            <FilterControls
              category={category}
              onCategoryChange={setCategory}
              sortBy={sort}
              onSortChange={setSort}
            />
          </section>

          {isInitialLoading ? (
            <div className={styles.transactionsLoad}>
              <div className={styles.roller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div>Loading...</div>
            </div>
          ) : errorText ? (
            <div className={styles.tableWrapper}>{errorText}</div>
          ) : (
            <>
              <div className={styles.tableWrapper}>
                <TransactionsTable data={paginatedTransactions} />
              </div>
              {/* Dynamic pagination totalPages > 1*/}
              {shouldPagination && (
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={setPage}
                />
              )}
            </>
          )}
        </section>
      </div>
    </>
  );
}

export default Transactions;
