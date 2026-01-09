import styles from './SearchBox.module.scss';
import SvgSearchIcon from "../../../components/UI/icons/SvgSearchIcon.jsx";

function SearchBox() {
    return (
        <div className={styles.searchBox}>
             <span className={styles.icon}>
                 <SvgSearchIcon/>
            </span>
            <input type="text"
                   name="search"
                   id="search-box__input"
                   placeholder="Search transaction"
                   onChange={(e) => onChange(e.target.value)}/>
        </div>
    )
}

export default SearchBox;