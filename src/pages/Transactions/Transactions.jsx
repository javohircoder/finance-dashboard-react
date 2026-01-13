import FilterControls from "./FilterControls/FilterControls.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";
import TransactionsTable from "./TransactionsTable/TransactionsTable.jsx";
import Pagination from "./Pagination/Pagination.jsx";

function Transactions() {
    return (
        <section className="transactions">
            <SearchBox/>
            <FilterControls/>
            <TransactionsTable/>
            <Pagination/>
        </section>

    )
}

export default Transactions;