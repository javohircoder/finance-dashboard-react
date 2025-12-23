function BillItem() {
    return (
        <div className="bill-item" data-state="paid">
            <span className="bill-item__label">Paid Bills</span>
            <span className="bill-item__amount">$190.00</span>
        </div>
    );
}

export default BillItem;
