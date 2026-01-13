import TransactionRow from "../TransactionRow/TransactionRow.jsx";

function TransactionsTable({data}) {
    console.log("TABLE DATA:", data);
    if (data.length === 0) {
        return <p>No transactions found</p>;
    }
    return (
        <table>
            <tbody>
            {data.map((item) => (
                <TransactionRow key={item.id} transaction={item}/>
            ))}
            </tbody>
        </table>
    )
}

export default TransactionsTable;