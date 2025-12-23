function TransactionItem() {
    return (
        <div className="transaction">
            <div className="transaction__info">
                <img
                    className="transaction__avatar"
                    src="/images/Main/users/Person-1.png"
                    alt="Emma Richardson"
                />
                <span className="transaction__name">Emma Richardson</span>
            </div>

            <div className="transaction__details">
        <span className="transaction__amount transaction__amount--positive">
          +$75.50
        </span>
                <span className="transaction__date">19 Aug 2024</span>
            </div>
        </div>
    );
}

export default TransactionItem;
