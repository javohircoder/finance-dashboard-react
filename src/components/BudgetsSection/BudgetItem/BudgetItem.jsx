function BudgetItem() {
  return (
    <div className="budget-item">
      <span className="budget-item__color" data-state="entertainment" />
      <div className="budget-item__text">
        <span className="budget-item__name">Entertainment</span>
        <span className="budget-item__amount">$50.00</span>
      </div>
    </div>
  );
}

export default BudgetItem;
