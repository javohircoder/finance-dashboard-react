import { useEffect, useMemo, useState } from 'react';
import FilterControls from './FilterControls/FilterControls.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import TransactionsTable from './TransactionsTable/TransactionsTable.jsx';
import Pagination from './Pagination/Pagination.jsx';
import styles from './Transactions.module.scss';
import { mockTransactions } from '../../data/mockTransactions.js';
import PageHeader from '../../components/PageHeader/PageHeader';

function Transactions() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('Latest');
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const filteredTransactions = useMemo(() => {
    let result = [...transactions];

    if (search.trim()) {
      result = result.filter((item) =>
        item.title?.toLowerCase().includes((search || '').toLowerCase()),
      );
    }

    if (category !== 'All') {
      result = result.filter((item) => item.category === category);
    }
    //Sort
    switch (sort) {
      case 'Oldest':
        result = [...result].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date),
        );
        break;
      case 'A to Z':
        result = [...result].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'Z to A':
        result = [...result].sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'Highest':
        result = [...result].sort((a, b) => b.mount - a.mount);
        break;
      case 'Lowest':
        result = [...result].sort((a, b) => a.amount - b.amount);
        break;
      default:
        result = [...result].sort(
          (a, b) => new Date(b.date) - new Date(a.date),
        );
    }
    return result;
  }, [transactions, search, category, sort, loading]);

  useEffect(() => {
    setLoading(true);

    // imitation Api
    setTimeout(() => {
      setTransactions(mockTransactions);
      setLoading(false);
    }, 800);
  }, []);

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
          <TransactionsTable data={filteredTransactions} />
        )}

        <Pagination />
      </section>
    </>
  );
}

export default Transactions;
