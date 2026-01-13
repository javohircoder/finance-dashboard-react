import FilterControls from "./FilterControls/FilterControls.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";
import TransactionsTable from "./TransactionsTable/TransactionsTable.jsx";
import Pagination from "./Pagination/Pagination.jsx";
import styles from "./Transactions.module.scss";
import {useEffect, useState} from "react";

// const transactionsData = [
//     {id: 1, title: "Amazon", amount: 120},
//     {id: 2, title: "Netflix", amount: 15},
//     {id: 3, title: "Apple", amount: 300},
// ];


function Transactions() {
    const [searchValue, setSearchValue] = useState("");
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        // imitation Api
        setTimeout(() => {
            setTransactions([
                {id: 1, title: "Amazon", amount: 120},
                {id: 2, title: "Netflix", amount: 15},
                {id: 3, title: "Apple", amount: 300},
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    const filteredTransactions = transactions.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (
        <section className={styles.transactions}>
            <h1>Transactions</h1>
            <SearchBox value={searchValue} onChange={setSearchValue}/>
            <FilterControls/>
            {loading ? (<p>Loading...</p>) : (<TransactionsTable data={filteredTransactions}/>)}

            <Pagination/>
        </section>

    )
}

export default Transactions;