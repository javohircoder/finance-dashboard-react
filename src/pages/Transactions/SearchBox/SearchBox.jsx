import styles from './SearchBox.module.scss';

function SearchBox() {
    return (
        <div className={styles.search}>
            <input type="text"
                   name="search"
                   id="search-box__input"
                   placeholder="Search transaction"
                   onChange={(e) => onChange(e)}/>
        </div>
    )
}