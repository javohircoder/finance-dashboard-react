import styles from './SearchBox.module.scss';
import SvgSearchIcon from '../../../components/UI/icons/SvgSearchIcon.jsx';

function SearchBox({ value, onChange }) {
  return (
    <div className={styles.searchBox}>
      <input
        className={styles.input}
        type="text"
        value={value}
        placeholder="Search transaction"
        onChange={(e) => onChange(e.target.value)}
      />
      <button className={styles.button}>
        <SvgSearchIcon />
      </button>
    </div>
  );
}

export default SearchBox;
