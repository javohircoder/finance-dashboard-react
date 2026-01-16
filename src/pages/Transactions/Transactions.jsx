import { useEffect, useMemo, useState } from 'react';
import FilterControls from './FilterControls/FilterControls.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import TransactionsTable from './TransactionsTable/TransactionsTable.jsx';
import Pagination from './Pagination/Pagination.jsx';
import styles from './Transactions.module.scss';
import { mockTransactions } from '../../data/mockTransactions.js';
import PageHeader from '../../components/PageHeader/PageHeader';

const PAGE_SIZE = 20;

function Transactions() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('Latest');

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  //Load
  useEffect(() => {
    setLoading(true);

    // imitation Api
    setTimeout(() => {
      setTransactions(mockTransactions);
      setLoading(false);
    }, 800);
  }, []);

  //Filter
  const filteredTransactions = useMemo(() => {
    let result = [...transactions];

    if (search.trim()) {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category !== 'All') {
      result = result.filter((item) => item.category === category);
    }
    //Sort
    switch (sort) {
      case 'Oldest':
        result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date));
        break;
      case 'A to Z':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'Z to A':
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'Highest':
        result.sort((a, b) => b.amount - a.amount);
        break;
      case 'Lowest':
        result.sort((a, b) => a.amount - b.amount);
        break;
      default:
        result.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    return result;
  }, [transactions, search, category, sort]);

  //Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filteredTransactions.length / PAGE_SIZE),
  );

  const paginatedTransactions = filteredTransactions.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  //Reset filter
  useEffect(() => {
    setPage(1);
  }, [search, category, sort]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);
  return (
    <>
      <PageHeader title="Transactions" />

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

        {loading ? (
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
        ) : (
          <>
            <div className={styles.tableWrapper}>
              <TransactionsTable data={paginatedTransactions} />
            </div>

            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </>
        )}
      </section>
    </>
  );
}

export default Transactions;
