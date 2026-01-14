import styles from './FilterControls.module.css';
import SvgCaretDown from '../../../components/UI/icons/SvgCaretDownIcon.jsx';

function FilterControls({ sortBy, category, onSortChange, onCategoryChange }) {
  return (
    <div className={styles.filters}>
      <div className={styles.filterItem}>
        <label className={styles.label}> Sort by</label>
        <div className={styles.selectWrapper}>
          <select
            className={styles.select}
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="a-z">A to Z</option>
            <option value="z-a">Z to A</option>
            <option value="highest">Highest</option>
            <option value="lowest">Lowest</option>
          </select>
          <span className={styles.arrow}>
            <SvgCaretDown />
          </span>
        </div>
      </div>
      <div className={styles.filterItem}>
        <label className={styles.label}>Category</label>
        <div className={styles.selectWrapper}>
          <select
            className={styles.select}
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="all">All Transactions</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Bills">Bills</option>
            <option value="Groceries">Groceries</option>
            <option value="Transportation">Dining Out</option>
            <option value="Transportation">Transportation</option>
            <option value="Personal Care">Personal Care</option>
            <option value="General">General</option>
          </select>
          <span className={styles.arrow}>
            <SvgCaretDown />
          </span>
        </div>
      </div>
    </div>
  );
}

export default FilterControls;
