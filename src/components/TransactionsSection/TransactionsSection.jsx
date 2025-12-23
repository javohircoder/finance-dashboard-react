import TransactionsList from './TransactionsList/TransactionsList';

function TransactionsSection() {
    return (
        <section className="section transactions-section">
            <div className="section__header header-main">
                <h3 className="section__title">Transactions</h3>

                <a href="#" className="section__link">View All
                    <svg
                        fill="none"
                        width="6"
                        height="11"
                        viewBox="0 0 6 11"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.85375 0.146648L5.85375 5.14665L0.85375 10.8541"
                            fill="currentColor"
                        />
                    </svg>
                </a>
            </div>
            <div className="section__content">
                <TransactionsList/>
            </div>
        </section>
    );
}

export default TransactionsSection;
