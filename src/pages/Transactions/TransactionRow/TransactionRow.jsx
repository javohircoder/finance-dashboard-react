function TransactionRow({transaction}) {
    return (
        <tr>
            <td>{transaction.title}</td>
            <td>{transaction.amount}$</td>
        </tr>
    )
}

export default TransactionRow;